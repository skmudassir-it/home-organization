import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowLeft, faPhone, faClock, faDollarSign, faUsers } from "@fortawesome/free-solid-svg-icons";

interface ServiceDetail {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  process: { title: string; desc: string }[];
  pricing: string;
  timeline: string;
  teamSize: string;
  relatedServices: string[];
}

const services: Record<string, ServiceDetail> = {
  "whole-home-organizing": {
    title: "Whole Home Organizing",
    slug: "whole-home-organizing",
    description: "Floor-to-ceiling organization across every room.",
    longDescription: "Our signature whole-home organizing service transforms your entire living space from cluttered chaos to calm functionality. We work room by room, building custom organizing systems that reflect how your family actually lives — not how a magazine says you should. Every drawer, every shelf, every closet gets the ClutterFree treatment.",
    image: "/images/services/whole-home-organizing.svg",
    features: ["Room-by-room assessment & plan", "Custom storage solutions per room", "Professional labeling & inventory system", "30-day maintenance plan & follow-up", "Donation coordination & haul-away", "Digital photo inventory of all systems"],
    process: [
      { title: "Walk-Through & Plan", desc: "We tour your entire home together, noting pain points and opportunities. You get a room-by-room plan with timeline." },
      { title: "Declutter Session", desc: "Room by room, we sort into Keep / Donate / Trash. You make the decisions; we do the heavy lifting." },
      { title: "System Installation", desc: "Shelving, bins, labels, drawer dividers — we install everything and put every item in its new home." },
      { title: "Walk-Through & Handoff", desc: "We tour the finished home together, explain each system, and hand over your digital inventory." },
    ],
    pricing: "Starting at $2,500 (varies by home size)",
    timeline: "3–5 days",
    teamSize: "2–4 organizers",
    relatedServices: ["closet-organization", "kitchen-pantry", "garage-organization"],
  },
  "closet-organization": {
    title: "Closet Organization",
    slug: "closet-organization",
    description: "Maximize every inch with custom closet systems.",
    longDescription: "Your closet should feel like a boutique, not a battlefield. We design custom closet systems that make everything visible, accessible, and beautiful. From walk-in wardrobes to reach-in bedroom closets, we create storage solutions that match your wardrobe and habits.",
    image: "/images/services/closet-organization.svg",
    features: ["Complete closet audit & wardrobe purge", "Custom shelving & hanging configuration", "Seasonal rotation system setup", "Accessory & shoe organization", "Professional folding & color coordination", "Shopping list for recommended products"],
    process: [
      { title: "Closet Audit", desc: "We empty everything and sort. You try on, decide, and purge. We handle donations." },
      { title: "Design & Configure", desc: "Based on what you're keeping, we design the optimal layout — double hangs, shelves, drawers." },
      { title: "Organize & Style", desc: "Everything goes back in, organized by category, color, and frequency. Shoes, bags, and accessories get dedicated zones." },
      { title: "System Handoff", desc: "We show you how to maintain the system and leave you with a seasonal rotation schedule." },
    ],
    pricing: "Starting at $350 (reach-in) / $800+ (walk-in)",
    timeline: "4–8 hours",
    teamSize: "1–2 organizers",
    relatedServices: ["whole-home-organizing", "move-in-move-out"],
  },
  "kitchen-pantry": {
    title: "Kitchen & Pantry Organization",
    slug: "kitchen-pantry",
    description: "Zone-based kitchen organization that makes cooking a joy.",
    longDescription: "The kitchen is the heart of the home — and often the most cluttered room. Our zone-based approach creates intuitive cooking, prep, and storage zones so you can find everything in seconds. Categorized pantries, optimized cabinets, and clear countertops transform how you cook.",
    image: "/images/services/kitchen-pantry.svg",
    features: ["Pantry categorization & container system", "Cabinet & drawer optimization", "Countertop declutter & appliance zoning", "Spice organization & labeling", "Meal prep zone creation", "Shopping list for containment products"],
    process: [
      { title: "Kitchen Assessment", desc: "We map your cooking habits — what you use daily vs. occasionally — and design zones accordingly." },
      { title: "Pantry Reset", desc: "Everything comes out. Expired items go. Remaining items get categorized and containerized." },
      { title: "Cabinet Optimization", desc: "We rearrange cabinets so the items you use most are in the most accessible spots." },
      { title: "Final Polish", desc: "Labels go on. Counters get cleared. You get a kitchen that works for how you actually cook." },
    ],
    pricing: "Starting at $500",
    timeline: "1–2 days",
    teamSize: "1–2 organizers",
    relatedServices: ["whole-home-organizing", "home-office-setup"],
  },
  "garage-organization": {
    title: "Garage Organization",
    slug: "garage-organization",
    description: "Turn your garage into a functional workshop and storage space.",
    longDescription: "Stop parking on the driveway! Our garage organization service clears the clutter and installs wall-mounted storage, overhead racks, and labeled zones for tools, sports gear, seasonal items, and everything else that ends up in the garage. Finally, a garage you're proud to leave open.",
    image: "/images/services/garage-organization.svg",
    features: ["Complete garage clear-out & sort", "Wall-mounted storage systems", "Overhead rack installation", "Tool organization & pegboard walls", "Sports equipment storage solutions", "Seasonal decoration storage plan"],
    process: [
      { title: "Clear & Sort", desc: "Everything comes out onto the driveway. We sort into categories: tools, sports, seasonal, automotive, etc." },
      { title: "Purge & Decide", desc: "Broken items go. Unused items get donated. We help you decide what earns a spot back in the garage." },
      { title: "System Installation", desc: "Wall tracks, hooks, shelves, overhead racks — we install it all and put everything in its zone." },
      { title: "Label & Celebrate", desc: "Every zone gets labeled. You can finally park both cars inside. Cue the celebration." },
    ],
    pricing: "Starting at $800",
    timeline: "1–2 days",
    teamSize: "2–3 organizers",
    relatedServices: ["whole-home-organizing", "move-in-move-out"],
  },
  "home-office-setup": {
    title: "Home Office Setup",
    slug: "home-office-setup",
    description: "Productivity-boosting office organization for remote workers.",
    longDescription: "A cluttered desk creates a cluttered mind. We design home office setups that boost focus, streamline workflows, and actually make you want to sit down and work. From paper management to cable control to ergonomic layouts — your most productive self is waiting.",
    image: "/images/services/home-office-setup.svg",
    features: ["Desk zone planning & optimization", "Paper management & filing system", "Cable management & cord labeling", "Digital file organization guidance", "Supply inventory & restocking system", "Ergonomic layout recommendations"],
    process: [
      { title: "Workflow Interview", desc: "We learn how you work — what you touch daily, what's reference-only, and what can go to deep storage." },
      { title: "Desk Reset", desc: "Everything comes off the desk. We create zones: active work, reference, supplies, personal." },
      { title: "Systems Build", desc: "Filing systems, cable management, drawer organizers — everything gets a home." },
      { title: "Digital Organization", desc: "We guide you through a digital declutter — desktop, downloads, email folders — while the physical space is fresh." },
    ],
    pricing: "Starting at $450",
    timeline: "4–6 hours",
    teamSize: "1 organizer",
    relatedServices: ["whole-home-organizing", "kitchen-pantry"],
  },
  "move-in-move-out": {
    title: "Move-In/Move-Out Organizing",
    slug: "move-in-move-out",
    description: "Stress-free transitions — unpacked and organized in days.",
    longDescription: "Moving is one of life's most stressful events. Our move-in/move-out service handles the unpacking and organizing so you can focus on settling in. We typically have a home fully unpacked and organized in 2–3 days — saving you weeks (or months) of living out of boxes.",
    image: "/images/services/move-in-move-out.svg",
    features: ["Complete unpacking service", "Room-by-room setup & organization", "Box breakdown & removal", "Donation coordination for unwanted items", "Furniture placement consultation", "Trash & packing material removal"],
    process: [
      { title: "Pre-Move Planning", desc: "Before moving day, we create a room-by-room plan so boxes go straight to the right rooms." },
      { title: "Unpack & Organize", desc: "We unpack every box into its designated room, organizing as we go — not just dumping everything out." },
      { title: "System Setup", desc: "Closets, kitchen, bathrooms — every space gets an organizing system from day one. No bad habits form." },
      { title: "Clean Sweep", desc: "All boxes broken down, packing materials removed, and your new home is move-in ready — organized." },
    ],
    pricing: "Starting at $1,200",
    timeline: "1–3 days",
    teamSize: "2–4 organizers",
    relatedServices: ["whole-home-organizing", "closet-organization", "garage-organization"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | ClutterFree Home Organization`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((s) => services[s])
    .filter(Boolean);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
          Back to All Services
        </Link>

        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">Service</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faDollarSign} className="size-4 text-primary" />
                <span className="text-muted-foreground">{service.pricing}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="size-4 text-primary" />
                <span className="text-muted-foreground">{service.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="size-4 text-primary" />
                <span className="text-muted-foreground">{service.teamSize}</span>
              </div>
            </div>
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="text-base px-8">
                <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
                Book This Service
              </Button>
            </Link>
          </div>
          <div className="glass-card overflow-hidden p-1 rounded-2xl">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-teal-100 via-emerald-50 to-amber-50 rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <rect width="400" height="300" fill="url(#detailGrad)" />
                <defs><linearGradient id="detailGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.93 0.03 200)" /><stop offset="50%" stopColor="oklch(0.98 0.01 150)" /><stop offset="100%" stopColor="oklch(0.96 0.02 85)" /></linearGradient></defs>
                <circle cx="200" cy="130" r="60" fill="white" opacity="0.95" />
                <text x="200" y="140" textAnchor="middle" fontSize="40">{
                  slug === "whole-home-organizing" ? "🏠" :
                  slug === "closet-organization" ? "👔" :
                  slug === "kitchen-pantry" ? "🍳" :
                  slug === "garage-organization" ? "🏗️" :
                  slug === "home-office-setup" ? "💻" : "📦"
                }</text>
                <text x="200" y="230" textAnchor="middle" fill="oklch(0.48 0.14 200)" fontSize="16" fontWeight="bold" fontFamily="sans-serif">{service.title}</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight mb-6">What&apos;s Included</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 h-fit">
            <h3 className="font-semibold mb-4">Related Services</h3>
            <div className="space-y-2">
              {relatedServices.map((rs) => (
                <Link key={rs.slug} href={`/services/${rs.slug}`} className="block p-3 rounded-lg hover:bg-muted transition-colors text-sm">
                  <div className="font-medium">{rs.title}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{rs.description}</div>
                </Link>
              ))}
            </div>
            <Link href="/contact" className="inline-flex mt-4 w-full">
              <Button className="w-full" size="sm">Get a Quote</Button>
            </Link>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Our Process</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-10 sm:p-14">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Book your free consultation today and take the first step toward a beautifully organized {service.title.toLowerCase()} space.
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
