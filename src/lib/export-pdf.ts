import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

export const exportToPDF = () => {
  const element = document.getElementById("resume-preview");
  if (!element) return;

  // Temporarily remove shadow, add white background
  const originalStyle = element.style.cssText;
  element.style.boxShadow = "none";
  element.style.background = "white";

  // Collect all link elements and their positions before canvas conversion
  const linkElements = element.querySelectorAll("[data-link-url]");
  const linkData: Array<{
    url: string;
    rect: DOMRect;
    elementRect: DOMRect;
  }> = [];

  const elementRect = element.getBoundingClientRect();

  linkElements.forEach((linkEl) => {
    const url = linkEl.getAttribute("data-link-url");
    if (url) {
      const rect = linkEl.getBoundingClientRect();
      linkData.push({
        url,
        rect,
        elementRect,
      });
    }
  });

  html2canvas(element, {
    backgroundColor: "#ffffff",
    scale: 2, // Higher quality
    useCORS: true,
    logging: false,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;

    // Add the image
    pdf.addImage(
      imgData,
      "PNG",
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );

    // Add clickable links
    linkData.forEach(({ url, rect, elementRect }) => {
      // Calculate relative position within the element
      const relativeX = rect.left - elementRect.left;
      const relativeY = rect.top - elementRect.top;

      // Convert to PDF coordinates (accounting for scale and positioning)
      const pdfX = imgX + ((relativeX * ratio * 2) / 96) * 25.4; // Convert pixels to mm
      const pdfY = imgY + ((relativeY * ratio * 2) / 96) * 25.4; // Convert pixels to mm
      const pdfLinkWidth = ((rect.width * ratio * 2) / 96) * 25.4;
      const pdfLinkHeight = ((rect.height * ratio * 2) / 96) * 25.4;

      // Ensure the URL has a protocol
      let fullUrl = url;
      if (url.startsWith("mailto:") || url.startsWith("tel:")) {
        fullUrl = url;
      } else if (!url.startsWith("http")) {
        fullUrl = `https://${url}`;
      }

      // Add the link annotation
      pdf.link(pdfX, pdfY, pdfLinkWidth, pdfLinkHeight, { url: fullUrl });
    });

    pdf.save("resume.pdf");

    // Restore original style
    element.style.cssText = originalStyle;
  });
};
