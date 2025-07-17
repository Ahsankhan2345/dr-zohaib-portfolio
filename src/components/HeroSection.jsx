import { motion } from "framer-motion";
import doctorImg from "../assets/images/dr-zohaib.jpg";
import bgVideo from "../assets/videos/clinic-bg.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video with Slow Zoom */}
      <motion.video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-20">
        {/* Doctor Image */}
        <motion.img
          src={doctorImg}
          alt="Dr. Zohaib Buzdar"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl object-cover"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Text Content */}
        <motion.div
          className="mt-6 md:mt-0 md:ml-12 text-center md:text-left text-white max-w-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Dr. Zohaib Buzdar
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mt-3 font-medium italic drop-shadow-sm text-blue-300 font-sans"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Doctor of Veterinary Medicine
          </motion.p>

          <motion.p
            className="mt-4 text-gray-200 text-base md:text-lg font-light font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Providing top-tier veterinary care and compassionate services for your beloved pets. Book your appointment today and ensure your pet’s well-being.
          </motion.p>

          {/* Advanced Button */}
          <motion.a
            href="/appointment"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-indigo-600 hover:to-blue-800 text-white font-semibold rounded-full shadow-2xl transform transition duration-300 ease-in-out"
            whileHover={{
              scale: 1.15,
              rotate: 1,
              boxShadow: "0 8px 25px rgba(59,130,246,0.5)",
            }}
            whileTap={{
              scale: 0.95,
              rotate: -1,
              boxShadow: "0 4px 10px rgba(59,130,246,0.3)",
            }}
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
