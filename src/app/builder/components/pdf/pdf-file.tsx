import { useResumeStore } from "@/stores/resume-data-store";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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
export const ResumePDF = () => {
  const { resumeData } = useResumeStore();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
            <Text style={styles.personDataInfo}>
              {resumeData.personalInfo.location} •{" "}
              {resumeData.personalInfo.phone} • {resumeData.personalInfo.email}
            </Text>
            <Text style={styles.contactInfo}>
              {resumeData.personalInfo.links
                .map((link) => link.url)
                .join(" • ")}
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
                  <Text style={styles.jobTitle}>
                    {job.position} {job.company && `| ${job.company}`}
                  </Text>
                  <Text style={styles.jobDate}>
                    {job.periodStart
                      ? new Date(job.periodStart).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : ""}{" "}
                    {job.periodEnd
                      ? `- ${new Date(job.periodEnd).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            year: "numeric",
                          }
                        )}`
                      : "- Present"}
                  </Text>
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
                  <Text style={styles.jobDate}>
                    {edu.periodStart
                      ? new Date(edu.periodStart).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : ""}{" "}
                    {edu.periodEnd
                      ? `- ${new Date(edu.periodEnd).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            year: "numeric",
                          }
                        )}`
                      : ""}
                  </Text>
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
                  • {category.category}: {category.skills.join(", ")}
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
};
