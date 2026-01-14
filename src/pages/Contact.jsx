import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT } from "../config/contact";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-3xl text-gold mb-6 font-heading tracking-wide">
          Contact {CONTACT.brandName}
        </h2>

        <p className="max-w-xl mx-auto opacity-80 mb-10 leading-relaxed">
          Private, discreet assistance available across India.
          All engagements are handled strictly by appointment only.
        </p>

        {/* Contact Card */}
        <div
          className="
            bg-[#111] rounded-2xl p-8
            border border-gold/20 shadow-xl
            hover:shadow-2xl transition
          "
        >
          <h3 className="text-xl text-gold mb-3 tracking-wide">
            Nationwide Booking Desk
          </h3>

          <p className="text-sm opacity-70 mb-8 leading-relaxed">
            Speak directly with our team for availability, pricing, and private
            arrangements.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* WhatsApp */}
            <a
              href={CONTACT.whatsappMessageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3 px-8 py-3
                bg-green-500 text-white rounded-full font-semibold
                hover:scale-105 transition
              "
              aria-label={`WhatsApp ${CONTACT.brandName}`}
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>

            {/* Call */}
            <a
              href={CONTACT.telLink}
              className="
                flex items-center justify-center gap-3 px-8 py-3
                bg-gold text-black rounded-full font-semibold
                hover:scale-105 transition
              "
              aria-label={`Call ${CONTACT.brandName}`}
            >
              <FaPhoneAlt size={18} />
              Call Now
            </a>
          </div>

          {/* Extra Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Email */}
            {CONTACT.email && (
              <a
                href={CONTACT.mailLink}
                className="
                  flex items-center gap-3 p-4 rounded-xl
                  bg-black/30 border border-white/10
                  hover:bg-black/50 transition
                "
                aria-label="Email"
              >
                <FaEnvelope className="text-gold" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="text-sm font-semibold text-white">
                    {CONTACT.email}
                  </p>
                </div>
              </a>
            )}

            {/* Address */}
            {CONTACT.address && (
              <div
                className="
                  flex items-center gap-3 p-4 rounded-xl
                  bg-black/30 border border-white/10
                "
              >
                <FaMapMarkerAlt className="text-gold" />
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <p className="text-sm font-semibold text-white">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Socials */}
          <div className="mt-8 flex justify-center gap-4">
            {CONTACT.instagram && (
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm hover:opacity-80 transition"
              >
                Instagram
              </a>
            )}

            {CONTACT.facebook && (
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm hover:opacity-80 transition"
              >
                Facebook
              </a>
            )}
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
