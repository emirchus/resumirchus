import html2canvas from "html2canvas-pro";

export const exportAsImage = (format: "PNG" | "JPEG") => {
  const element = document.getElementById("resume-preview");
  if (!element) return;

  // Guardar estilo original
  const originalStyle = element.style.cssText;

  // Aplicar estilos temporales para exportación
  element.style.boxShadow = "none";
  element.style.background = "white";

  html2canvas(element, {
    backgroundColor: "#ffffff",
    scale: 2, // Mayor calidad
    useCORS: true,
    logging: false,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = `resume.${format.toLowerCase()}`;
    link.href = canvas.toDataURL(`image/${format.toLowerCase()}`);
    link.click();

    // Restaurar estilo original
    element.style.cssText = originalStyle;
  });
};
