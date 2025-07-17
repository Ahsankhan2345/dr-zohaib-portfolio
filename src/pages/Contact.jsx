import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/dr-zohaib.jpg"; // ✅ Optimized import

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pt-[64px]">
      {/* ✅ Optimized Background Profile Image */}
      <img
        src={profile}
        alt="Dr. Zohaib Buzdar"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
      />

      {/* Contact Content */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-xl text-center backdrop-blur-md">
        <motion.h2
          className="text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <p className="text-gray-700 mb-4">
          Feel free to reach out to Dr. Zohaib Buzdar for appointments, queries, or pet care advice.
        </p>

        {/* Contact Info */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800">
            📧 Email:{" "}
            <a
              href="mailto:zohaibuzdar74@gmail.com"
              className="text-blue-600 hover:underline"
            >
              zohaibuzdar74@gmail.com
            </a>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            📍 Location: Pakistan
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            📞 Contact: 03188860057 / 03376132219
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-blue-700 text-2xl">
          <a
            href="https://www.facebook.com/share/16pd8TTWae/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/dr._zohaib_buzdar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@dr.zohaibbuzdaroffical"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-zohaib-buzdar-2a5345259"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
