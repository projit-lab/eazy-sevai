import Link from 'next/link';
import { Metadata } from 'next';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllServices, serviceCategories } from '@/lib/services';

export const metadata: Metadata = {
  title: 'All Government Services - Eazy Sevai',
  description: 'Browse our complete catalog of government services including Aadhaar, PAN, Passport, Certificates, and Business Licenses.',
  keywords: ['government services', 'Aadhaar', 'PAN card', 'Passport', 'certificates', 'business licenses'],
};

export default function ServicesPage() {
  const allServices = getAllServices();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b bg-muted/40">
        <div className="container py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            All Government Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Browse our complete catalog of {allServices.length}+ government services. 
            Fast processing, expert assistance, and doorstep delivery.
          </p>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        {/* Categories Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceCategories.map((category) => {
              const categoryServices = allServices.filter(s => s.category === category.id);
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg">
                    <CardHeader className="text-center pb-2">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <CardTitle className="text-sm group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-xs text-muted-foreground">
                        {categoryServices.length} services
                      </p>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>

        {/* Services by Category */}
        {serviceCategories.map((category) => {
          const categoryServices = allServices.filter(s => s.category === category.id);
          
          if (categoryServices.length === 0) return null;
          
          return (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-4">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <Card key={service.id} className="group hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {service.name}
                        </CardTitle>
                        {service.popular && (
                          <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full ml-2 shrink-0">
                            HOT
                          </span>
                        )}
                        {service.comingSoon && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full ml-2 shrink-0">
                            SOON
                          </span>
                        )}
                      </div>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Info */}
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{service.processingTime}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          <span className="font-semibold">₹{service.fee}</span>
                          <span className="text-xs text-muted-foreground ml-1">(our fee)</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button variant="outline" className="w-full group" asChild>
                        <Link href={`/services/${service.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">
              Can't Find What You're Looking For?
            </CardTitle>
            <CardDescription className="text-base">
              Our expert team can help you with any government service
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+919876543210">Call Now: +91 98765 43210</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}