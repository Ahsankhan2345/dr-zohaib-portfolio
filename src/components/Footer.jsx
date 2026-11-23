import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/16pd8TTWae/?mibextid=qi2Omg",
      icon: <FaFacebook size={18} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-zohaib-buzdar-2a5345259",
      icon: <FaLinkedin size={18} />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@dr.zohaibbuzdaroffical",
      icon: <FaTiktok size={18} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dr._zohaib_buzdar",
      icon: <FaInstagram size={18} />,
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
    { to: "/appointment", label: "Book a Visit" },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-white/10 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Top Glowing Teal-Emerald Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent" />

      {/* ✅ Subtle Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10 text-center md:text-left">
          
          {/* ✅ Column 1: Brand & Pet-Friendly Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 text-slate-950 flex items-center justify-center text-xl shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                🐾
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight font-serif group-hover:text-teal-300 transition-colors">
                  Dr. Zohaib Buzdar
                </h3>
                <p className="text-xs text-teal-300/85 font-semibold tracking-wider uppercase">
                  Veterinary Doctor
                </p>
              </div>
            </Link>
            <p className="mt-4 text-slate-300/85 text-sm leading-relaxed max-w-xs font-sans">
              Gentle, compassionate, and modern care to keep your beloved pets happy, healthy, and thriving every day.
            </p>
          </div>

          {/* ✅ Column 2: Quick Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-wrap justify-center md:flex-col gap-x-6 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-teal-300 text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 group-hover:bg-teal-300 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Column 3: Direct Contact & Social Pills */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>

            {/* Clickable Phone Numbers */}
            <div className="flex flex-col gap-2.5 mb-5">
              <a
                href="tel:03097303127"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 text-slate-200 hover:text-teal-300 text-sm font-medium transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-teal-400/15 border border-teal-400/30 text-teal-300 flex items-center justify-center">
                  <FaPhoneAlt size={13} />
                </span>
                <span>0309-7303127</span>
              </a>
              <a
                href="tel:03376132219"
                className="inline-flex items-center justify-center md:justify-start gap-2.5 text-slate-200 hover:text-teal-300 text-sm font-medium transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-teal-400/15 border border-teal-400/30 text-teal-300 flex items-center justify-center">
                  <FaPhoneAlt size={13} />
                </span>
                <span>0337-6132219</span>
              </a>
            </div>

            {/* Social Media Glass Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-teal-400/15 border border-white/10 hover:border-teal-400/40 text-slate-200 hover:text-teal-200 text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-teal-300">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-slate-200 font-semibold">
              Dr. Zohaib Buzdar
            </span>
            . All rights reserved.
          </p>
          <p className="text-teal-300/80 font-medium">
            Caring for Every Paw & Wing 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}