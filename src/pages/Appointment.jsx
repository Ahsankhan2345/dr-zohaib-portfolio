import { useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import Toast from "../components/Toast";
import clinicBg from "../assets/images/clinic-bg.jpg";

export default function Appointment() {
  const whatsappNumbers = [
    { label: "0309-7303127 (WhatsApp 1)", value: "923097303127" },
    { label: "0337-6132219 (WhatsApp 2)", value: "923376132219" },
  ];

  const [showToast, setShowToast] = useState(false);
  const [selectedWhatsApp, setSelectedWhatsApp] = useState(whatsappNumbers[0].value);
  const [selectedService, setSelectedService] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const servicePrices = {
    "Grooming": "Rs. 2,360",
    "Male Cat (Neutering)": "Rs. 9,440",
    "Female Cat (Spay)": "Rs. 15,340",
    "Vaccination": "Rs. 4,720",
    "Blood Panel": "Rs. 4,720",
    "CBC": "Rs. 1,770",
    "Dental Scaling (Gas)": "Rs. 11,800",
    "Dental Extraction (Gas)": "Rs. 17,700",
    "Bathing (Simple)": "Rs. 1,770",
    "Bathing (Medicated)": "Rs. 2,006",
    "Boarding Healthy": "Rs. 1,770",
    "X-Ray": "Rs. 1,770",
  };

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setSelectedService(selected);
    setPrice(servicePrices[selected] || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ownerName = form.ownerName.value;
    const petName = form.petName.value;
    const contact = form.contact.value;
    const date = form.date.value;
    const time = form.time.value;
    const message = form.message.value;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Appointment Details", 20, 20);
    doc.setFontSize(12);
    doc.text(`Owner Name: ${ownerName}`, 20, 40);
    doc.text(`Pet Name: ${petName}`, 20, 50);
    doc.text(`Contact No.: ${contact}`, 20, 60);
    doc.text(`Date: ${date}`, 20, 70);
    doc.text(`Time: ${time}`, 20, 80);
    doc.text(`Service: ${selectedService}`, 20, 90);
    doc.text(`Price: ${price}`, 20, 100);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 110);
    doc.text(`Issue/Message: ${message}`, 20, 120);
    doc.save("appointment.pdf");

    const whatsappMessage = `Hello Dr. Zohaib Buzdar,

I would like to book a visit for my pet. Here are the details:

- Owner Name: ${ownerName}
- Pet Name: ${petName}
- Contact Number: ${contact}
- Date: ${date}
- Time: ${time}
- Service: ${selectedService}
- Price: ${price}
- Payment Method: ${paymentMethod}
- Pet Note / Issue: ${message}

📎 Please also upload the payment screenshot manually on WhatsApp to confirm your appointment.

Thank you!`;

    window.open(
      `https://wa.me/${selectedWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-950/75 border border-white/15 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/25 text-white placeholder-slate-400 outline-none transition-all duration-300 text-sm sm:text-base";

  return (
    <section className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-slate-950 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Clinic Background Image */}
      <img
        src={clinicBg}
        alt="Clinic Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35 blur-[2px] scale-105 pointer-events-none"
      />

      {/* ✅ Multi-Layer Teal & Emerald Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-teal-950/75 to-slate-950/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_55%)] pointer-events-none" />

      {/* ✅ Ambient Glow Orbs */}
      <motion.div
        className="absolute top-24 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        {/* ✅ Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>🐾</span>
            <span>Gentle Care for Your Companion</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-serif">
            Book a Pet Visit
          </h2>
          <p className="text-slate-300/90 mt-3 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Share a few details about you and your furry friend to schedule a caring visit with Dr. Zohaib Buzdar.
          </p>

          {/* Direct Numbers Quick Info */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-teal-200">
            <a
              href="tel:03097303127"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-teal-400/30 hover:bg-teal-400/15 transition-colors"
            >
              📞 0309-7303127
            </a>
            <a
              href="tel:03376132219"
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-teal-400/30 hover:bg-teal-400/15 transition-colors"
            >
              📞 0337-6132219
            </a>
          </div>
        </motion.div>

        {/* ✅ Glassmorphism Appointment Form */}
        <motion.form
          className="relative bg-slate-900/70 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 rounded-[2rem] shadow-[0_25px_65px_rgba(0,0,0,0.6)] space-y-5 text-slate-200 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/85 to-transparent" />

          {/* Owner & Pet Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Your Name
              </label>
              <input
                name="ownerName"
                type="text"
                placeholder="Owner Name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Pet Name
              </label>
              <input
                name="petName"
                type="text"
                placeholder="Pet Name (e.g. Bella, Max)"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Contact & WhatsApp Desk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Your Contact Number
              </label>
              <input
                name="contact"
                type="tel"
                placeholder="03XX-XXXXXXX"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Send WhatsApp Booking To
              </label>
              <select
                value={selectedWhatsApp}
                onChange={(e) => setSelectedWhatsApp(e.target.value)}
                className={inputClass}
              >
                {whatsappNumbers.map((num) => (
                  <option key={num.value} value={num.value} className="bg-slate-900 text-white">
                    {num.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Preferred Date
              </label>
              <input
                name="date"
                type="date"
                required
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
                Preferred Time
              </label>
              <input
                name="time"
                type="time"
                required
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
              Select Care Service
            </label>
            <select
              value={selectedService}
              onChange={handleServiceChange}
              required
              className={inputClass}
            >
              <option value="" className="bg-slate-900 text-slate-400">
                Select Service
              </option>
              {Object.keys(servicePrices).map((service) => (
                <option key={service} value={service} className="bg-slate-900 text-white">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Estimated Price Badge */}
          {price && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between text-sm sm:text-base text-teal-100 bg-teal-400/15 border border-teal-300/35 px-4 py-3.5 rounded-xl"
            >
              <span>💰 Estimated Care Fee:</span>
              <strong className="text-teal-300 font-bold text-base sm:text-lg">
                {price}
              </strong>
            </motion.div>
          )}

          {/* Payment Method */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              className={inputClass}
            >
              <option value="" className="bg-slate-900 text-slate-400">
                Select Payment Method
              </option>
              <option value="Cash" className="bg-slate-900 text-white">
                Cash
              </option>
              <option value="Bank Transfer" className="bg-slate-900 text-white">
                Bank Transfer
              </option>
            </select>
          </div>

          {/* Bank Transfer Details Card */}
          {paymentMethod === "Bank Transfer" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-slate-200 bg-emerald-400/10 border border-emerald-300/30 p-4 rounded-xl space-y-1.5"
            >
              <p>
                <strong className="text-teal-200">Account Title:</strong> Muhammad Zohaib
              </p>
              <p>
                <strong className="text-teal-200">Account No.:</strong> 14280010135992990018
              </p>
              <p>
                <strong className="text-teal-200">Bank:</strong> Allied Bank
              </p>
              <p className="pt-1 text-teal-300 text-xs sm:text-sm font-medium">
                📌 Please upload the payment screenshot manually on WhatsApp to confirm your pet’s appointment.
              </p>
            </motion.div>
          )}

          {/* Pet Note / Issue */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-teal-200 mb-1.5">
              How is your pet feeling?
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us a little about your pet’s symptoms, mood, or visit notes..."
              required
              className={inputClass}
            ></textarea>
          </div>

          {/* Submit Shimmer CTA */}
          <button
            type="submit"
            className="group relative w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-bold text-base sm:text-lg shadow-[0_10px_30px_rgba(45,212,191,0.35)] hover:shadow-[0_14px_38px_rgba(45,212,191,0.55)] overflow-hidden transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Book Appointment & Download Slip</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>
        </motion.form>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="Thank you! Your pet’s appointment slip is ready and WhatsApp is opening! 🐾"
      />
    </section>
  );
}