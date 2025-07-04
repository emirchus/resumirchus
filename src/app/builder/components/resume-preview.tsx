"use client";

import { useResumeStore } from "@/stores/resume-data-store";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const handleLinkClick = (url: string) => {
  if (!url) return;
  const urlWithProtocol = url.startsWith("http") ? url : `https://${url}`;
  window.open(urlWithProtocol, "_blank");
};

export default function ResumePreview({
  onSectionClick,
}: {
  onSectionClick: (
    section: string,
    index?: number | null,
    field?: string
  ) => void;
}) {
  const { resumeData: data } = useResumeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader className="animate-spin" />
      </div>
    );
  }
  return (
    <div
      id="resume-preview"
      className="bg-white shadow-lg text-black !font-serif"
      style={{
        width: "210mm", // A4 width
        minHeight: "297mm", // A4 height
        maxWidth: "210mm",
        margin: "0 auto",
        padding: "20mm", // Standard margin
        boxSizing: "border-box",
      }}
    >
      <div className="border-2 border-black p-6 h-full">
        <header
          className="text-center mb-6 cursor-pointer hover:bg-gray-50"
          onClick={() => onSectionClick("personal")}
        >
          <h1
            className="text-3xl font-bold mb-2"
            onClick={(e) => {
              e.stopPropagation();
              onSectionClick("personal", null, "name");
            }}
          >
            {data.personalInfo.name}
          </h1>
          <p className="text-sm">
            {data.personalInfo.location && (
              <span
                className="hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onSectionClick("personal", null, "location");
                }}
              >
                {data.personalInfo.location}
              </span>
            )}
            {data.personalInfo.location && data.personalInfo.phone && " • "}
            {data.personalInfo.phone && (
              <span
                className="hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onSectionClick("personal", null, "phone");
                }}
              >
                {data.personalInfo.phone}
              </span>
            )}
            {(data.personalInfo.location || data.personalInfo.phone) &&
              data.personalInfo.email &&
              " • "}
            {data.personalInfo.email && (
              <span
                className="hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onSectionClick("personal", null, "email");
                }}
              >
                {data.personalInfo.email}
              </span>
            )}
            {data.personalInfo.links && data.personalInfo.links.length > 0 && (
              <>
                <br />
                <span className="inline-flex flex-wrap items-center justify-center gap-1">
                  {data.personalInfo.links.map(
                    (link, index) =>
                      link.url && (
                        <span key={index} className="inline-flex items-center">
                          {index > 0 && <span className="mx-1">•</span>}
                          <span
                            className="hover:underline cursor-pointer text-blue-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(link.url);
                            }}
                            onDoubleClick={(e) => {
                              e.stopPropagation();
                              onSectionClick("personal", null, "links");
                            }}
                          >
                            {link.url}
                          </span>
                        </span>
                      )
                  )}
                </span>
              </>
            )}
          </p>
        </header>

        <hr className="border-t border-black my-4" />

        {data.summary && (
          <>
            <section
              className="mb-6 cursor-pointer hover:bg-gray-50"
              onClick={() => onSectionClick("summary")}
            >
              <h2 className="text-lg font-bold uppercase mb-2">Summary</h2>
              <p className="text-sm whitespace-pre-wrap">
                {data.summary.replace(/\n/g, "\n")}
              </p>
            </section>
            <hr className="border-t border-black my-4" />
          </>
        )}

        {data.experience && data.experience.length > 0 && (
          <>
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-2">
                Work Experience
              </h2>
              {data.experience.map(
                (exp, index) =>
                  exp.position && (
                    <div
                      key={index}
                      className="mb-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => onSectionClick("experience", index)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold">
                          {exp.position} {exp.company && `| ${exp.company}`}
                        </h3>
                        <span className="text-sm">
                          {exp.periodStart
                            ? new Date(exp.periodStart).toLocaleDateString(
                                "en-US",
                                { month: "long", year: "numeric" }
                              ) +
                              " " +
                              (exp.periodEnd
                                ? `- ${new Date(
                                    exp.periodEnd
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  })}`
                                : "- Present")
                            : ""}
                        </span>
                      </div>
                      {exp.description && (
                        <p className="text-sm mt-1">{exp.description}</p>
                      )}
                    </div>
                  )
              )}
            </section>
            <hr className="border-t border-black my-4" />
          </>
        )}

        {data.education && data.education.length > 0 && (
          <>
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
              {data.education.map(
                (edu, index) =>
                  edu.degree && (
                    <div
                      key={index}
                      className="mb-2 cursor-pointer hover:bg-gray-50"
                      onClick={() => onSectionClick("education", index)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-bold">{edu.degree}</h3>
                          {edu.institution && (
                            <p className="text-sm">{edu.institution}</p>
                          )}
                        </div>
                        <span className="text-sm">
                          {edu.periodStart
                            ? new Date(edu.periodStart).toLocaleDateString(
                                "en-US",
                                { month: "long", year: "numeric" }
                              ) +
                              " " +
                              (edu.periodEnd
                                ? `- ${new Date(
                                    edu.periodEnd
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                  })}`
                                : "- Present")
                            : ""}
                        </span>
                      </div>
                    </div>
                  )
              )}
            </section>
            <hr className="border-t border-black my-4" />
          </>
        )}

        <section>
          <h2 className="text-lg font-bold uppercase mb-2">
            Additional Information
          </h2>

          {data.skills.technical &&
            data.skills.technical.length > 0 &&
            data.skills.technical.some((skill) => skill) && (
              <div
                className="mb-4 cursor-pointer hover:bg-gray-50"
                onClick={() => onSectionClick("skills", null, "technical")}
              >
                <h3 className="text-sm font-bold mb-1">Technical Skills</h3>
                <ul className="list-disc pl-5 text-sm">
                  {data.skills.technical.map((skill, index) => (
                    <li key={index}>
                      {skill.category}: {skill.skills.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {data.skills.languages && data.skills.languages.length > 0 && (
            <div
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => onSectionClick("skills", null, "languages")}
            >
              <h3 className="text-sm font-bold mb-1">Languages</h3>
              <ul className="list-disc pl-5 text-sm">
                {data.skills.languages.map(
                  (lang, index) =>
                    lang.language && (
                      <li key={index}>
                        {lang.language}: {lang.level}
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
