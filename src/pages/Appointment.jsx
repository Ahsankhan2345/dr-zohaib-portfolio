import { useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import Toast from "../components/Toast";
import clinicBg from "../assets/images/clinic-bg.jpg";

export default function Appointment() {
  const doctorNumber = "923188860057";

  const [showToast, setShowToast] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const servicePrices = {
    "Grooming": "Rs. 2,000",
    "Male Cat (Neutering)": "Rs. 8,000",
    "Female Cat (Spay)": "Rs. 13,000",
    "Vaccination": "Rs. 4,000",
    "Blood Panel": "Rs. 4,000",
    "CBC": "Rs. 1,500",
    "Dental Scaling (Gas)": "Rs. 10,000",
    "Dental Extraction (Gas)": "Rs. 15,000",
    "Bathing (Simple)": "Rs. 1,500",
    "Bathing (Medicated)": "Rs. 1,700",
    "Boarding Healthy": "Rs. 1,500",
    "X-Ray": "Rs. 1,500"
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
    doc.text(`Service: ${selectedService}`, 20, 90);
    doc.text(`Price: ${price}`, 20, 100);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 110);
    doc.text(`Issue/Message: ${message}`, 20, 120);
    doc.save("appointment.pdf");

    // WhatsApp message
    const whatsappMessage = `Hello Dr. Zohaib Buzdar,

I would like to book an appointment for my pet. Here are the details:

- Owner Name: ${ownerName}
- Pet Name: ${petName}
- Contact Number: ${contact}
- Date: ${date}
- Time: ${time}
- Service: ${selectedService}
- Price: ${price}
- Payment Method: ${paymentMethod}
- Issue: ${message}

📎 Please also upload the payment screenshot manually on WhatsApp to confirm your appointment.

Thank you!`;

    window.open(
      `https://wa.me/${doctorNumber}?text=${encodeURIComponent(whatsappMessage)}`,
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

      {/* Overlay */}
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
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Pet Name</label>
            <input
              name="petName"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input
              name="contact"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Preferred Date</label>
            <input
              name="date"
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Preferred Time</label>
            <input
              name="time"
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block mb-1 font-medium">Select Service</label>
            <select
              value={selectedService}
              onChange={handleServiceChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Service</option>
              <option value="Grooming">Grooming</option>
              <option value="Male Cat (Neutering)">Male Cat (Neutering)</option>
              <option value="Female Cat (Spay)">Female Cat (Spay)</option>
              <option value="Vaccination">Vaccination</option>
              <option value="Blood Panel">Blood Panel</option>
              <option value="CBC">CBC</option>
              <option value="Dental Scaling (Gas)">Dental Scaling (Gas)</option>
              <option value="Dental Extraction (Gas)">Dental Extraction (Gas)</option>
              <option value="Bathing (Simple)">Bathing (Simple)</option>
              <option value="Bathing (Medicated)">Bathing (Medicated)</option>
              <option value="Boarding Healthy">Boarding Healthy</option>
              <option value="X-Ray">X-Ray</option>
            </select>
          </div>

          {/* Auto Price Display */}
          {price && (
            <div className="text-sm text-green-800 bg-green-100 border border-green-300 p-3 rounded">
              💰 Estimated Price: <strong>{price}</strong>
            </div>
          )}

          {/* Payment Method */}
          <div>
            <label className="block mb-1 font-medium">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Bank Info */}
          {paymentMethod === "Bank Transfer" && (
            <div className="text-sm text-gray-700 bg-yellow-100 border border-yellow-300 p-3 rounded">
              <p><strong>Account Title:</strong> Muhammad Zohaib</p>
              <p><strong>Account No.:</strong> 14280010135992990018</p>
              <p><strong>Bank:</strong> Allied Bank</p>
              <p className="mt-1 text-red-600">
                📌 Please upload the payment screenshot manually on WhatsApp to approve your appointment.
              </p>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Describe Pet Issue / Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded"
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
