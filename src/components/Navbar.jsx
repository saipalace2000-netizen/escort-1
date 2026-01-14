import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppModal from "./WhatsAppModal";
import { CONTACT } from "../config/contact";

export default function Navbar() {
  const location = useLocation();
  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  const linkClass = (path) =>
    `hover:text-gold transition ${
      location.pathname === path ? "text-gold" : "text-white"
    }`;

  // ✅ WhatsApp Contacts (Only One Place)
  // You can keep same number for all OR different numbers city-wise
  const contacts = [
    { city: "Mumbai", number: CONTACT.whatsappNumberMumbai || CONTACT.whatsappNumber },
    { city: "Delhi", number: CONTACT.whatsappNumberDelhi || CONTACT.whatsappNumber },
    { city: "Pune", number: CONTACT.whatsappNumberPune || CONTACT.whatsappNumber },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt={CONTACT.brandName}
              className="h-9 md:h-12 w-auto"
            />

            {/* Hide brand text on mobile */}
            <span className="hidden md:block text-gold text-lg font-heading tracking-wide">
              {CONTACT.brandName}
            </span>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-5 md:gap-8 text-xs md:text-sm uppercase tracking-wide">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>

            <Link to="/profiles" className={linkClass("/profiles")}>
              Profiles
            </Link>

            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>

            {/* WhatsApp CTA */}
            <button
              onClick={() => setOpenWhatsApp(true)}
              aria-label="Contact on WhatsApp"
              className="
                ml-1 md:ml-2 px-4 md:px-5 py-2
                bg-gold text-black rounded-lg
                font-semibold flex items-center gap-2
                hover:opacity-90 hover:scale-105 transition
              "
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </button>
          </div>
        </div>
      </nav>

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
