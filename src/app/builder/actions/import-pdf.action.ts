"use server";

import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
import { ratelimit } from "@/lib/ratelimit";
import { headers } from "next/headers";
import { PdfReader } from "pdfreader";

// Action para importar PDF
export async function importPdfAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      throw new Error("No file uploaded.");
    }

    if (file.type !== "application/pdf") {
      throw new Error("File is not a PDF.");
    }

    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";

    await ratelimit.limit(ip);

    const { success } = await ratelimit.limit(ip);
    if (!success) {
      throw new Error("Rate limit exceeded");
    }

    const finalText = await extractTextFromPdf(file);

    const result = await generateText({
      model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
      system: `
      **YOUR PRINCIPAL LANGUAGE IS ENGLISH.**

      Based on the following text, extract the personal information and the professional experience and return it in a JSON format, the format must be like this:
      {
          "personalInfo": {
            "type": "object",
            "properties": {
              "name": "string",
              "location": "string",
              "phone": "string",
              "email": "string",
              "links": [
                {
                  "label": "string",
                  "url": "string"
                }
              ]
            }
          },
          "summary": "string",
          "experience": [
            {
              "position": "string",
              "company": "string",
              "periodStart": "YYYY-MM-DD",
              "periodEnd": "YYYY-MM-DD",
              "description": "string"
            }
          ],
          "education": [
            {
              "degree": "string",
              "institution": "string",
              "periodStart": "YYYY-MM-DD",
              "periodEnd": "YYYY-MM-DD"
            }
          ],
          "skills": {
            "technical": [
              {
                "category": "string",
                "skills": ["string"]
              }
            ],
            "languages": [
              {
                "language": "string",
                "level": "string"
              }
            ]
          }
        }
      **IMPORTANT:**
      - The text is in English.
      - The text is a resume.
      - The text is a single page.
      - The text is a single column.
      - Translate the text to English.
      - Just return the JSON, no other text.

      ALWAYS RESPOND IN ENGLISH. If the input is in another language that is not English, translate it to English.
    `,
      prompt: `Convert the following text to a JSON format: ${finalText}`,
    });

    return JSON.parse(result.text.replaceAll("```", ""));
  } catch (error) {
    console.error("Error importing PDF:", error);
    throw new Error("PDF import failed.");
  }
}

// Función helper para extraer texto del PDF
const extractTextFromPdf = async (file: File): Promise<string> => {
  const pdfBuffer = Buffer.from(await file.arrayBuffer());

  const reader = new PdfReader();
  let finalText = "";

  return new Promise((resolve, reject) => {
    reader.parseBuffer(pdfBuffer, (err, item) => {
      if (item && item.text) {
        finalText += `${item.text}`;
      }
      if (!item) resolve(finalText);
      if (err) reject(err);
    });
  });
};
