import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const highlights = [
    { value: "100%", label: "Stress-Free & Gentle Care", icon: "💚" },
    { value: "1,000+", label: "Happy Pets Treated", icon: "🐾" },
    { value: "24/7", label: "Pet Parent Support", icon: "🩺" },
  ];

  return (
    <section className="relative w-full py-24 lg:py-28 overflow-hidden bg-slate-950 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Multi-Layer Veterinary Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950/65 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_50%)]" />

      {/* ✅ Subtle Decorative Paw Watermarks */}
      <span className="absolute top-16 left-[46%] text-5xl opacity-[0.04] rotate-12 select-none pointer-events-none">
        🐾
      </span>
      <span className="absolute bottom-20 right-16 text-6xl opacity-[0.04] -rotate-12 select-none pointer-events-none">
        🐾
      </span>

      {/* ✅ Soft Floating Ambient Orbs */}
      <motion.div
        className="absolute top-12 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* ✅ Image Left Side (Zoom Focused on Doctor) */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-start relative"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Teal & Emerald Halo */}
              <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-tr from-teal-400 via-emerald-300 to-cyan-300 opacity-55 blur-lg group-hover:opacity-90 transition-opacity duration-500" />

              {/* Decorative Offset Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] border border-teal-400/30 bg-teal-400/5 pointer-events-none hidden sm:block transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Main Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.65)] bg-slate-900">
                <motion.img
                  src="/images/dr-zohaib-about.jpg"
                  alt="Dr. Zohaib Buzdar - About"
                  className="w-full h-[420px] sm:h-[465px] object-cover object-[50%_20%]"
                  whileHover={{ scale: 1.12, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Pet-Parent Trust Badge */}
              <motion.div
                className="absolute -bottom-5 left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-xl border border-teal-300/40 rounded-2xl px-4 py-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3.5"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 text-slate-950 flex items-center justify-center text-xl shadow-md">
                  🐾
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">
                    Trusted Pet Doctor
                  </p>
                  <p className="text-teal-200/90 text-xs mt-0.5 font-medium">
                    Caring for Pets Like Family
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ✅ Text Right Side (Glassmorphism Card) */}
          <motion.div
            className="w-full lg:w-7/12 relative bg-slate-900/65 backdrop-blur-2xl border border-white/15 rounded-[2rem] p-7 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Accent Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/85 to-transparent" />

            {/* Subtle Corner Glow Inside Card */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow Pill */}
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <span>🐕</span>
              <span>Meet Your Pet’s Best Friend</span>
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-5xl font-bold mb-5 text-white leading-tight font-serif"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
                Dr. Zohaib Buzdar
              </span>
            </motion.h2>

            {/* Pet-Friendly Description */}
            <motion.p
              className="text-slate-200/95 text-base sm:text-lg mb-4 leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              With years of hands-on veterinary experience, Dr. Zohaib Buzdar brings gentle, stress-free care and modern treatments to every furry, feathered, and four-legged companion.
            </motion.p>

            <motion.p
              className="text-slate-300/85 text-sm sm:text-base mb-8 leading-relaxed font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Whether it’s a nervous puppy’s first checkup or a senior pet needing extra comfort, he listens closely to pet parents and treats every animal with genuine warmth, patience, and love.
            </motion.p>

            {/* ✅ Mini Trust & Stat Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group/stat relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-400/40 rounded-2xl p-4 sm:p-5 text-center sm:text-left transition-all duration-300 shadow-inner"
                >
                  <div className="flex items-center justify-center sm:justify-between mb-1.5">
                    <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent font-serif">
                      {item.value}
                    </p>
                    <span className="text-lg opacity-80 group-hover/stat:scale-125 transition-transform duration-300 hidden sm:inline-block">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* ✅ Shimmer CTA Button */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="/gallery"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-bold text-base sm:text-lg shadow-[0_10px_30px_rgba(45,212,191,0.35)] hover:shadow-[0_14px_38px_rgba(45,212,191,0.55)] overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Happy Pets Gallery
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}