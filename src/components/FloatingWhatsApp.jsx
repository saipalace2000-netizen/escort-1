import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917977209085"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="WhatsApp Booking"
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:block font-semibold">
        Book on WhatsApp
      </span>
    </a>
  );
}
