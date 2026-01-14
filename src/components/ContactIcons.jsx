import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { CONTACT } from "../config/contact";

export default function ContactIcons() {
  const iconClass =
    "w-12 h-12 flex items-center justify-center rounded-full bg-card text-gold hover:scale-110 hover:shadow-lg transition duration-300";

  return (
    <div className="flex gap-6 justify-center mt-8">
      {/* Instagram */}
      {CONTACT.instagram && (
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="Instagram"
          title="Instagram"
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
          className={iconClass}
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF size={22} />
        </a>
      )}

      {/* WhatsApp */}
      {CONTACT.whatsappNumber && (
        <a
          href={CONTACT.whatsappMessageLink || CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      )}

      {/* Phone Call */}
      {CONTACT.phoneNumber && (
        <a
          href={CONTACT.telLink}
          className={iconClass}
          aria-label="Call"
          title="Call"
        >
          <FaPhoneAlt size={20} />
        </a>
      )}
    </div>
  );
}
