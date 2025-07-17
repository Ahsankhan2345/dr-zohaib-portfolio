import { useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import Toast from "../components/Toast";
import clinicBg from "../assets/images/clinic-bg.jpg";

export default function Appointment() {
  const doctorNumber = "923188860057";

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const ownerName = form.ownerName.value;
    const petName = form.petName.value;
    const contact = form.contact.value;
    const date = form.date.value;
    const time = form.time.value;
    const message = form.message.value;

    // Create PDF
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Appointment Details", 20, 20);
    doc.setFontSize(12);
    doc.text(`Owner Name: ${ownerName}`, 20, 40);
    doc.text(`Pet Name: ${petName}`, 20, 50);
    doc.text(`Contact No.: ${contact}`, 20, 60);
    doc.text(`Date: ${date}`, 20, 70);
    doc.text(`Time: ${time}`, 20, 80);
    doc.text(`Message: ${message}`, 20, 90);
    doc.save("appointment.pdf");

    // WhatsApp message
    const whatsappMessage = `Hello Dr. Zohaib Buzdar,

I would like to book an appointment for my pet. Here are the details:

- Owner Name: ${ownerName}
- Pet Name: ${petName}
- Contact Number: ${contact}
- Date: ${date}
- Time: ${time}
- Message: ${message}

Thank you!`;

    window.open(
      `https://wa.me/${doctorNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section className="relative min-h-screen pt-[64px] pb-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={clinicBg}
        alt="Clinic Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 blur-sm"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Book an Appointment
          </h2>
          <p className="text-gray-700 mt-3 text-lg">
            Fill the form below to book your pet’s visit with Dr. Zohaib Buzdar.
          </p>
        </motion.div>

        <motion.form
          className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 font-medium">Owner Name</label>
            <input
              name="ownerName"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Pet Name</label>
            <input
              name="petName"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input
              name="contact"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Preferred Date</label>
            <input
              name="date"
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Preferred Time</label>
            <input
              name="time"
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message / Concern</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Book Appointment
          </button>
        </motion.form>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="Thank you! Your appointment has been booked successfully! 🐾"
      />
    </section>
  );
}
