import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactIcons() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-gold hover:scale-110 transition"
        aria-label="Instagram"
      >
        <FaInstagram size={22} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-gold hover:scale-110 transition"
        aria-label="Facebook"
      >
        <FaFacebookF size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917410123559"

        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-gold hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Phone Call */}
      <a
        href="tel:+917410123559"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-card text-gold hover:scale-110 transition"
        aria-label="Call"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}
