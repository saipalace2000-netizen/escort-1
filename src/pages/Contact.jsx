import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const phoneNumber = "917977209085";

  const defaultMessage =
    "Hi, I’d like to know more about your services @ Elite Event Service";

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-center">

        {/* Heading */}
        <h2 className="text-3xl text-gold mb-6 font-heading tracking-wide">
          Contact Elite Event Service
        </h2>

        <p className="max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          Private, discreet assistance available across India.
          All engagements are handled strictly by appointment only.
        </p>

        {/* Contact Card */}
        <div className="bg-[#111] rounded-2xl p-8
                        border border-gold/20 shadow-xl
                        hover:shadow-2xl transition">

          <h3 className="text-xl text-gold mb-4 tracking-wide">
            Nationwide Booking Desk
          </h3>

          <p className="text-sm opacity-70 mb-8">
            Speak directly with our team for availability,
            pricing, and private arrangements.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                defaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3
                         bg-green-500 text-white rounded-full font-semibold
                         hover:scale-105 transition"
              aria-label="WhatsApp Elite Event Service"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>

            {/* Call */}
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center justify-center gap-3 px-8 py-3
                         bg-gold text-black rounded-full font-semibold
                         hover:scale-105 transition"
              aria-label="Call Elite Event Service"
            >
              <FaPhoneAlt size={18} />
              Call Now
            </a>

          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs opacity-60 text-center mt-10">
          Available Across India • 18+ Service • By Appointment Only
        </p>

      </div>
    </section>
  );
}
