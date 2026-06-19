"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faShirt, faKitchenSet, faWarehouse, faDesktop, faTruck, faArrowDown, faCheckCircle, faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    title: "Whole Home Organizing",
    slug: "whole-home-organizing",
    description: "Floor-to-ceiling organization across every room. We create systems that make sense for how your family actually lives.",
    icon: faBoxArchive,
    image: "/images/services/whole-home-organizing.svg",
    features: ["Room-by-room assessment", "Custom storage solutions", "Labeling & inventory", "Maintenance plan"],
  },
  {
    title: "Closet Organization",
    slug: "closet-organization",
    description: "From walk-ins to reach-ins, we maximize every inch with custom closet systems that keep everything visible and accessible.",
    icon: faShirt,
    image: "/images/services/closet-organization.svg",
    features: ["Closet audit & purge", "Custom shelving design", "Seasonal rotation", "Accessory organization"],
  },
  {
    title: "Kitchen & Pantry",
    slug: "kitchen-pantry",
    description: "Zone-based kitchen organization that makes cooking a joy. Categorized pantries, optimized cabinets, and clear countertops.",
    icon: faKitchenSet,
    image: "/images/services/kitchen-pantry.svg",
    features: ["Pantry categorization", "Cabinet optimization", "Container solutions", "Meal prep zones"],
  },
  {
    title: "Garage Organization",
    slug: "garage-organization",
    description: "Turn your garage from a dumping ground into a functional workshop and storage space you're proud to leave open.",
    icon: faWarehouse,
    image: "/images/services/garage-organization.svg",
    features: ["Wall storage systems", "Overhead racks", "Tool organization", "Sports equipment storage"],
  },
  {
    title: "Home Office Setup",
    slug: "home-office-setup",
    description: "Productivity-boosting office organization for remote workers. Paper management, cable control, and ergonomic workflows.",
    icon: faDesktop,
    image: "/images/services/home-office-setup.svg",
    features: ["Desk zoning", "Paper management", "Cable organization", "Digital file systems"],
  },
  {
    title: "Move-In/Move-Out",
    slug: "move-in-move-out",
    description: "Stress-free transitions. We unpack and organize your new home so you're settled in days, not months.",
    icon: faTruck,
    image: "/images/services/move-in-move-out.svg",
    features: ["Unpacking service", "Room setup", "Donation coordination", "Trash removal"],
  },
];

export function ServicesClient() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Professional Organizing Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From single closets to whole-home transformations — every project starts
            with a free consultation to understand your unique space and needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((s, i) => (
            <Link key={i} href={`/services/${s.slug}`} className="group">
              <Card className="glass-card overflow-hidden h-full transition-shadow hover:shadow-lg">
                <div className="w-full h-48 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <rect width="400" height="300" fill="url(#svcGrad)" />
                    <defs><linearGradient id="svcGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.95 0.02 200)" /><stop offset="100%" stopColor="oklch(0.97 0.01 150)" /></linearGradient></defs>
                    <circle cx="200" cy="130" r="50" fill="white" opacity="0.9" />
                    <text x="200" y="138" textAnchor="middle" fontSize="32">{["📦","👔","🍳","🏗️","💻","🚚"][i]}</text>
                  </svg>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 mb-4">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Process Recap */}
        <div className="glass-card p-10 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Every project begins with a complimentary in-home consultation. We&apos;ll walk through
            your space together, listen to your goals, and give you a clear plan and quote.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
