import Link from "next/link";
import { SITE_NAME, CONTACT, WORKING_HOURS, SERVICE_CATEGORIES } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex justify-center items-center border-t bg-muted/30">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                e
              </div>
              <h3 className="text-xl font-bold tracking-tight">{SITE_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Making government services accessible and simple for everyone.
              Authorized franchise for e-Governance services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services?category=${category.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`tel:${CONTACT.phone}`} className="text-muted-foreground hover:text-primary">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <div>Mon-Fri: {WORKING_HOURS.weekdays}</div>
                  <div>Sat: {WORKING_HOURS.saturday}</div>
                  <div>Sun: {WORKING_HOURS.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="font-medium">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> This is a facilitation service and not the official government portal.
            All government fees are paid separately through official channels. We provide assistance and documentation support only.
          </p>
        </div>
      </div>
    </footer>
  );
}


