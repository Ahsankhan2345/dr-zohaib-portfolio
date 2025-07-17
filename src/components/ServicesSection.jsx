import { motion } from "framer-motion";
import bgVideo from "../assets/videos/veterinary-bg.mp4";

export default function ServicesSection() {
  const services = [
    {
      title: "General Checkups",
      description: "Routine health exams to keep your pets in peak condition.",
      icon: "🐾",
    },
    {
      title: "Surgery",
      description: "Expert surgical care using modern equipment and techniques.",
      icon: "🩺",
    },
    {
      title: "Vaccinations",
      description: "Protection against common diseases with safe vaccinations.",
      icon: "💉",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ✅ Optimized Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // ✅ Start loading immediately
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* ✅ Overlay Content */}
      <div className="relative z-10 py-20 px-4 md:px-10 backdrop-blur-sm">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Services Offered
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ rotate: 2 }}
            >
              <div className="text-6xl mb-4 text-white drop-shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
