import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faPinterest } from "@fortawesome/free-brands-svg-icons";

const services = [
  { label: "Whole Home Organizing", href: "/services/whole-home-organizing" },
  { label: "Closet Organization", href: "/services/closet-organization" },
  { label: "Kitchen & Pantry", href: "/services/kitchen-pantry" },
  { label: "Garage Organization", href: "/services/garage-organization" },
  { label: "Home Office Setup", href: "/services/home-office-setup" },
  { label: "Move-In/Move-Out", href: "/services/move-in-move-out" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white">
              <FontAwesomeIcon icon={faBoxArchive} className="size-6 text-teal-400" />
              <span>Clutter<span className="text-teal-400">Free</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional home organizing services that transform cluttered spaces into calm, functional, and beautiful environments you&apos;ll love coming home to.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="size-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-teal-600 transition-colors text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="size-4" />
              </a>
              <a href="#" className="size-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-teal-600 transition-colors text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="size-4" />
              </a>
              <a href="#" className="size-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-teal-600 transition-colors text-slate-400 hover:text-white">
                <FontAwesomeIcon icon={faPinterest} className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <FontAwesomeIcon icon={faPhone} className="size-4 mt-0.5 text-teal-400 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 mt-0.5 text-teal-400 shrink-0" />
                <span>hello@clutterfree.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <FontAwesomeIcon icon={faLocationDot} className="size-4 mt-0.5 text-teal-400 shrink-0" />
                <span>123 Organization Lane<br />Portland, OR 97201</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ClutterFree Home Organization. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
