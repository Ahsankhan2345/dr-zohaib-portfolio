import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/dr-zohaib-about.jpg";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Image Left Side (Not Centered) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={aboutImg}
            alt="Dr. Zohaib Buzdar - About"
            className="w-full max-w-sm rounded-2xl shadow-2xl border-4 border-blue-600 object-cover"
            loading="eager"                // ✅ loads immediately
            decoding="async"               // ✅ optimize rendering
            fetchpriority="high"           // ✅ hints browser to load early
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Text Right Side (Not Centered) */}
        <motion.div
          className="w-full md:w-1/2 text-gray-800 bg-white/70 shadow-xl backdrop-blur-lg p-6 rounded-lg"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 font-serif"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About Dr. Zohaib Buzdar
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            With years of veterinary expertise, Dr. Zohaib Buzdar offers compassionate care and advanced treatments for pets. He believes in combining cutting-edge medical practices with genuine empathy for animals and their owners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-xl transition-all duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
