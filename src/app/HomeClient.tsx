"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive, faShirt, faKitchenSet, faWarehouse,
  faDesktop, faTruck, faArrowDown, faStar, faCheckCircle,
  faArrowRight, faQuoteLeft, faShield, faPhone
} from "@fortawesome/free-solid-svg-icons";

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

const testimonials = [
  { name: "Jennifer K.", role: "Portland, OR", quote: "ClutterFree transformed my kitchen from a disaster zone into a space I actually enjoy cooking in. I can find everything in seconds now!", rating: 5 },
  { name: "Mark & Lisa T.", role: "Beaverton, OR", quote: "After our move, they had our entire house unpacked and organized in 3 days. We would've taken months. Worth every penny.", rating: 5 },
  { name: "Rachel S.", role: "Lake Oswego, OR", quote: "My closet went from overflowing chaos to a boutique-like experience. Sarah's team was judgment-free and incredibly efficient.", rating: 5 },
  { name: "Tom D.", role: "Vancouver, WA", quote: "My garage was a nightmare for 10 years. They cleared it, organized it, and now I can actually park both cars inside!", rating: 5 },
  { name: "Amanda P.", role: "Hillsboro, OR", quote: "As someone with ADHD, I struggled with organization my whole life. They built systems that actually work for my brain. Life-changing.", rating: 5 },
];

const projects = [
  { title: "Full Home Transformation", location: "Portland Heights", desc: "5-bedroom home, full declutter + organization in 2 weeks", image: "/images/projects/project-1.svg", category: "whole-home" },
  { title: "Master Closet Redesign", location: "Lake Oswego", desc: "Custom walk-in closet system with seasonal rotation plan", image: "/images/projects/project-2.svg", category: "closet" },
  { title: "Kitchen & Pantry Overhaul", location: "Beaverton", desc: "Zone-based kitchen reorganization with labeled pantry", image: "/images/projects/project-3.svg", category: "kitchen" },
  { title: "Home Office Makeover", location: "SE Portland", desc: "Dual-desk setup for remote-working couple with filing system", image: "/images/projects/project-4.svg", category: "office" },
  { title: "Garage Workshop Build", location: "Tigard", desc: "Full garage clear-out with custom pegboard wall system", image: "/images/projects/project-5.svg", category: "garage" },
  { title: "Move-In Organizing", location: "Vancouver", desc: "3-day unpack-and-organize for family of 4 relocation", image: "/images/projects/project-6.svg", category: "move" },
];

