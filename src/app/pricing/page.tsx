import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

const packages = [
  {
    name: "Closet Refresh",
    price: "$350",
    description: "Perfect for a single closet that needs some love.",
    popular: false,
    features: ["One reach-in closet", "Declutter & sort session", "Folding & color coordination", "Product recommendations", "1–2 organizers", "4–6 hours"],
  },
  {
    name: "Room Makeover",
    price: "$800",
    description: "Transform a single room from chaos to calm.",
    popular: true,
    features: ["Any single room", "Full declutter & organization", "Custom storage solutions", "Labeling system", "Donation haul-away", "2 organizers, 1–2 days"],
  },
  {
    name: "Whole Home",
    price: "$2,500+",
    description: "The complete transformation — every room, every closet.",
    popular: false,
    features: ["Entire home (all rooms)", "Comprehensive declutter", "Custom systems per room", "Digital photo inventory", "30-day follow-up", "2–4 organizers, 3–5 days"],
  },
];

const addOns = [
  { name: "Pantry Organization", price: "+$200" },
  { name: "Garage System Install", price: "+$500" },
  { name: "Closet System Install", price: "+$300" },
  { name: "Digital Organization", price: "+$150" },
  { name: "Quarterly Tune-Up", price: "+$200/quarter" },
  { name: "Move-In Unpacking", price: "+$800" },
];

export const metadata: Metadata = {
  title: "Pricing | ClutterFree Home Organization",
  description: "Transparent pricing for professional home organization — from single closet refreshes to whole-home transformations. Free consultation included.",
};

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project starts with a free consultation. We&apos;ll give you an exact
            quote based on your space — no surprises, no hidden fees.
          </p>
        </div>

        {/* Packages */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {packages.map((pkg, i) => (
            <Card key={i} className={`glass-card overflow-hidden relative ${pkg.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <FontAwesomeIcon icon={faCheck} className="size-3.5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex mt-6 w-full">
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Add-On Services</h2>
          <div className="glass-card overflow-hidden">
            <div className="divide-y divide-border">
              {addOns.map((a, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4">
                  <span className="font-medium">{a.name}</span>
                  <Badge variant="outline">{a.price}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Every Project Includes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Free in-home consultation",
              "Custom organizing plan",
              "Professional organizing team",
              "Donation coordination",
              "Trash & recycling removal",
              "Product recommendations",
              "Labeling of all systems",
              "Maintenance guide",
              "30-day satisfaction guarantee",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 glass-card p-4">
                <FontAwesomeIcon icon={faCheck} className="size-4 text-primary shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-3">
            {[
              { q: "How is pricing determined?", a: "Pricing is based on room size, clutter volume, and the complexity of systems needed. After your free consultation, you'll receive an exact written quote — never a surprise bill." },
              { q: "Do you offer payment plans?", a: "Yes! We offer 3-month and 6-month payment plans for whole-home projects over $2,000. Ask during your consultation." },
              { q: "What's included in the free consultation?", a: "A 45–60 minute walk-through of your space, goal-setting discussion, preliminary plan outline, and a written quote. Zero pressure, zero obligation." },
              { q: "Do I need to buy organizing supplies separately?", a: "We provide a recommended shopping list with links. You can purchase yourself or we can acquire items at our wholesale discount and pass the savings to you." },
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

        {/* CTA */}
        <div className="text-center glass-card p-10 sm:p-14 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Let&apos;s Talk About Your Space</h2>
          <p className="text-muted-foreground mb-6">
            Every project is unique. Let&apos;s walk through your home together and create
            a plan that fits your goals and budget.
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
