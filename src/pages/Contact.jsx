import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import doctorImg from "../assets/images/dr-zohaib.jpg";

export default function Contact() {
  return (
    <section className="relative min-h-screen pt-[64px] pb-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={doctorImg}
        alt="Dr. Zohaib Buzdar"
        className="absolute inset-0 w-full h-full object-cover brightness-50 blur-sm"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Dr. Zohaib Buzdar
          </h2>
          <p className="text-gray-700 mt-3 text-lg">
            Feel free to reach out through the details below.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-1">Name</h3>
            <p>Dr. Zohaib Buzdar</p>
            <p className="text-sm text-gray-500">Doctor of Veterinary Medicine</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Clinic Location</h3>
            <p> Lahore-Pakistan</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Phone Numbers</h3>
            <p>0318-8860057</p>
            <p>0337-6132219</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <a
              href="mailto:drzohaibvet@gmail.com"
              className="text-blue-600 hover:underline"
            >
              drzohaibvet@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Dr. Zohaib Buzdar</h3>
            <div className="flex flex-wrap gap-4 mt-3 text-blue-600 text-2xl">
              <a
                href="https://www.facebook.com/share/16pd8TTWae/?mibextid=qi2Omg"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-blue-700 transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/dr._zohaib_buzdar"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-pink-600 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@dr.zohaibbuzdaroffical"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-black transition-all duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-zohaib-buzdar-2a5345259"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-blue-800 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
