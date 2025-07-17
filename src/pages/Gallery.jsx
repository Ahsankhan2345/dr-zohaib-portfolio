import { motion } from "framer-motion";
import img1 from "../assets/images/gallery/gallery-1.jpg";
import img2 from "../assets/images/gallery/gallery-2.jpg";
import img3 from "../assets/images/gallery/gallery-3.jpg";
import img4 from "../assets/images/gallery/gallery-4.jpg";

export default function Gallery() {
  const images = [
    {
      src: img1,
      title: "Modern Veterinary Clinic",
      desc: "Equipped with advanced tools for thorough diagnosis.",
    },
    {
      src: img2,
      title: "Compassionate Pet Care",
      desc: "Gentle and loving care for every patient.",
    },
    {
      src: img3,
      title: "Advanced Surgical Suite",
      desc: "Safe surgical procedures with modern equipment.",
    },
    {
      src: img4,
      title: "Happy Patients",
      desc: "Satisfied pets and owners after their visit.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into our clinic’s facilities, our caring team, and our
            happy patients.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative w-full overflow-hidden rounded-xl shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover rounded-xl transform group-hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white text-left">
                <h3 className="text-2xl font-bold mb-2">{img.title}</h3>
                <p className="text-sm">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
