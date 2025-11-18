import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${SITE_NAME} - Your trusted partner for government service facilitation`,
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">About {SITE_NAME}</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for government service facilitation
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At {SITE_NAME}, we are committed to making government services accessible and hassle-free for everyone. We understand that navigating government procedures can be complex and time-consuming. Our mission is to simplify this process and provide professional assistance that saves you time and effort.
            </p>
            <p className="text-muted-foreground">
              As an authorized franchise center, we bridge the gap between citizens and government services, ensuring that every application is handled with care, accuracy, and efficiency.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-6 text-2xl font-semibold">What We Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Aadhaar Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    New Aadhaar enrollment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Aadhaar updates and corrections
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Biometric updates
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Passport Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    New passport applications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Passport renewals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Lost passport assistance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Certificate Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Income certificates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Community certificates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Nativity certificates
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Additional Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Document verification
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Form filling assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Application tracking
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Choose {SITE_NAME}?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Authorized & Trusted</h3>
                  <p className="text-sm text-muted-foreground">
                    We are an authorized franchise center operating in compliance with all government regulations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Our experienced professionals guide you through every step of the application process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Fast Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We ensure quick turnaround times and keep you updated throughout the process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Customer Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">
                    Thousands of satisfied customers trust us for their government service needs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-xl font-semibold">Important Disclaimer</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {SITE_NAME} is a <strong>facilitation service provider</strong> and not an official government portal. We assist citizens in preparing and submitting applications to the appropriate government authorities. All government fees are paid separately through official channels, and our service fee covers only the assistance and documentation support we provide.
            </p>
            <p className="text-sm text-muted-foreground">
              We operate in full compliance with UIDAI regulations, Passport Act, and all applicable laws. Our services are designed to make government procedures more accessible, but the final decision on any application rests with the respective government authority.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="mb-6 text-muted-foreground">
            Apply for your government service today and experience hassle-free processing
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">
                Browse Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


