import { motion } from "framer-motion";
import doctorImg from "../assets/images/dr-zohaib.jpg";
import bgVideo from "../assets/videos/clinic-bg.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-950 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Background Video with Fast Load */}
      <motion.video
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* ✅ Multi-Layer Veterinary Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/95 via-teal-950/75 to-emerald-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_50%)]" />

      {/* ✅ Soft Ambient Glow Orbs */}
      <motion.div
        className="absolute top-16 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-14 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✅ Overlay Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-5 sm:px-8 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* ✅ Optimized Doctor Image with Animated Halo Ring */}
        <motion.div
          className="relative flex-shrink-0 group"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
        >
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-teal-400 via-emerald-300 to-amber-300 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
          <div className="relative p-1 rounded-full bg-gradient-to-b from-white/70 to-teal-200/30 shadow-2xl">
            <img
              src={doctorImg}
              alt="Dr. Zohaib Buzdar"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-slate-900/40"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </motion.div>

        {/* ✅ Advance Glassmorphism Content Card */}
        <motion.div
          className="relative text-center md:text-left text-white max-w-xl bg-slate-900/55 backdrop-blur-xl border border-white/15 rounded-3xl p-7 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent" />

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] font-serif"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
          >
            Dr. Zohaib Buzdar
          </motion.h1>

          <motion.p
            className="inline-flex items-center mt-3.5 px-4 py-1.5 rounded-full bg-teal-400/15 border border-teal-300/35 text-teal-200 text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase font-sans shadow-inner"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Veterinary Doctor
          </motion.p>

          <motion.p
            className="mt-5 text-slate-200/90 text-base sm:text-lg leading-relaxed font-normal font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Providing top-tier veterinary care and compassionate services for your beloved pets. Book your appointment today and ensure your pet’s well-being.
          </motion.p>

          {/* ✅ Advance Book Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <motion.a
              href="/appointment"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-bold text-base sm:text-lg shadow-[0_10px_30px_rgba(45,212,191,0.35)] overflow-hidden transition-all duration-300"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 14px 36px rgba(45, 212, 191, 0.55)",
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}