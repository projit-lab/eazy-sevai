"use client";

import { use } from "react";
import { SERVICES } from "@/lib/services";
import { ServiceCard } from "@/components/service-card";

export default function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = use(searchParams);
  const categoryFilter = params.category;

  const filteredServices = categoryFilter
    ? SERVICES.filter((service) => service.category === categoryFilter)
    : SERVICES;

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground">
          Professional assistance for all your government service needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}