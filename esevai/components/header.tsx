import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { Phone, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 flex justify-center items-center">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg transition-transform group-hover:scale-105">
              e
            </div>
            <span className="text-xl font-bold tracking-tight">{SITE_NAME}</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/services"
              className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href={`tel:${CONTACT.phone}`} className="hidden lg:flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80">
            <Phone className="h-4 w-4 text-primary" />
            <span>{CONTACT.phone}</span>
          </a>
          <Button asChild className="shadow-md hover:shadow-lg hover:shadow-primary/25">
            <Link href="/services">Apply Now</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}


