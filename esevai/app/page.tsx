import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { ServiceCard } from "@/components/service-card"; // Not needed
import { SERVICES } from "@/lib/services";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  CheckCircle,
  FileText,
  Plane,
  Award,
  FileCheck,
  Users
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
      {/* Hero Section - Updated for Private Consultant Model */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 py-24 md:py-32 lg:py-40 flex justify-center items-center">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Updated Badge - NO government affiliation claims */}
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Shield className="mr-2 h-4 w-4" />
              Professional Documentation Services
            </div>
            
            {/* Updated Headline - Path B Positioning */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Bureaucracy, Solved.
            </h1>
            <p className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              The Smartest Way to Get Your Tamil Nadu Government Documents.
            </p>
            
            {/* Updated Sub-headline */}
            <p className="mx-auto mb-10 max-w-2xl text-base text-gray-600 md:text-lg lg:text-xl leading-relaxed">
              <span className="font-semibold text-gray-900">Expert Private Consulting. Zero Hassle. Guaranteed Verification.</span>
              <br />
              <br />
              We are a professional documentation firm that handles the complex paperwork, 
              submission, and verification for you. Skip the queues and get it right the first time.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg">
                <Link href="/services">
                  Browse All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Updated for Private Consultant Model */}
      <section className="flex justify-center items-center border-y bg-gray-50 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-blue-100 p-4 ring-4 ring-blue-50 transition-all group-hover:bg-blue-200">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Expert Verification</h3>
                <p className="text-sm text-gray-600">Professional review ensures accuracy</p>
              </div>
            </div>
            
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-green-100 p-4 ring-4 ring-green-50 transition-all group-hover:bg-green-200">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Zero Hassle</h3>
                <p className="text-sm text-gray-600">We handle paperwork & queues</p>
              </div>
            </div>
            
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-purple-100 p-4 ring-4 ring-purple-50 transition-all group-hover:bg-purple-200">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Time Saved</h3>
                <p className="text-sm text-gray-600">Skip multiple office visits</p>
              </div>
            </div>
            
            <div className="group flex flex-col items-center gap-4 text-center transition-all hover:scale-105">
              <div className="rounded-2xl bg-orange-100 p-4 ring-4 ring-orange-50 transition-all group-hover:bg-orange-200">
                <FileCheck className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">Clear fee breakdown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Block - The Consulting Advantage */}
      <section className="flex justify-center items-center py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              The Consulting Advantage
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Why choose a professional when you could do it yourself?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Error-Free Guarantee */}
            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
                  🛡️
                </div>
                <CardTitle className="text-xl">Error-Free Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">40% of DIY applications are rejected.</strong> Our trained experts review every document (Aadhaar, TCs, Affidavits) before submission to eliminate errors, risk of rejection, and costly resubmission delays.
                </p>
              </CardContent>
            </Card>

            {/* Legal Transparency */}
            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl">
                  💸
                </div>
                <CardTitle className="text-xl">Legal Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We operate on an <strong className="text-gray-900">Unbundled Pricing model.</strong> You only pay the official Government Statutory Fee (₹60) + our Professional Consulting Fee. We apply GST correctly only to our service fee, ensuring full legal compliance.
                </p>
              </CardContent>
            </Card>

            {/* Zero Bureaucracy */}
            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-4xl">
                  ⚡
                </div>
                <CardTitle className="text-xl">Zero Bureaucracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">No more trips to the Taluk office or VAO.</strong> We handle the process monitoring, status tracking via SMS/WhatsApp, and coordination with field officers. We deliver your approved certificate directly to your inbox.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="flex justify-center items-center py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Award className="mr-2 h-4 w-4" />
              Comprehensive Services
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              From certificates to licenses, we handle all your documentation needs with expert assistance
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon] || FileText;
              return (
                <Card key={category.id} className="group relative overflow-hidden border-2 transition-all hover:border-blue-500 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-blue-50 transition-all group-hover:scale-150" />
                  <CardHeader className="relative pb-4">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 ring-4 ring-blue-50 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button asChild variant="outline" className="w-full border-blue-200 transition-all hover:bg-blue-600 hover:text-white">
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
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="group h-full border-2 transition-all hover:border-blue-500 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        {service.comingSoon ? (
                          <span className="text-sm font-semibold text-gray-500">Coming Soon</span>
                        ) : (
                          <span className="text-xl font-bold text-gray-900">₹{service.fee}</span>
                        )}
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="h-12 px-8 shadow-lg">
              <Link href="/services">
                View All 90+ Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex justify-center items-center relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              Simple Process
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Simple 3-Step Process
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
              Getting your documents has never been easier
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-3 lg:gap-12 max-w-5xl mx-auto">
            {/* Connection Lines for Desktop */}
            <div className="absolute left-0 right-0 top-14 hidden h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 md:block" />
            
            {[
              {
                step: "01",
                title: "Choose Service",
                description: "Select the document or service you need from our comprehensive catalog"
              },
              {
                step: "02",
                title: "Submit Documents",
                description: "Upload required documents and make payment securely online"
              },
              {
                step: "03",
                title: "We Handle Everything",
                description: "We process, verify, submit, and deliver your documents to you"
              }
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="relative mb-6 flex flex-col items-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg ring-8 ring-white">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="absolute left-full top-1/2 hidden h-0.5 w-full -translate-y-1/2 md:block" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="mb-3 text-lg font-semibold md:text-xl">{item.title}</h3>
                  <p className="text-sm text-gray-600 md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button size="lg" variant="outline">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center items-center py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Real experiences from people who've used our services</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                service: "Legal Heir Certificate",
                feedback: "Excellent service! They handled all the complex paperwork and I got my certificate without visiting any office. Worth every penny."
              },
              {
                name: "Priya Sharma",
                service: "Community Certificate",
                feedback: "Very professional and quick service. They kept me updated at every step and delivered exactly as promised. Highly recommended!"
              },
              {
                name: "Arun Patel",
                service: "Income Certificate",
                feedback: "Great experience! No hassle, no queues, no stress. The team was very helpful and made the entire process smooth."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.service}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center items-center relative overflow-hidden bg-blue-600 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to Skip the Queue?
            </h2>
            <p className="mb-10 text-base opacity-90 md:text-lg lg:text-xl">
              Join thousands who've simplified their government documentation with our expert assistance
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 shadow-2xl">
                <Link href="/services">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY LEGAL DISCLAIMER - Critical for Path B Model */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-yellow-600" />
              Important Disclaimer
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Eazy Sevai</strong> is a private documentation and consulting firm. 
              We are <strong>not an agent of, nor are we affiliated with or endorsed by</strong>, 
              the Government of India, the Government of Tamil Nadu, or the Tamil Nadu e-Governance 
              Agency (TNeGA). We provide expert, value-added assistance, process monitoring, and 
              documentation support services for a professional fee. All official government services 
              and forms may also be obtained directly from the respective government portals 
              (e.g., <a href="https://tnesevai.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tnesevai.tn.gov.in</a>) 
              at the standard, lower government-prescribed rates.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/services" className="hover:text-blue-600">All Services</Link></li>
                <li><Link href="/services#student" className="hover:text-blue-600">Student Services</Link></li>
                <li><Link href="/services#personal" className="hover:text-blue-600">Personal Certificates</Link></li>
                <li><Link href="/services#business" className="hover:text-blue-600">Business Licenses</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-blue-600">Refund Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-blue-600">Full Disclaimer</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/faq" className="hover:text-blue-600">FAQ</Link></li>
                <li><Link href="/help" className="hover:text-blue-600">Help Center</Link></li>
                <li><Link href="/track" className="hover:text-blue-600">Track Application</Link></li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-blue-600">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 pt-6 border-t border-gray-300">
            <p>&copy; {new Date().getFullYear()} Eazy Sevai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}