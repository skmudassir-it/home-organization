import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ClutterFree Home Organization",
  description: "Meet the ClutterFree team — professional organizers passionate about transforming homes into calm, beautiful, clutter-free spaces.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">About ClutterFree</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe that an organized home creates an organized mind. Since 2015, we&apos;ve helped hundreds
            of families reclaim their spaces and fall in love with their homes again.
          </p>
        </div>

        {/* Story */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Our Story
            </div>
            <h2 className="text-3xl font-bold tracking-tight">From Chaos to Calm — Our Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              ClutterFree was born in a Portland living room, where founder Sarah Mitchell realized that
              professional organizing wasn&apos;t just about tidying up — it was about giving people their
              time, energy, and peace of mind back.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What started as helping friends and family has grown into a full-service organizing company
              with a team of 12 certified professional organizers. We&apos;ve transformed over 500 homes
              and counting.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Homes Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="glass-card p-1 overflow-hidden rounded-2xl">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-teal-100 via-emerald-50 to-amber-50 flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <rect width="400" height="300" fill="url(#aboutGrad)" />
                <defs>
                  <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.93 0.03 200)" />
                    <stop offset="100%" stopColor="oklch(0.98 0.01 150)" />
                  </linearGradient>
                </defs>
                <rect x="120" y="60" width="160" height="120" rx="12" fill="white" opacity="0.9" />
                <rect x="135" y="75" width="130" height="15" rx="3" fill="oklch(0.48 0.14 200)" opacity="0.3" />
                <rect x="135" y="100" width="100" height="10" rx="3" fill="oklch(0.68 0.14 85)" opacity="0.4" />
                <rect x="135" y="120" width="80" height="10" rx="3" fill="oklch(0.68 0.14 85)" opacity="0.4" />
                <rect x="135" y="140" width="110" height="10" rx="3" fill="oklch(0.68 0.14 85)" opacity="0.4" />
                <text x="200" y="230" textAnchor="middle" fill="oklch(0.48 0.14 200)" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Organized Living</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {[
            { title: "Judgment-Free Zone", desc: "We meet you where you are. No shame, no guilt — just practical solutions and genuine support.", icon: "🤝" },
            { title: "Sustainable Systems", desc: "We build organizing systems that work for YOUR lifestyle, not Pinterest-perfect homes that fall apart in a week.", icon: "♻️" },
            { title: "Whole-Home Approach", desc: "Every room affects every other. We look at the big picture to create cohesive, flowing spaces.", icon: "🏠" },
          ].map((v, i) => (
            <div key={i} className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Certified professional organizers dedicated to transforming your space.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Sarah Mitchell", role: "Founder & Lead Organizer", img: "/images/team/sarah.jpg" },
            { name: "David Chen", role: "Senior Organizer", img: "/images/team/david.jpg" },
            { name: "Maria Rodriguez", role: "Closet Design Specialist", img: "/images/team/maria.jpg" },
          ].map((m, i) => (
            <div key={i} className="glass-card overflow-hidden text-center p-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-300 flex items-center justify-center text-white text-2xl font-bold">
                {m.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
