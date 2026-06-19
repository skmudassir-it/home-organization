"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  rating: number;
  review: string;
  client: string;
  timeline: string;
}

const projects: Project[] = [
  {
    title: "Full Home Transformation",
    location: "Portland Heights",
    description: "5-bedroom, full declutter + organization in 2 weeks",
    fullDescription: "This 5-bedroom family home had accumulated 15 years of clutter. Our team of 4 organizers spent 10 days transforming every room — from the attic to the basement. Custom shelving in the garage, zone-based kitchen, color-coded closets, and a home command center.",
    image: "/images/projects/project-1.svg",
    category: "whole-home",
    rating: 5,
    review: "I didn't think my house could ever look like this. The team was incredible — professional, fast, and zero judgment. I can find everything now!",
    client: "The Morrison Family",
    timeline: "10 days",
  },
  {
    title: "Master Closet Redesign",
    location: "Lake Oswego",
    description: "Custom walk-in closet with seasonal rotation plan",
    fullDescription: "A 12'×14' walk-in closet redesigned from the ground up. Double hanging on two walls, shoe shelving for 80+ pairs, purse display, and a seasonal rotation system. The client went from 'I have nothing to wear' to 'I can see everything I own.'",
    image: "/images/projects/project-2.svg",
    category: "closet",
    rating: 5,
    review: "My closet looks like a high-end boutique now. Sarah designed it around how I actually get dressed in the morning. Genius.",
    client: "Jennifer K.",
    timeline: "2 days",
  },
  {
    title: "Kitchen & Pantry Overhaul",
    location: "Beaverton",
    description: "Zone-based kitchen with categorized pantry system",
    fullDescription: "A busy family kitchen that hadn't been reorganized in 8 years. We created prep, cooking, and cleanup zones, installed pull-out shelves in lower cabinets, and built a categorized pantry with clear containers and labels for every item.",
    image: "/images/projects/project-3.svg",
    category: "kitchen",
    rating: 5,
    review: "Cooking dinner used to stress me out because I couldn't find anything. Now I know exactly where every spice, pan, and ingredient lives. Game-changer.",
    client: "Mark & Lisa T.",
    timeline: "1.5 days",
  },
  {
    title: "Home Office Makeover",
    location: "SE Portland",
    description: "Dual desk setup with filing system for remote-working couple",
    fullDescription: "Two remote workers sharing a 10'×12' office had become a paper-and-cable disaster. We designed dual zones with separate filing systems, cable management, and a shared supply station. Productivity went through the roof.",
    image: "/images/projects/project-4.svg",
    category: "office",
    rating: 5,
    review: "We went from dreading our home office to loving it. The cable management alone was worth it — no more spaghetti under the desk!",
    client: "David & Rachel C.",
    timeline: "1 day",
  },
  {
    title: "Garage Workshop Build",
    location: "Tigard",
    description: "Full garage clear-out with custom pegboard wall system",
    fullDescription: "A 2-car garage that hadn't fit a car in 6 years. Complete clear-out, wall-mounted track system, overhead storage racks, custom pegboard for tools, and labeled bins for seasonal items. Both cars now park inside.",
    image: "/images/projects/project-5.svg",
    category: "garage",
    rating: 5,
    review: "I can park BOTH cars in my garage for the first time in 6 years. The wall system they installed is incredible — every tool has a home.",
    client: "Tom D.",
    timeline: "2 days",
  },
  {
    title: "Move-In Organizing",
    location: "Vancouver, WA",
    description: "3-day unpack-and-organize for family of 4",
    fullDescription: "A family relocating from California needed their new 4-bedroom home unpacked and organized before the parents started new jobs. Our team unpacked every box, set up every room, and had the house fully organized in 3 days.",
    image: "/images/projects/project-6.svg",
    category: "move",
    rating: 5,
    review: "We would've been living out of boxes for months. ClutterFree had our entire house set up and organized before our first day at work. Heroes.",
    client: "The Park Family",
    timeline: "3 days",
  },
  {
    title: "Downsizing & Declutter",
    location: "NW Portland",
    description: "Empty-nesters downsizing from 4-bed to 2-bed condo",
    fullDescription: "A retired couple moving from a 3,000 sq ft home to a 1,200 sq ft condo. We helped sort through 30 years of belongings, coordinated donations, and designed storage for the new space that maximized every square foot.",
    image: "/images/projects/project-1.svg",
    category: "whole-home",
    rating: 5,
    review: "Downsizing felt overwhelming until ClutterFree stepped in. They made it manageable, even enjoyable. Our new condo feels spacious and organized.",
    client: "Robert & Susan M.",
    timeline: "5 days",
  },
  {
    title: "Kids' Playroom Rescue",
    location: "Hillsboro",
    description: "Toy organization system for family with 3 young children",
    fullDescription: "A playroom overtaken by toys, crafts, and books. We implemented a Montessori-inspired organization system with low shelves, picture labels, and rotating toy bins that the kids can maintain themselves.",
    image: "/images/projects/project-2.svg",
    category: "whole-home",
    rating: 5,
    review: "My kids actually clean up after themselves now! The picture labels and low bins make it so easy for them. I wish we'd done this years ago.",
    client: "Amanda P.",
    timeline: "1.5 days",
  },
  {
    title: "Linen Closet & Bathroom",
    location: "West Linn",
    description: "4 bathrooms and linen closet reorganized with category systems",
    fullDescription: "Four bathrooms with chaotic under-sink cabinets plus a hallway linen closet. We installed drawer dividers, under-sink pullouts, towel categorization, and a first-aid supply station.",
    image: "/images/projects/project-3.svg",
    category: "closet",
    rating: 5,
    review: "Every bathroom cabinet is now a pleasure to open. The linen closet went from avalanche risk to hotel-style. So satisfying!",
    client: "Catherine W.",
    timeline: "1 day",
  },
];

