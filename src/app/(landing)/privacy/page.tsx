import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <div className="mt-6 text-sm">Last updated: June 26, 2025</div>
        </div>

        {/* Content */}
        <div className="bg-accent rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Information We Collect
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium  mb-3">
                  Personal Information
                </h3>
                <p className=" mb-4">
                  We may collect personal information that you provide directly
                  to us, including:
                </p>
                <ul className="list-disc pl-6  space-y-2">
                  <li>
                    Name and contact information (email address, phone number,
                    mailing address)
                  </li>
                  <li>Account credentials and profile information</li>
                  <li>Payment information and billing details</li>
                  <li>Communications you send to us</li>
                  <li>Survey responses and feedback</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium  mb-3">
                  Automatically Collected Information
                </h3>
                <p className=" mb-4">
                  When you use our services, we automatically collect certain
                  information:
                </p>
                <ul className="list-disc pl-6  space-y-2">
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>
                    Usage data (pages visited, time spent, click patterns)
                  </li>
                  <li>Location information (if you grant permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                How We Use Your Information
              </h2>
              <p className=" mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6  space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Communicating with you about our services</li>
                <li>Personalizing your experience</li>
                <li>Analyzing usage patterns to improve our services</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Sending marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Information Sharing and Disclosure
              </h2>
              <p className=" mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6  space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third parties who
                  assist us in operating our services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with
                  mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Consent:</strong> When you have given us explicit
                  permission
                </li>
                <li>
                  <strong>Safety:</strong> To protect the safety of our users or
                  the public
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Data Security
              </h2>
              <p className=" mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="list-disc pl-6  space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className=" mt-4">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. We cannot guarantee absolute
                security of your information.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Your Rights and Choices
              </h2>
              <p className=" mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6  space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing
                  of your information
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  information for certain purposes
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for
                  processing where applicable
                </li>
              </ul>
              <p className=" mt-4">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Cookies and Tracking Technologies
              </h2>
              <p className=" mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience. These technologies help us:
              </p>
              <ul className="list-disc pl-6  space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className=" mt-4">
                You can control cookies through your browser settings. However,
                disabling cookies may affect the functionality of our services.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Data Retention
              </h2>
              <p className="">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                comply with legal obligations, resolve disputes, and enforce our
                agreements. When we no longer need your information, we will
                securely delete or anonymize it.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                International Data Transfers
              </h2>
              <p className="">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and implement
                appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Children's Privacy
              </h2>
              <p className="">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us so we can delete such information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Changes to This Privacy Policy
              </h2>
              <p className="">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. We encourage you
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold  mb-4 pb-2 border-b-2 ">
                Contact Us
              </h2>
              <p className=" mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <ul className=" space-y-2">
                  <li>
                    <strong>Email:</strong> contacto@emirchus.ar
                  </li>
                  <li>
                    <strong>Address:</strong> Buenos Aires, Argentina
                  </li>
                  <li>
                    <strong>Phone:</strong> secreto federal
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
