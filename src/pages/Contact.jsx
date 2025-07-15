import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const phone = "62818749604";
    const text = `Halo, saya ${name} dengan email ${email}. Pesan saya: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-primary mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We'd love to hear from you. Whether it's a question, feedback, or
          collaboration idea — drop us a message!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FiMapPin className="text-2xl text-primary" />
            <div>
              <h4 className="font-semibold text-primary">Address</h4>
              <p className="text-gray-700">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiPhone className="text-2xl text-primary" />
            <div>
              <h4 className="font-semibold text-primary">Phone</h4>
              <p className="text-gray-700">+62 818-749-604</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiMail className="text-2xl text-primary" />
            <div>
              <h4 className="font-semibold text-primary">Email</h4>
              <p className="text-gray-700">ukuikiukulele@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form with WhatsApp redirect */}
        <form
          className="space-y-4 bg-white p-6 rounded-2xl shadow-md"
          onSubmit={handleSend}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
          >
            <FiSend className="text-lg" />
            Send Message via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
