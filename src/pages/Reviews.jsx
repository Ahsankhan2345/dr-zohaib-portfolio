import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Ali Raza",
      rating: 5,
      review:
        "Dr. Zohaib is an amazing vet! He took excellent care of my cat and explained everything in detail. Highly recommended.",
    },
    {
      name: "Sana Malik",
      rating: 4,
      review:
        "Very professional and kind staff. The clinic is super clean and modern. My dog was comfortable during the checkup.",
    },
    {
      name: "Bilal Ahmad",
      rating: 5,
      review:
        "Excellent surgeon! My parrot needed surgery and Dr. Zohaib handled it with great skill. Thank you for saving my pet.",
    },
    {
      name: "Nadia Sheikh",
      rating: 4,
      review:
        "Good service and timely treatment. The fees are also reasonable. Will visit again if needed.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Patient Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what pet owners say about their experience with Dr. Zohaib Buzdar and the care their pets received.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-all duration-700 overflow-hidden hover:scale-[1.015]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-blue-400/10 to-indigo-400/10 opacity-0 hover:opacity-100 transition-all duration-700 blur-md z-0"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex justify-center items-center rounded-full font-bold text-lg shadow-md hover:shadow-blue-400/80 transition-all duration-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                      {review.name}
                    </h3>
                    <motion.div
                      className="flex gap-1 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.3 }}
                    >
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400 hover:text-yellow-300 transition-all duration-300"
                          />
                        ))}
                    </motion.div>
                  </div>
                </div>
                <p className="text-gray-600 text-base">
                  “{review.review}”
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
