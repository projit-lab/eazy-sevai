import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import { SERVICES } from "@/lib/services";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Headphones, 
  CheckCircle,
  FileText,
  Plane,
  Award
} from "lucide-react";

const iconMap: Record<string, any> = {
  FileText,
  Plane,
  Award
};

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-24 md:py-32 lg:py-40 flex justify-center items-center">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="mr-2 h-4 w-4" />
              Authorized Government Service Center
            </div>
            <h1 className="mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Government Services
              <br />
              <span className="text-primary">Made Simple</span>
          </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
              Apply online for Aadhaar, Passport, and Certificate services with complete assistance. Fast processing, secure data, and expert guidance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                <Link href="/services">
                  Browse Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="flex justify-center items-center border-y bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-primary/10 p-4 ring-4 ring-primary/5 transition-all group-hover:bg-primary/20 group-hover:ring-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Authorized Franchise</h3>
                <p className="text-sm text-muted-foreground">Govt. approved center</p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-primary/10 p-4 ring-4 ring-primary/5 transition-all group-hover:bg-primary/20 group-hover:ring-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround time</p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-primary/10 p-4 ring-4 ring-primary/5 transition-all group-hover:bg-primary/20 group-hover:ring-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Secure Data</h3>
                <p className="text-sm text-muted-foreground">Encrypted & protected</p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-primary/10 p-4 ring-4 ring-primary/5 transition-all group-hover:bg-primary/20 group-hover:ring-primary/10">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className=" flex justify-center items-center py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Award className="mr-2 h-4 w-4" />
              Comprehensive Services
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Choose from our wide range of government service assistance with complete documentation support
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon] || FileText;
              return (
                <Card key={category.id} className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-all group-hover:scale-150" />
                  <CardHeader className="relative pb-4">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-4 ring-primary/5 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button asChild variant="outline" className="w-full border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground">
                      <Link href={`/services?category=${category.id}`}>
                        View Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Services */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-primary/25">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Simple Process
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Get your government services done in 4 simple steps
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Connection Lines for Desktop */}
            <div className="absolute left-0 right-0 top-14 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 lg:block" />
            
            {[
              {
                step: "01",
                title: "Choose Service",
                description: "Browse and select the government service you need from our comprehensive list"
              },
              {
                step: "02",
                title: "Fill Form & Upload",
                description: "Complete the application form and securely upload required documents"
              },
              {
                step: "03",
                title: "Make Payment",
                description: "Pay the service fee securely through our encrypted payment gateway"
              },
              {
                step: "04",
                title: "Get Assisted",
                description: "Our expert team contacts you and completes your application process"
              }
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="relative mb-6 flex flex-col items-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/25 ring-8 ring-background">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="absolute left-full top-1/2 hidden h-0.5 w-full -translate-y-1/2 lg:block" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="mb-3 text-lg font-semibold md:text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center items-center py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                service: "Passport Renewal",
                feedback: "Excellent service! Got my passport renewed without any hassle. The team was very helpful throughout the process."
              },
              {
                name: "Priya Sharma",
                service: "Aadhaar Update",
                feedback: "Very professional and quick service. Updated my Aadhaar address in just 10 days. Highly recommended!"
              },
              {
                name: "Arun Patel",
                service: "Income Certificate",
                feedback: "Great experience! They handled all the paperwork and I got my certificate on time. Worth every penny."
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.service}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-base opacity-90 md:text-lg lg:text-xl">
              Apply for your government service today and experience hassle-free processing with expert guidance
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 shadow-2xl">
                <Link href="/services">
                  Browse Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-2 border-primary-foreground bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
