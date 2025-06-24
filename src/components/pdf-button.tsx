"use client";
import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Link,
  PDFViewer,
} from "@react-pdf/renderer";
import { ResumeData } from "./resume-preview";
import { Button } from "./ui/button";
import { FileText, Loader2 } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    border: "1px solid #000000",
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "column",
    margin: 30,
    border: "1px solid #000000",
    padding: 30,
    height: "90%",
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  personDataInfo: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 2,
  },
  contactInfo: {
    fontSize: 10,
    color: "#0066CC",
    textAlign: "center",
    marginBottom: 2,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 5,
    textAlign: "justify",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  jobDate: {
    fontSize: 10,
    fontStyle: "italic",
  },
  jobDescription: {
    fontSize: 10,
    lineHeight: 1.3,
    marginBottom: 8,
    textAlign: "justify",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  degree: {
    fontSize: 11,
    fontWeight: "bold",
  },
  institution: {
    fontSize: 10,
    marginBottom: 5,
  },
  skillsContainer: {
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 10,
    marginBottom: 3,
    marginLeft: 10,
  },
});

// Componente del PDF
const ResumePDF = ({ resumeData }: { resumeData: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
          <Text style={styles.personDataInfo}>
            {resumeData.personalInfo.location} • {resumeData.personalInfo.phone}{" "}
            • {resumeData.personalInfo.email}
          </Text>
          <Text style={styles.contactInfo}>
            {resumeData.personalInfo.links.map((link) => link.url).join(" • ")}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.text}>{resumeData.summary}</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {resumeData.experience.map((job, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobDate}>{job.period}</Text>
              </View>
              <Text style={styles.jobDescription}>{job.description}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData.education.map((edu, index) => (
            <View key={index}>
              <View style={styles.educationHeader}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.jobDate}>{edu.period}</Text>
              </View>
              <Text style={styles.institution}>{edu.institution}</Text>
            </View>
          ))}
        </View>

        {/* Additional Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>

          {/* Technical Skills */}
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Technical Skills</Text>
            {resumeData.skills.technical.map((category, index) => (
              <Text key={index} style={styles.skillsList}>
                • {category}
              </Text>
            ))}
          </View>

          {/* Languages */}
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Languages</Text>
            {resumeData.skills.languages.map((lang, index) => (
              <Text key={index} style={styles.skillsList}>
                • {lang.language}: {lang.level}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Componente principal con datos de ejemplo
export const PDFButton = ({ resumeData }: { resumeData: ResumeData }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button asChild size="sm">
            <PDFDownloadLink
              document={<ResumePDF resumeData={resumeData} />}
              fileName="resume.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <div className="flex items-center gap-1 text-xs">
                    <FileText className="size-3" />
                    PDF
                  </div>
                )
              }
            </PDFDownloadLink>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[40rem] h-[80vh]">
          <PDFViewer className="w-full h-full">
            <ResumePDF resumeData={resumeData} />
          </PDFViewer>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
