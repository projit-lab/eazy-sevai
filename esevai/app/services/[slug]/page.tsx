import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { ArrowRight, Clock, IndianRupee, FileText, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/services"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          ← Back to Services
        </Link>

        {/* Service Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{service.name}</h1>
          <p className="text-lg text-muted-foreground">{service.description}</p>
        </div>

        {/* Service Details */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <IndianRupee className="h-5 w-5 text-primary" />
                Service Fee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹{service.fee}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Govt. Fee: {service.governmentFee}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-5 w-5 text-primary" />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{service.processingTime}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="h-5 w-5 text-primary" />
                Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold capitalize">{service.category}</p>
            </CardContent>
          </Card>
        </div>

        {/* Required Documents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
            <CardDescription>
              Please keep these documents ready before starting your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-base">Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <span className="font-semibold">•</span>
              This is a facilitation service. We assist you in the application process.
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">•</span>
              Government fees are paid separately through official portals.
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">•</span>
              All uploaded documents will be encrypted and securely stored.
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">•</span>
              You will receive a WhatsApp confirmation after payment.
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">•</span>
              Processing time may vary based on government procedures.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="flex-1">
            <Link href={`/services/${service.slug}/apply`}>
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Have Questions? Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