export function ProjectsClient() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Work</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Project Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations, real results. Browse our favorite projects from across
            the Portland metro area — each one a testament to the power of organization.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-10">
            <TabsList className="glass">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="whole-home">Whole Home</TabsTrigger>
              <TabsTrigger value="closet">Closets</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchens</TabsTrigger>
              <TabsTrigger value="office">Offices</TabsTrigger>
              <TabsTrigger value="garage">Garages</TabsTrigger>
            </TabsList>
          </div>

          {["all", "whole-home", "closet", "kitchen", "office", "garage", "move"].map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((p) => cat === "all" || p.category === cat)
                  .map((p, i) => (
                    <div key={i} className="glass-card overflow-hidden group">
                      <div className="w-full h-52 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                        <svg viewBox="0 0 400 240" className="w-full h-full">
                          <rect width="400" height="240" fill="url(#projGrad)" />
                          <defs><linearGradient id="projGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="oklch(0.95 0.02 200)" /><stop offset="100%" stopColor="oklch(0.97 0.01 85)" /></linearGradient></defs>
                          <text x="200" y="130" textAnchor="middle" fontSize="48">{
                            p.category === "whole-home" ? "🏠" :
                            ["closet"].includes(p.category) ? "👔" :
                            p.category === "kitchen" ? "🍳" :
                            p.category === "office" ? "💻" :
                            p.category === "garage" ? "🏗️" : "📦"
                          }</text>
                        </svg>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{p.category === "whole-home" ? "Whole Home" : p.category === "closet" ? "Closet" : p.category === "kitchen" ? "Kitchen" : p.category === "office" ? "Office" : p.category === "garage" ? "Garage" : "Move"}</Badge>
                          <span className="text-xs text-muted-foreground">{p.timeline}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{p.title}</h3>
                        <p className="text-xs text-primary font-medium mb-2">{p.location}</p>
                        <p className="text-sm text-muted-foreground mb-4">{p.fullDescription}</p>
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: p.rating }).map((_, j) => (
                            <FontAwesomeIcon key={j} icon={faStar} className="size-3 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground italic">&ldquo;{p.review}&rdquo;</p>
                        <p className="text-xs text-foreground/60 mt-1">— {p.client}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center glass-card p-10 sm:p-14 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready for Your Own Transformation?</h2>
          <p className="text-muted-foreground mb-6">
            Every project starts with a free, no-obligation consultation. Let&apos;s talk about your space.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg">
              <FontAwesomeIcon icon={faPhone} className="mr-2 size-4" />
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
