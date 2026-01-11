import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    // ✅ VERIFIED WhatsApp Business number
    window.open(
      `https://wa.me/917977209085?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // Optional: reset form
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111] p-8 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl text-gold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black text-white"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black text-white"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded bg-black text-white"
          />

          <button
            type="submit"
            className="w-full bg-gold py-3 rounded text-black font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
