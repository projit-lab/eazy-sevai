import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";
import { ArrowRight, Clock, IndianRupee } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="mb-2 flex items-center gap-2 text-lg">
          {service.name}
        </CardTitle>
        <CardDescription className="text-sm">{service.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2">
            <div className="rounded-md bg-primary/10 p-1.5">
              <IndianRupee className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Service Fee</p>
              <p className="font-semibold">₹{service.fee}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2">
            <div className="rounded-md bg-muted p-1.5">
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Processing Time</p>
              <p className="text-sm font-medium">{service.processingTime}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full shadow-md transition-all group-hover:shadow-lg group-hover:shadow-primary/25">
          <Link href={`/services/${service.slug}`}>
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


