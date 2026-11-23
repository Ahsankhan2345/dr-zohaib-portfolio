import { motion } from "framer-motion";
import bgVideo from "../assets/videos/veterinary-bg.mp4";

export default function ServicesSection() {
  const services = [
    {
      title: "Full Pet Health Checkups",
      description: "Gentle nose-to-tail checkups to keep your furry friends happy, active, and healthy.",
      icon: "🐾",
      tag: "Routine Care",
    },
    {
      title: "Safe & Gentle Surgery",
      description: "Stress-free surgical care with modern safety tools and loving post-care recovery.",
      icon: "🩺",
      tag: "Expert Care",
    },
    {
      title: "Pet Vaccinations",
      description: "Timely, painless shots to keep puppies, kittens, and adult pets safe from common illnesses.",
      icon: "💉",
      tag: "Protection",
    },
    {
      title: "Teeth & Gum Care",
      description: "Gentle teeth cleaning and fresh-breath checkups to keep your pet’s smile healthy and pain-free.",
      icon: "🦷",
      tag: "Dental Health",
    },
    {
      title: "Bath, Trim & Grooming",
      description: "Calm, loving baths, nail trims, and coat brushing so your pet looks and feels their best.",
      icon: "✂️",
      tag: "Pampering",
    },
    {
      title: "Urgent & Emergency Care",
      description: "Fast, caring help and quick health tests whenever your pet feels sick or needs immediate attention.",
      icon: "🚑",
      tag: "Fast Help",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Optimized Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* ✅ Multi-Layer Veterinary Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-teal-950/80 to-slate-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.12),transparent_65%)]" />

      {/* ✅ Ambient Glow Orbs */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 -right-24 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* ✅ Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Loving Care for Your Best Friend
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            How We Care for Your Pets
          </h2>
          <p className="mt-4 text-slate-300/90 text-base sm:text-lg font-sans">
            From playful puppies and curious kittens to senior companions—we treat every pet like family with gentle, stress-free care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-teal-400/40 rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden transition-colors duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/0 group-hover:via-teal-400/90 to-transparent transition-all duration-500" />

              {/* Subtle Hover Radial Glow */}
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Icon & Category Tag Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400/20 to-emerald-400/10 border border-teal-300/25 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:border-teal-300/50 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-200/90 text-xs font-medium tracking-wide">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors duration-300 font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-300/85 text-sm sm:text-base leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bottom Interactive Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/appointment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200 transition-colors"
                >
                  <span>Book a Visit</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}