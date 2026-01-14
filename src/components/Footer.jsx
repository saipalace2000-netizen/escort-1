import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import WhatsAppModal from "./WhatsAppModal";
import { CONTACT } from "../config/contact";

export default function Footer() {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);

  // ✅ WhatsApp Contacts (single source of truth)
  const contacts = [
    { city: "Mumbai", number: CONTACT.whatsappNumberMumbai || CONTACT.whatsappNumber },
    { city: "Delhi", number: CONTACT.whatsappNumberDelhi || CONTACT.whatsappNumber },
    { city: "Pune", number: CONTACT.whatsappNumberPune || CONTACT.whatsappNumber },
  ];

  const iconClass =
    "w-12 h-12 flex items-center justify-center rounded-full bg-bg text-gold hover:scale-110 hover:bg-gold hover:text-bg transition duration-300";

  return (
    <>
      <footer className="bg-card mt-20 border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">

          {/* Heading */}
          <h2 className="text-gold text-3xl font-heading mb-4 tracking-wide">
            Private & Discreet Connections
          </h2>

          <p className="max-w-xl mx-auto opacity-80 mb-8 leading-relaxed">
            Experience elegance, confidentiality, and genuine companionship.
            Available for selective engagements and premium experiences only.
          </p>

          <p className="text-gold text-sm tracking-wide uppercase mb-2">
            By Appointment Only
          </p>

          <p className="text-sm opacity-80 mb-8">
            Available Across India
          </p>

          {/* Major Cities */}
          <div className="max-w-4xl mx-auto mb-10">
            <h3 className="text-gold text-sm uppercase tracking-wide mb-4">
              Major Cities We Serve
            </h3>

            <p className="text-sm opacity-70 leading-relaxed">
              Mumbai · Pune · Bangalore · Ahmedabad · Jaipur · Surat · Delhi ·
              Kolkata · Nagpur · Goa · Bhopal · Indore · Diu &amp; Daman
            </p>
          </div>

          {/* Pune Areas */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-gold text-sm uppercase tracking-wide mb-4">
              Pune Service Areas
            </h3>

            <p className="text-sm opacity-65 leading-relaxed">
              Kalyani Nagar · Koregaon Park · Viman Nagar · Kharadi · Hinjawadi ·
              Baner · Aundh · Bavdhan · Hadapsar · Shivaji Nagar · Deccan ·
              Swargate · Camp · Magarpatta · Pimpri-Chinchwad · Chakan
            </p>
          </div>

          {/* Social & Contact Icons */}
          <div className="flex justify-center gap-6">

            {/* Instagram */}
            {CONTACT.instagram && (
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${CONTACT.brandName} Instagram`}
                className={iconClass}
              >
                <FaInstagram size={22} />
              </a>
            )}

            {/* Facebook */}
            {CONTACT.facebook && (
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${CONTACT.brandName} Facebook`}
                className={iconClass}
              >
                <FaFacebookF size={22} />
              </a>
            )}

            {/* WhatsApp */}
            <button
              onClick={() => setOpenWhatsApp(true)}
              aria-label="Chat on WhatsApp"
              className={iconClass}
            >
              <FaWhatsapp size={22} />
            </button>

            {/* Call */}
            {CONTACT.telLink && (
              <a
                href={CONTACT.telLink}
                aria-label={`Call ${CONTACT.brandName}`}
                className={iconClass}
              >
                <FaPhoneAlt size={20} />
              </a>
            )}
          </div>

          {/* Bottom Disclaimer */}
          <p className="mt-10 text-xs opacity-60 leading-relaxed">
            © {new Date().getFullYear()} {CONTACT.brandName}. All rights reserved.
            <br />
            This website is intended for adults only (18+). By accessing this site,
            you confirm that you are at least 18 years of age.
          </p>
        </div>
      </footer>

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
