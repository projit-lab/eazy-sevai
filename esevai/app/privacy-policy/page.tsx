import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME} - How we collect, use, and protect your personal information`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mb-8 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Card>
          <CardContent className="prose prose-neutral max-w-none pt-6 dark:prose-invert">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
              <p className="mb-4 text-muted-foreground">
                {SITE_NAME} ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our facilitation services for government documentation and applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
              <h3 className="mb-3 text-xl font-semibold">Personal Information</h3>
              <p className="mb-4 text-muted-foreground">
                We collect personal information that you provide to us, including but not limited to:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Full name, date of birth, and gender</li>
                <li>Contact information (email address, phone number, physical address)</li>
                <li>Government-issued identification documents (Aadhaar, PAN, Passport, etc.)</li>
                <li>Photographs and biometric information</li>
                <li>Financial information for payment processing</li>
                <li>Family details (parent names, spouse information, etc.)</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">Automatically Collected Information</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">We use your information for the following purposes:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Processing your service applications for government documentation</li>
                <li>Communicating with you about your application status</li>
                <li>Verifying your identity and documents</li>
                <li>Processing payments and maintaining transaction records</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Improving our services and website functionality</li>
                <li>Complying with legal obligations and government regulations</li>
                <li>Preventing fraud and ensuring service security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Data Security and Encryption</h2>
              <p className="mb-4 text-muted-foreground">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encrypted storage for all uploaded documents</li>
                <li>Secure payment gateway integration (PCI DSS compliant)</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Data Sharing and Disclosure</h2>
              <p className="mb-4 text-muted-foreground">
                We may share your information with:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Government agencies and official portals for application processing</li>
                <li>Payment processors for transaction completion</li>
                <li>Service providers who assist in our operations (subject to confidentiality agreements)</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Data Retention</h2>
              <p className="mb-4 text-muted-foreground">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Provide our services and maintain transaction records</li>
                <li>Comply with legal, regulatory, or contractual obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                Typically, we retain application data for 7 years from the date of service completion, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
              <p className="mb-4 text-muted-foreground">You have the right to:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent (where applicable)</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Cookies and Tracking</h2>
              <p className="mb-4 text-muted-foreground">
                We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Changes to This Policy</h2>
              <p className="mb-4 text-muted-foreground">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <ul className="mb-4 list-none space-y-2 text-muted-foreground">
                <li>Email: {CONTACT.email}</li>
                <li>Phone: {CONTACT.phone}</li>
                <li>Address: {CONTACT.address}</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


