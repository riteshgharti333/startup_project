"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiFileText,
  FiShield,
  FiArrowRight,
  FiPhone,
  FiLock,
  FiEye,
  FiServer,
  FiGlobe,
} from "react-icons/fi";

import Link from "next/link";
import { PageSEO } from "../components/PageSEO";

const Privacy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Twipra Technology ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (twipra.tech) or use our services.

Please read this Privacy Policy carefully. By using our website or services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our services.`,
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: `We collect information that you voluntarily provide when interacting with us:

Personal Information:
- Full name
- Email address
- Phone number
- Company name
- Job title
- Project details and requirements

Automatically Collected Information:
- IP address and browser type
- Device information and operating system
- Pages visited and time spent on our website
- Referring website or source
- Cookies and similar tracking technologies

Communication Data:
- Messages sent through our contact forms
- Email correspondence
- Project briefs and requirements documents
- Meeting notes and consultation records`,
    },
    {
      id: "information-use",
      title: "3. How We Use Your Information",
      content: `We use collected information for the following purposes:

Service Delivery:
- To provide, maintain, and improve our services
- To process project requests and proposals
- To communicate with you about your projects
- To provide customer support and technical assistance

Business Operations:
- To send invoices, receipts, and payment confirmations
- To manage client relationships and accounts
- To analyze usage patterns and improve our website
- To comply with legal obligations

Marketing (with consent):
- To send newsletters and promotional materials
- To inform you about new services or features
- To share relevant case studies or resources

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking Technologies",
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience:

Types of Cookies We Use:
- Essential Cookies: Required for website functionality and security
- Analytics Cookies: Help us understand how visitors use our website
- Preference Cookies: Remember your settings and preferences
- Marketing Cookies: Track the effectiveness of our marketing efforts

You can control cookie settings through your browser. Most browsers allow you to:
- View and delete cookies
- Block all cookies
- Block third-party cookies
- Clear cookies when you close the browser

Disabling cookies may affect the functionality of our website.

We use Google Analytics to collect anonymous usage data. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.`,
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

Service Providers:
We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our clients. These providers are contractually bound to protect your information.

Legal Requirements:
We may disclose information if required by law, court order, or government regulation. We will notify you if we receive such a request, unless prohibited by law.

Business Transfers:
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.

With Your Consent:
We may share information for other purposes with your explicit consent.

We do not sell personal information to third parties.`,
    },
    {
      id: "data-security",
      title: "6. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information:

Security Measures:
- SSL/TLS encryption for data transmission
- Secure servers and firewalls
- Regular security assessments and updates
- Access controls and authentication systems
- Employee training on data protection

However, no method of electronic storage or transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You play an important role in protecting your information by:
- Using strong passwords
- Not sharing login credentials
- Keeping software updated
- Being cautious of phishing attempts`,
    },
    {
      id: "data-retention",
      title: "7. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:

Retention Periods:
- Active client data: Retained for the duration of the business relationship plus 5 years
- Project files and deliverables: Retained as specified in project agreements
- Marketing communications: Until you unsubscribe or withdraw consent
- Website analytics data: Retained for 26 months

After the retention period, we securely delete or anonymize your information. You may request deletion of your data earlier, subject to legal and contractual obligations.

We may retain certain information for legal, accounting, or regulatory compliance purposes even after the standard retention period.`,
    },
    {
      id: "your-rights",
      title: "8. Your Data Protection Rights",
      content: `Depending on your location, you may have the following rights regarding your personal data:

- Right to Access: Request copies of your personal data we hold
- Right to Rectification: Correct inaccurate or incomplete information
- Right to Erasure: Request deletion of your personal data
- Right to Restrict Processing: Limit how we use your information
- Right to Data Portability: Receive your data in a structured format
- Right to Object: Object to processing based on legitimate interests
- Right to Withdraw Consent: Withdraw previously given consent

To exercise these rights, contact us at the information provided in Section 12. We will respond to your request within 30 days.

We may need to verify your identity before processing your request. There is no fee for making a request unless it is manifestly unfounded or excessive.`,
    },
    {
      id: "third-party-links",
      title: "9. Third-Party Links",
      content: `Our website may contain links to third-party websites, plugins, or services that are not operated by us. Examples include:
- Social media platforms
- Partner websites
- Payment processors
- External tools and resources

We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites you visit.

The inclusion of third-party links does not imply our endorsement of their content or practices. You interact with third-party services at your own risk.`,
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.

If we become aware that we have inadvertently collected personal data from a child under 18 without parental consent, we will take steps to delete that information as quickly as possible.

If you believe a child under 18 has provided us with personal information, please contact us immediately at the information provided in Section 12.`,
    },
    {
      id: "international",
      title: "11. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.

We are based in Bangladesh, and our servers may be located in various countries through our hosting providers. When we transfer data internationally, we ensure appropriate safeguards are in place, such as:
- Standard contractual clauses
- Data processing agreements
- Adequacy decisions where applicable

By using our services, you consent to the transfer of your information to countries outside your country of residence.`,
    },
    {
      id: "contact-info",
      title: "12. Contact Information",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:

Twipra Technology
Dhaka, Bangladesh

Data Protection Officer: twipratechnologies@gmail.com
General Inquiries: twipratechnologies@gmail.com
Phone: +880 1851072019
WhatsApp: +880 1310889153
Website: twipra.tech

We aim to acknowledge all inquiries within 48 hours and provide a full response within 30 days.

Last Updated: June 2024

If you believe we have not adequately addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority.`,
    },
  ];

  return (
    <>
      <PageSEO
        title="Privacy Policy | Twipra Technology"
        description="Read Twipra Technology's Privacy Policy to understand how we collect, use, and protect your personal information when using our website and services."
        keywords={[
          "privacy policy",
          "data protection",
          "Twipra Technology privacy",
          "website privacy policy",
          "data security",
          "GDPR compliance",
        ]}
        canonical={`${baseUrl}/privacy`}
        ogImage="/og-privacy.jpg"
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Privacy Policy", url: `${baseUrl}/privacy` },
        ]}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiLock size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">Legal</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
                Privacy{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Policy</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                  />
                </span>
              </h1>

              <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
                Last updated: June 2024 · Your privacy is important to us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="relative pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold text-(--text) mb-3">
                Quick Navigation
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {sections.map((section, index) => (
                  <Link
                    key={index}
                    href={`#${section.id}`}
                    className="text-xs text-(--text-muted) hover:text-(--primary) transition-colors truncate"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section ref={sectionRef} className="relative pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6 lg:p-8"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-sm font-bold text-(--primary) flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </h2>
                  <div className="text-sm sm:text-base text-(--text-muted) leading-relaxed space-y-3 whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-8 sm:p-10 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-2">
                Questions About Your Data?
              </h2>
              <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
                If you have questions about our Privacy Policy or how we handle
                your data, please reach out.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="mailto:privacy@twipra.tech"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
                >
                  <FiShield size={14} />
                  Contact Privacy Team
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--background) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
                >
                  <FiPhone size={14} className="text-(--primary)" />
                  Contact Us
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;
