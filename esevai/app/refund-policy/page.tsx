import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and Cancellation Policy for ${SITE_NAME} services`,
};

export default function RefundPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Refund Policy</h1>
        <p className="mb-8 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Card>
          <CardContent className="prose prose-neutral max-w-none pt-6 dark:prose-invert">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">1. Overview</h2>
              <p className="mb-4 text-muted-foreground">
                This Refund Policy outlines the conditions under which {SITE_NAME} will process refunds for our facilitation services. Please read this policy carefully before making a payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">2. Service Fee Refund Eligibility</h2>
              
              <h3 className="mb-3 text-xl font-semibold">2.1 Full Refund (100%)</h3>
              <p className="mb-4 text-muted-foreground">
                You are eligible for a full refund if:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Payment was made by mistake or duplicate transaction occurred</li>
                <li>We are unable to provide the service due to technical or operational issues on our end</li>
                <li>Cancellation is requested within 2 hours of payment and before document processing begins</li>
                <li>Service was not delivered despite payment confirmation</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">2.2 Partial Refund (50%)</h3>
              <p className="mb-4 text-muted-foreground">
                You may be eligible for a partial refund if:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Cancellation is requested after 2 hours but before application submission to government portal</li>
                <li>You decide to cancel after initial document review but before final submission</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">2.3 No Refund</h3>
              <p className="mb-4 text-muted-foreground">
                Refunds will NOT be provided in the following cases:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>After the application has been submitted to the government portal</li>
                <li>If the application is rejected due to incorrect or incomplete information provided by you</li>
                <li>Delays or rejections caused by government authorities or their systems</li>
                <li>Change of mind after application submission</li>
                <li>You fail to respond to our communication requests within the specified timeframe</li>
                <li>You fail to attend scheduled appointments at government offices</li>
                <li>Processing delays due to incomplete documents provided by you</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">3. Government Fees</h2>
              <p className="mb-4 font-semibold text-foreground">
                Important: Government fees are non-refundable under any circumstances.
              </p>
              <p className="mb-4 text-muted-foreground">
                Government fees are paid directly to official government portals and are subject to their refund policies. {SITE_NAME} has no control over government fee refunds. Please check the respective government portal's refund policy for such fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">4. Refund Request Process</h2>
              <p className="mb-4 text-muted-foreground">
                To request a refund, please follow these steps:
              </p>
              <ol className="mb-4 list-inside list-decimal space-y-2 text-muted-foreground">
                <li>Contact our customer support via email at {CONTACT.email} or WhatsApp at {CONTACT.whatsapp}</li>
                <li>Provide your Application ID and payment transaction details</li>
                <li>Clearly state the reason for your refund request</li>
                <li>Our team will review your request within 2-3 business days</li>
                <li>If approved, refund will be processed within 7-10 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">5. Refund Processing Time</h2>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Review of refund request: 2-3 business days</li>
                <li>Refund initiation: Within 7-10 business days after approval</li>
                <li>Credit to your account: 5-7 business days (depends on your bank/payment method)</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                Total refund timeline: Approximately 14-20 business days from request submission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">6. Refund Method</h2>
              <p className="mb-4 text-muted-foreground">
                Refunds will be processed using the same payment method used for the original transaction:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Credit/Debit Card: Refund to the same card</li>
                <li>UPI: Refund to the same UPI ID</li>
                <li>Net Banking: Refund to the same bank account</li>
                <li>Wallet: Refund to the same wallet</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">7. Service Modification</h2>
              <p className="mb-4 text-muted-foreground">
                If you wish to change the service type (e.g., from Aadhaar Update to Passport Application):
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Request must be made before application submission</li>
                <li>If the new service fee is higher, you must pay the difference</li>
                <li>If the new service fee is lower, the difference will be refunded or adjusted</li>
                <li>Service modification may incur additional processing time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">8. Failed Transactions</h2>
              <p className="mb-4 text-muted-foreground">
                If payment was deducted from your account but you did not receive a confirmation:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Wait for 24 hours - most failed transactions are auto-reversed by banks</li>
                <li>If amount is not credited back within 24 hours, contact us with transaction details</li>
                <li>We will investigate with our payment gateway and process refund if confirmed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">9. Exceptions and Special Cases</h2>
              <p className="mb-4 text-muted-foreground">
                In exceptional circumstances (medical emergencies, force majeure events, etc.), we may consider refund requests on a case-by-case basis, even if they don't meet the standard criteria. Please contact our support team with supporting documentation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">10. Chargebacks</h2>
              <p className="mb-4 text-muted-foreground">
                If you initiate a chargeback or payment dispute with your bank/card issuer:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Please contact us first to resolve the issue</li>
                <li>Unjustified chargebacks may result in service suspension</li>
                <li>We reserve the right to take legal action for fraudulent chargebacks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">11. Contact for Refund Queries</h2>
              <p className="mb-4 text-muted-foreground">
                For any refund-related questions or to initiate a refund request:
              </p>
              <ul className="mb-4 list-none space-y-2 text-muted-foreground">
                <li>Email: {CONTACT.email}</li>
                <li>Phone: {CONTACT.phone}</li>
                <li>WhatsApp: {CONTACT.whatsapp}</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                Our customer support team is available during working hours (Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">12. Policy Updates</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            <p className="mt-8 border-t pt-6 text-sm text-muted-foreground">
              By making a payment for {SITE_NAME}'s services, you acknowledge that you have read, understood, and agree to this Refund Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


