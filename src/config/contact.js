// src/config/contact.js

export const CONTACT = {
  brandName: "Elite Event SERVICE", // or "Elite Event Services"

  // ✅ Main Numbers (WITH country code)
  phoneNumber: "917410123559",
  whatsappNumber: "917410123559",

  // ✅ Default WhatsApp message
  whatsappDefaultMessage:
    "Hello Elite Escort Event ✨ I want to book an event. Please share details.",

  // ✅ Email
  email: "eliteeventservices@gmail.com",

  // ✅ Social Links (update if needed)
  instagram: "https://www.instagram.com/elite.eventservices/",
  facebook: "https://www.facebook.com/profile.php?id=61586019944670",

  // ✅ Location / Address
  address: "Pune City, India",

  // ✅ Auto-generated links (NO NEED TO TOUCH)
  get telLink() {
    return `tel:+${this.phoneNumber}`;
  },

  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },

  get whatsappMessageLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappDefaultMessage
    )}`;
  },

  get mailLink() {
    return `mailto:${this.email}`;
  },
};
