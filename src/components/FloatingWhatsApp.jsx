import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppModal from "./WhatsAppModal"; // adjust path if needed

export default function FloatingWhatsApp() {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpenWhatsApp(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                   bg-green-500 text-white px-4 py-3 rounded-full
                   shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp size={22} />
        <span className="hidden sm:block font-semibold">
          WhatsApp
        </span>
      </button>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={openWhatsApp}
        onClose={() => setOpenWhatsApp(false)}
        contacts={[
          { city: "Mumbai", number: "917977209085" },
          { city: "Delhi", number: "917066098382" },
          { city: "Pune", number: "9122999546" },
        ]}
      />
    </>
  );
}
