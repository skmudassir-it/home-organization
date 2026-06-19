"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="glass-card p-10 sm:p-14">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
              <FontAwesomeIcon icon={faCheckCircle} className="size-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Thank You!</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your message has been received. We typically respond within 2–4 hours during
              business days. Looking forward to helping you transform your space!
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Let&apos;s Talk About Your Space</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your home? Fill out the form below and we&apos;ll reach out
            within 24 hours to schedule your free consultation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Request a Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input placeholder="Jane Smith" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input type="email" placeholder="jane@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="(555) 123-4567" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interested In</label>
                      <Select value={form.service} onValueChange={(v: string | null) => setForm({ ...form, service: v || "" })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="whole-home">Whole Home Organizing</SelectItem>
                          <SelectItem value="closet">Closet Organization</SelectItem>
                          <SelectItem value="kitchen">Kitchen & Pantry</SelectItem>
                          <SelectItem value="garage">Garage Organization</SelectItem>
                          <SelectItem value="office">Home Office Setup</SelectItem>
                          <SelectItem value="move">Move-In/Move-Out</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tell Us About Your Space</label>
                    <Textarea placeholder="Describe the rooms you'd like organized, any specific challenges, and what your ideal outcome looks like..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2 size-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-muted-foreground text-sm">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-muted-foreground text-sm">hello@clutterfree.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Address</div>
                    <div className="text-muted-foreground text-sm">123 Organization Lane<br />Portland, OR 97201</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faClock} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Hours</div>
                    <div className="text-muted-foreground text-sm">Mon–Fri: 8 AM – 6 PM<br />Sat: 9 AM – 2 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Why Choose ClutterFree?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                    Certified professional organizers
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                    Licensed & fully insured
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                    500+ happy clients
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                    4.9 ★ average rating
                  </li>
                  <li className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                    30-day satisfaction guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
