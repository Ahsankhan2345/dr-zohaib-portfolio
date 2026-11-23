
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-teal-400/20 shadow-lg py-2"
          : "bg-slate-950/90 backdrop-blur-lg border-b border-white/10 py-3"
      }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 text-slate-950 flex items-center justify-center text-lg shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            🐾
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-serif group-hover:text-teal-300 transition-colors duration-300 leading-none">
              Dr. Zohaib Buzdar
            </span>

            <span className="text-[11px] text-teal-300/80 font-medium tracking-wider uppercase mt-1 hidden sm:block">
              Veterinary Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 py-1 ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-200 hover:text-teal-300"
                } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-teal-400 after:to-emerald-400 after:transition-all after:duration-300 ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Appointment Button */}
          <Link
            to="/appointment"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-400/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Visit
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/40 text-teal-300 flex items-center justify-center text-xl transition-all duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-5 pt-4 pb-5 bg-slate-950/95 backdrop-blur-2xl border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-teal-400/15 text-teal-300 border border-teal-400/30"
                    : "text-slate-200 hover:bg-white/5 hover:text-teal-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/appointment"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/25"
          >
            Book a Pet Visit →
          </Link>
        </nav>
      </div>
    </header>
  );
}
