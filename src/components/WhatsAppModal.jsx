import { FaTimes, FaWhatsapp } from "react-icons/fa";

export default function WhatsAppModal({
  isOpen,
  onClose,
  contacts = [],
  brandName = "Elite Event Service",
  defaultMessage = "Hello ✨ I want to book an event.",
}) {
  if (!isOpen) return null;

  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Background Blur */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md rounded-2xl bg-card shadow-2xl p-6 border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gold">
              Chat on WhatsApp
            </h2>
            <p className="text-sm text-white/70">
              {brandName} support is online ✅
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition"
            aria-label="Close"
          >
            <FaTimes className="text-white/80" />
          </button>
        </div>

        {/* Contacts */}
        <div className="space-y-3">
          {contacts.map((c, index) => (
            <button
              key={index}
              onClick={() => openWhatsApp(c.number)}
              className="
                w-full flex items-center justify-between
                px-4 py-3 rounded-xl
                bg-black/30 hover:bg-black/50
                border border-white/10
                transition duration-300
              "
            >
              <div className="text-left">
                <p className="text-white font-semibold">{c.city}</p>
                <p className="text-white/60 text-sm">+{c.number}</p>
              </div>

              <span className="flex items-center gap-2 text-green-400 font-semibold">
                <FaWhatsapp /> Chat
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-white/40 mt-4 text-center">
          Tap any city to start WhatsApp chat instantly.
        </p>
      </div>
    </div>
  );
}
