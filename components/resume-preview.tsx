"use client";

const getHostnameFromUrl = (url: string) => {
  if (!url) return "";
  try {
    // Add protocol if missing
    const urlWithProtocol = url.startsWith("http") ? url : `https://${url}`;
    const hostname = new URL(urlWithProtocol).hostname;
    return hostname.replace("www.", ""); // Remove www. prefix
  } catch {
    return url; // Return original if URL parsing fails
  }
};

const handleLinkClick = (url: string) => {
  if (!url) return;
  const urlWithProtocol = url.startsWith("http") ? url : `https://${url}`;
  window.open(urlWithProtocol, "_blank");
};

export interface ResumeData {
  personalInfo: {
    name: string;
    location: string;
    phone: string;
    email: string;
    links: { url: string; label: string }[];
  };
  summary: string;
  experience: { title: string; period: string; description: string }[];
  education: { degree: string; institution: string; period: string }[];
  skills: {
    technical: string[];
    languages: { language: string; level: string }[];
  };
}

export default function ResumePreview({
  data,
  onSectionClick,
}: {
  data: ResumeData;
  onSectionClick: (
    section: string,
    index?: number | null,
    field?: string
  ) => void;
}) {
  return (
    <div
      id="resume-preview"
      className="bg-white shadow-lg"
      style={{
        width: "210mm", // A4 width
        minHeight: "297mm", // A4 height
        maxWidth: "210mm",
        backgroundColor: "white",
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
                            {getHostnameFromUrl(link.url)}
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
              <p className="text-sm">{data.summary}</p>
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
                  exp.title && (
                    <div
                      key={index}
                      className="mb-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => onSectionClick("experience", index)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold">{exp.title}</h3>
                        {exp.period && (
                          <span className="text-sm">{exp.period}</span>
                        )}
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
                        {edu.period && (
                          <span className="text-sm">{edu.period}</span>
                        )}
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
                  {data.skills.technical.map(
                    (skill, index) => skill && <li key={index}>{skill}</li>
                  )}
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
