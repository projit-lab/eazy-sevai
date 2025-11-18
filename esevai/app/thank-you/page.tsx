"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("applicationId");

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        {/* Success Icon */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight">
            Application Submitted Successfully!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for choosing our services. Your application has been received.
          </p>
        </div>

        {/* Application Details */}
        {applicationId && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="mb-2 text-sm text-muted-foreground">Your Application ID</p>
                <p className="text-2xl font-bold font-mono">{applicationId}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Please save this ID for future reference
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* What's Next */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-xl font-semibold">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Confirmation Message</h3>
                  <p className="text-sm text-muted-foreground">
                    You will receive a WhatsApp message shortly with your application details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Verification Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Our representative will contact you within 24 hours for document verification
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Application Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We will process your application and keep you updated via WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Completion Notification</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll be notified once your application is successfully submitted to the government portal
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-lg font-semibold">Need Help?</h2>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-3 text-sm hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">WhatsApp Support</p>
                  <p className="text-muted-foreground">{CONTACT.whatsapp}</p>
                </div>
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-sm hover:text-primary"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-muted-foreground">{CONTACT.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm hover:text-primary"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-muted-foreground">{CONTACT.email}</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="flex-1">
            <Link href="/services">
              Browse More Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>

        {/* Email Confirmation Note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          A confirmation email has been sent to your registered email address.
          <br />
          Please check your spam folder if you don't see it in your inbox.
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}

