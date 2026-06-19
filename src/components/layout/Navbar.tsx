"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faBars } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-500 to-emerald-400 text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">
            ✨ Free Consultation — Call (555) 123-4567 Today! &nbsp;|&nbsp; 10% Off Your First Session ✨
          </span>
          <span className="inline-block px-8">
            ✨ Free Consultation — Call (555) 123-4567 Today! &nbsp;|&nbsp; 10% Off Your First Session ✨
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-foreground">
              <FontAwesomeIcon icon={faBoxArchive} className="size-6 text-primary" />
              <span>Clutter<span className="text-primary">Free</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button variant="ghost" className="text-foreground/80 hover:text-primary hover:bg-primary/5">
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contact" className="inline-flex ml-2">
                <Button className="bg-primary hover:bg-primary/90">Free Consultation</Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon">
                  <FontAwesomeIcon icon={faBars} className="size-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-10">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-primary">
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <Link href="/contact" className="inline-flex mt-2" onClick={() => setOpen(false)}>
                    <Button className="w-full">Free Consultation</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
