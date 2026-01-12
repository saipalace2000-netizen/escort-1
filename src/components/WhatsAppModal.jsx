import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";

export default function WhatsAppModal({ isOpen, onClose, context }) {
  if (!isOpen) return null;

  const phoneNumber = "917977209085";

  const defaultMessage = context?.profileName
    ? `Hi, I’d like to know more about ${context.profileName}'s availability @ Elite Event Service`
    : "Can I know more about your service @ Elite Event Service";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-card w-[90%] max-w-md rounded-2xl p-6 border border-gold/20 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gold text-xl font-heading tracking-wide">
            Contact Elite Event Service
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gold hover:rotate-90 transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-sm opacity-70 mb-6 text-center">
          Private & discreet assistance available by appointment only.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-6">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Elite Event Service"
            className="flex items-center gap-3 px-6 py-3
                       bg-green-500 text-white rounded-full font-semibold
                       hover:scale-105 transition"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href={`tel:+${phoneNumber}`}
            aria-label="Call Elite Event Service"
            className="flex items-center gap-3 px-6 py-3
                       bg-gold text-black rounded-full font-semibold
                       hover:scale-105 transition"
          >
            <FaPhoneAlt size={18} />
            Call
          </a>

        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs opacity-60 text-center">
          Available Across India • 18+ Service • By Appointment Only
        </p>
      </div>
    </div>
  );
}