export function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <Badge className="text-sm py-1.5 px-4 bg-primary/10 text-primary border-primary/20">
                Portland&apos;s Trusted Organizers Since 2015
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Transform Your Space,<br />
                <span className="text-primary">Transform Your Life</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Professional home organization services that turn cluttered chaos into calm,
                functional spaces you&apos;ll love. No judgment — just results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="text-base px-8">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button variant="outline" size="lg" className="text-base px-8">
                    Explore Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" />
                  <span className="font-medium text-foreground">4.9</span>
                  <span>(200+ reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span>500+ Homes Transformed</span>
              </div>
            </div>
            <div className="glass-card overflow-hidden p-2 rounded-2xl">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-teal-100 via-white to-amber-50 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <rect width="400" height="300" fill="url(#heroGrad)" />
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.93 0.03 200)" />
                      <stop offset="50%" stopColor="oklch(0.98 0.01 150)" />
                      <stop offset="100%" stopColor="oklch(0.96 0.02 85)" />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="30" width="140" height="100" rx="10" fill="white" opacity="0.95" stroke="oklch(0.48 0.14 200)" strokeWidth="1.5" />
                  <rect x="55" y="45" width="50" height="8" rx="2" fill="oklch(0.48 0.14 200)" opacity="0.6" />
                  <rect x="55" y="60" width="70" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.5" />
                  <rect x="55" y="73" width="55" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.5" />
                  <rect x="55" y="86" width="65" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.5" />
                  <rect x="220" y="30" width="140" height="100" rx="10" fill="white" opacity="0.95" stroke="oklch(0.48 0.14 200)" strokeWidth="1.5" />
                  <circle cx="255" cy="55" r="15" fill="oklch(0.93 0.03 200)" />
                  <rect x="280" y="45" width="60" height="8" rx="2" fill="oklch(0.48 0.14 200)" opacity="0.5" />
                  <rect x="280" y="60" width="45" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.4" />
                  <rect x="280" y="73" width="55" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.4" />
                  <rect x="40" y="155" width="320" height="110" rx="10" fill="white" opacity="0.95" stroke="oklch(0.48 0.14 200)" strokeWidth="1.5" />
                  <rect x="60" y="175" width="120" height="8" rx="2" fill="oklch(0.48 0.14 200)" opacity="0.6" />
                  <rect x="60" y="195" width="200" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.5" />
                  <rect x="60" y="210" width="170" height="6" rx="2" fill="oklch(0.68 0.14 85)" opacity="0.5" />
                  <circle cx="330" cy="200" r="25" fill="oklch(0.48 0.14 200)" opacity="0.2" />
                  <text x="330" y="206" textAnchor="middle" fill="oklch(0.48 0.14 200)" fontSize="18">✓</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">What We Do</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Organizing Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every service starts with a free consultation. We learn about your space, your habits,
              and your goals — then design a system that works for YOU.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={`/services/${s.slug}`} className="group">
                <Card className="glass-card overflow-hidden h-full transition-shadow hover:shadow-lg">
                  <div className="w-full h-44 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      <rect width="400" height="300" fill="url(#svcGrad)" />
                      <defs><linearGradient id="svcGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.95 0.02 200)" /><stop offset="100%" stopColor="oklch(0.97 0.01 150)" /></linearGradient></defs>
                      <circle cx="200" cy="130" r="50" fill="white" opacity="0.9" />
                      <text x="200" y="138" textAnchor="middle" fontSize="28">{["📦","👔","🍳","🏗️","💻","🚚"][i]}</text>
                    </svg>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {s.features.slice(0, 3).map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A proven 4-step process that takes you from overwhelmed to organized — without the stress.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Free Consultation", desc: "We visit your home, understand your goals, and create a custom plan — no obligation.", icon: "🏠" },
              { step: "02", title: "Declutter & Sort", desc: "Together we sort through every item, keeping what matters and donating what doesn't.", icon: "📋" },
              { step: "03", title: "Organize & Install", desc: "We build your custom systems — shelving, containers, labels — everything in its place.", icon: "🔧" },
              { step: "04", title: "Maintain & Enjoy", desc: "We teach you the system so it sticks. Optional quarterly tune-ups keep everything perfect.", icon: "✨" },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="glass-card p-8 text-center h-full">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="text-sm font-bold text-primary mb-2">{s.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-2xl text-primary/30">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full">
                    <FontAwesomeIcon icon={faQuoteLeft} className="size-6 text-primary/30 mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.quote}</p>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <FontAwesomeIcon key={j} icon={faStar} className="size-3.5 text-amber-400" />
                      ))}
                    </div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Work</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Recent Transformations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real homes, real results. See what&apos;s possible when ClutterFree works its magic.
            </p>
          </div>
          <Tabs defaultValue="all" className="mb-10">
            <div className="flex justify-center">
              <TabsList className="glass">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="whole-home">Whole Home</TabsTrigger>
                <TabsTrigger value="closet">Closets</TabsTrigger>
                <TabsTrigger value="kitchen">Kitchens</TabsTrigger>
                <TabsTrigger value="office">Offices</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                  <div key={i} className="glass-card overflow-hidden group">
                    <div className="w-full h-48 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 400 240" className="w-full h-full">
                        <rect width="400" height="240" fill="url(#projGrad)" />
                        <defs><linearGradient id="projGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.95 0.02 200)" /><stop offset="100%" stopColor="oklch(0.97 0.01 85)" /></linearGradient></defs>
                        <text x="200" y="125" textAnchor="middle" fontSize="40">
                          {["🏠","👔","🍳","💻","🏗️","📦"][i]}
                        </text>
                      </svg>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-1">{p.title}</h3>
                      <p className="text-xs text-primary font-medium mb-2">{p.location}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            {["whole-home", "closet", "kitchen", "office", "garage"].map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.filter(p => p.category === cat || cat === "whole-home").slice(0, 3).map((p, i) => (
                    <div key={i} className="glass-card overflow-hidden group">
                      <div className="w-full h-48 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                        <svg viewBox="0 0 400 240" className="w-full h-full">
                          <rect width="400" height="240" fill="url(#projGrad2)" />
                          <defs><linearGradient id="projGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.95 0.02 200)" /><stop offset="100%" stopColor="oklch(0.97 0.01 85)" /></linearGradient></defs>
                          <text x="200" y="125" textAnchor="middle" fontSize="40">{p.title.includes("Home") ? "🏠" : p.title.includes("Closet") ? "👔" : p.title.includes("Kitchen") ? "🍳" : p.title.includes("Office") ? "💻" : "🏗️"}</text>
                        </svg>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold mb-1">{p.title}</h3>
                        <p className="text-xs text-primary font-medium mb-2">{p.location}</p>
                        <p className="text-sm text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="text-center">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline" size="lg">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE ===== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-teal-50/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14">
            <div className="flex justify-center mb-6">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FontAwesomeIcon icon={faShield} className="size-7" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">The ClutterFree Promise</h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
              We stand behind every project. If a system we built isn&apos;t working for you within
              30 days, we&apos;ll come back and adjust it — free of charge.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" />
                30-Day Satisfaction Guarantee
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary" />
                Certified Professional Organizers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Love Your Home Again?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Book your free consultation today. Let&apos;s walk through your space together
            and create a plan that transforms your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="text-base px-8">
                <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button variant="outline" size="lg" className="text-base px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 sm:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "How long does a typical organizing project take?", a: "Most single-room projects take 1-2 days. Whole-home organizing typically spans 3-5 days depending on home size and clutter volume. We'll give you a detailed timeline during your free consultation." },
              { q: "Do I need to be home during the organizing?", a: "You'll want to be present for the decluttering phase (usually the first few hours) to make decisions about what to keep. After that, you can stay or go — it's up to you!" },
              { q: "What if I'm embarrassed about my clutter?", a: "Please don't be! We've seen it all and we never judge. Our team is trained to be supportive, respectful, and focused on solutions — not the past. Every client starts somewhere." },
              { q: "Do you bring organizing supplies?", a: "We bring measuring tools and can recommend specific products. We can also shop for bins, labels, and shelving on your behalf (cost passed through at our wholesale discount)." },
              { q: "How much does professional organizing cost?", a: "Our packages start at $350 for a single closet and range up to $3,500+ for whole-home projects. Every project includes a free consultation to give you an exact quote." },
            ].map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-5 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
