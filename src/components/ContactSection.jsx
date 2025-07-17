export default function ContactSection() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Dr. Zohaib</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2" />
        <input type="email" placeholder="Your Email" className="border p-2" />
        <textarea placeholder="Message" rows="4" className="border p-2" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
