import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/gallery/gallery-1.jpg";
import img2 from "../assets/images/gallery/gallery-2.jpg";
import img3 from "../assets/images/gallery/gallery-3.jpg";
import img4 from "../assets/images/gallery/gallery-4.jpg";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {
      src: img1,
      title: "Modern Veterinary Clinic",
      desc: "Equipped with advanced tools for gentle, stress-free checkups.",
      tag: "Our Clinic",
    },
    {
      src: img2,
      title: "Compassionate Pet Care",
      desc: "Loving hands and calm care for every furry patient.",
      tag: "Pet Love",
    },
    {
      src: img3,
      title: "Advanced Surgical Suite",
      desc: "Safe, clean procedures with modern comfort & recovery.",
      tag: "Safe Care",
    },
    {
      src: img4,
      title: "Happy Patients",
      desc: "Wagging tails, happy purrs, and smiling pet parents.",
      tag: "Happy Tails",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-slate-950 pt-28 pb-24 overflow-hidden selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Multi-Layer Veterinary Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-teal-950/60 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_55%)] pointer-events-none" />

      {/* ✅ Floating Ambient Glow Orbs */}
      <motion.div
        className="absolute top-24 right-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -22, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 left-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ✅ Section Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>🐾</span>
            <span>Happy Tails & Caring Moments</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-slate-300/90 text-base sm:text-lg mt-4 leading-relaxed font-sans">
            A glimpse into our cozy clinic, gentle care routines, and the adorable pets who brighten our days.
          </p>
        </motion.div>

        {/* ✅ Advance Animated Masonry / Bento Gallery Grid */}
        <motion.div
          className="columns-1 md:columns-2 gap-7 lg:gap-8 space-y-7 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              onClick={() => setSelectedImg(img)}
              className="group relative break-inside-avoid w-full overflow-hidden rounded-[2rem] bg-slate-900/70 border border-white/15 hover:border-teal-400/50 shadow-[0_22px_55px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              {/* Top Glowing Edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-teal-400/0 group-hover:via-teal-300/90 to-transparent transition-all duration-500" />

              {/* Shimmer Light Sweep on Hover */}
              <div className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-teal-300/30 text-teal-200 text-xs font-semibold tracking-wide shadow-lg">
                  {img.tag}
                </span>
                <span className="w-9 h-9 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-teal-300 flex items-center justify-center text-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                  ⤢
                </span>
              </div>

              {/* Image with Smooth Zoom & Subtle Tilt */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.title}
                  loading="eager"
                  fetchpriority={idx === 0 ? "high" : "auto"}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                {/* ✅ Sticky Glass Text Overlay (Always Visible + Elevated on Hover) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-900/75 backdrop-blur-xl border border-white/15 group-hover:border-teal-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-500 group-hover:-translate-y-1 shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-200 transition-colors font-serif">
                      {img.title}
                    </h3>
                    <span className="text-teal-300 text-sm transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <p className="text-slate-300/90 text-xs sm:text-sm mt-1 leading-relaxed font-sans">
                    {img.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Interactive Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-slate-900/90 border border-teal-400/35 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-teal-400 text-white hover:text-slate-950 border border-white/20 flex items-center justify-center font-bold text-lg transition-colors duration-300 cursor-pointer"
              >
                ✕
              </button>

              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full max-h-[75vh] object-contain bg-slate-950"
              />

              <div className="p-5 sm:p-6 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    {selectedImg.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    {selectedImg.desc}
                  </p>
                </div>
                <span className="self-start sm:self-center px-3.5 py-1 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs font-semibold">
                  {selectedImg.tag}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}