import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME} - Rules and regulations for using our facilitation services`,
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mb-8 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Card>
          <CardContent className="prose prose-neutral max-w-none pt-6 dark:prose-invert">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">1. Agreement to Terms</h2>
              <p className="mb-4 text-muted-foreground">
                By accessing or using {SITE_NAME}'s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">2. Nature of Services</h2>
              <p className="mb-4 text-muted-foreground">
                {SITE_NAME} provides facilitation services for government documentation and applications. We act as intermediaries to assist customers in:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Aadhaar enrollment, updates, and corrections</li>
                <li>Passport applications, renewals, and related services</li>
                <li>Certificate applications (income, community, nativity, etc.)</li>
                <li>Document verification and form filling assistance</li>
              </ul>
              <p className="mb-4 font-semibold text-foreground">
                Important: We are NOT the official government portal. We provide assistance services only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">3. Service Fee vs. Government Fee</h2>
              <p className="mb-4 text-muted-foreground">
                The service fee you pay to {SITE_NAME} covers:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Professional assistance in form filling and documentation</li>
                <li>Document verification and guidance</li>
                <li>Application submission support</li>
                <li>Follow-up and status tracking</li>
                <li>Customer support throughout the process</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                <strong>Government fees are separate</strong> and must be paid directly to the official government portals as per applicable rates. We do not collect government fees on behalf of any authority.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">4. User Responsibilities</h2>
              <p className="mb-4 text-muted-foreground">As a user of our services, you agree to:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Submit genuine and valid documents</li>
                <li>Respond promptly to our communication requests</li>
                <li>Pay all applicable fees on time</li>
                <li>Comply with all government regulations and laws</li>
                <li>Not misuse our services for fraudulent purposes</li>
                <li>Maintain confidentiality of your account credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">5. Our Obligations</h2>
              <p className="mb-4 text-muted-foreground">{SITE_NAME} commits to:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Process your application with due diligence</li>
                <li>Maintain confidentiality of your personal information</li>
                <li>Provide regular updates on application status</li>
                <li>Assist in document preparation and verification</li>
                <li>Submit applications to appropriate government channels</li>
                <li>Provide customer support during working hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">6. Limitations of Liability</h2>
              <p className="mb-4 text-muted-foreground">
                {SITE_NAME} shall not be liable for:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Delays or rejections caused by government authorities</li>
                <li>Changes in government policies, fees, or procedures</li>
                <li>Inaccurate or false information provided by the user</li>
                <li>Technical issues with government portals</li>
                <li>Force majeure events (natural disasters, strikes, etc.)</li>
                <li>Loss of documents during postal/courier transit</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                Our liability is limited to the service fee paid by you. We are not responsible for consequential, indirect, or incidental damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">7. Processing Time</h2>
              <p className="mb-4 text-muted-foreground">
                Processing times mentioned on our website are estimates based on typical government timelines. Actual processing time may vary depending on:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Government workload and procedures</li>
                <li>Completeness and accuracy of submitted documents</li>
                <li>Police verification requirements (for passports)</li>
                <li>Seasonal demand fluctuations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">8. Cancellation and Refunds</h2>
              <p className="mb-4 text-muted-foreground">
                Please refer to our <a href="/refund-policy" className="text-primary underline">Refund Policy</a> for detailed information on cancellations and refunds.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">9. Intellectual Property</h2>
              <p className="mb-4 text-muted-foreground">
                All content, trademarks, logos, and intellectual property on this website are owned by {SITE_NAME} or its licensors. You may not reproduce, distribute, or modify any content without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">10. Privacy and Data Protection</h2>
              <p className="mb-4 text-muted-foreground">
                Your use of our services is also governed by our <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>, which describes how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">11. Compliance with Laws</h2>
              <p className="mb-4 text-muted-foreground">
                Our services comply with:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Aadhaar Act, 2016 and UIDAI regulations</li>
                <li>Passport Act, 1967</li>
                <li>Information Technology Act, 2000</li>
                <li>State government regulations for certificate services</li>
                <li>Data protection and privacy laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">12. Dispute Resolution</h2>
              <p className="mb-4 text-muted-foreground">
                In case of any disputes:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>First, contact our customer support for resolution</li>
                <li>Disputes shall be subject to the jurisdiction of courts in [Your City]</li>
                <li>These terms are governed by the laws of India</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">13. Termination</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent activities or misrepresentation</li>
                <li>Non-payment of fees</li>
                <li>Abusive behavior towards our staff</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">14. Modifications to Terms</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">15. Contact Information</h2>
              <p className="mb-4 text-muted-foreground">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="mb-4 list-none space-y-2 text-muted-foreground">
                <li>Email: {CONTACT.email}</li>
                <li>Phone: {CONTACT.phone}</li>
                <li>Address: {CONTACT.address}</li>
              </ul>
            </section>

            <p className="mt-8 border-t pt-6 text-sm text-muted-foreground">
              By using {SITE_NAME}'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


