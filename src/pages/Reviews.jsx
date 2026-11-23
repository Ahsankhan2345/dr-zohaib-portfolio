import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Ali Raza",
      petName: "Simba (Persian Cat)",
      petEmoji: "🐱",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Dr. Zohaib is an amazing vet! He took excellent care of my Persian cat Simba and explained every step with patience. Highly recommended to every pet parent.",
    },
    {
      name: "Sana Malik",
      petName: "Bruno (Golden Retriever)",
      petEmoji: "🐶",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Very gentle and kind approach. The clinic is super clean and calm. Bruno usually gets nervous at clinics, but he stayed totally relaxed during his checkup.",
    },
    {
      name: "Bilal Ahmad",
      petName: "Mithu (Ringneck Parrot)",
      petEmoji: "🦜",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Skilled and caring doctor! My parrot needed urgent treatment and Dr. Zohaib handled him with great precision. Thank you so much for saving our little buddy.",
    },
    {
      name: "Nadia Sheikh",
      petName: "Snowy (White Rabbit)",
      petEmoji: "🐰",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Timely treatment and very reasonable fees. Dr. Zohaib guided me on Snowy’s diet and hygiene in simple words. Will definitely visit again.",
    },
    {
      name: "Hamza Tariq",
      petName: "Rocky (German Shepherd)",
      petEmoji: "🐕",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Best experience for Rocky’s vaccinations and dental checkup. Quick service, zero stress, and genuine love for animals shows in everything they do.",
    },
    {
      name: "Ayesha Siddiqui",
      petName: "Luna & Coco (Kittens)",
      petEmoji: "🐈",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      petImg: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Took my two kittens for their first grooming and checkup. They came back purring, clean, and super happy! Truly a pet-friendly clinic.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-slate-950 pt-28 pb-24 overflow-hidden selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Multi-Layer Teal & Emerald Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950/65 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_55%)] pointer-events-none" />

      {/* ✅ Soft Floating Ambient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ✅ Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>🐾</span>
            <span>Happy Pet Parents</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Patient{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed font-sans">
            See what loving pet owners say about their visits with Dr. Zohaib Buzdar and the gentle care their pets received.
          </p>
        </motion.div>

        {/* ✅ Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative bg-slate-900/65 backdrop-blur-2xl border border-white/15 hover:border-teal-400/45 rounded-[2rem] p-6 sm:p-7 shadow-[0_22px_55px_rgba(0,0,0,0.55)] overflow-hidden flex flex-col justify-between transition-colors duration-300"
            >
              {/* Top Glowing Edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/0 group-hover:via-teal-300/90 to-transparent transition-all duration-500" />

              {/* Subtle Corner Glow */}
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Row: Owner Profile + Pet Picture */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Owner Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover border-2 border-teal-400/60 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border border-teal-400/40 flex items-center justify-center text-xs">
                        {item.petEmoji}
                      </span>
                    </div>

                    {/* Name & Stars */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-200 transition-colors font-serif leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-teal-300/85 font-medium mt-0.5">
                        {item.petName}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        {Array(item.rating)
                          .fill(0)
                          .map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-teal-300 text-xs sm:text-sm drop-shadow"
                            />
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Cute Pet Thumbnail */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.petImg}
                      alt={item.petName}
                      loading="lazy"
                      className="w-14 h-14 rounded-2xl object-cover border border-white/20 group-hover:border-teal-300/60 group-hover:scale-105 transition-all duration-300 shadow-lg"
                    />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed font-sans italic">
                  “{item.review}”
                </p>
              </div>

              {/* Footer Row */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-teal-300/90 font-medium">
                  <span>✔</span>
                  <span>Verified Pet Visit</span>
                </span>
                <FaQuoteRight className="text-teal-400/30 text-base group-hover:text-teal-300/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}