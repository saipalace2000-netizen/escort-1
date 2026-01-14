import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppModal from "./WhatsAppModal";
import { CONTACT } from "../config/contact";

export default function FloatingWhatsApp() {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  // ✅ One place for all WhatsApp contacts (can be multiple cities)
  const contacts = [
    { city: "Mumbai", number: CONTACT.whatsappNumber },
    { city: "Delhi", number: CONTACT.whatsappNumber },
    { city: "Pune", number: CONTACT.whatsappNumber },
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setOpenWhatsApp(true)}
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-3
          bg-green-500 text-white
          px-4 py-3 rounded-full
          shadow-xl
          hover:scale-105 hover:shadow-2xl
          transition duration-300
        "
      >
        <FaWhatsapp size={22} />
        <span className="hidden sm:block font-semibold tracking-wide">
          WhatsApp
        </span>
      </button>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={openWhatsApp}
        onClose={() => setOpenWhatsApp(false)}
        brandName={CONTACT.brandName}
        defaultMessage={CONTACT.whatsappDefaultMessage}
        contacts={contacts}
      />
    </>
  );
}
