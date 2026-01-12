import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { indianProfiles, russianProfiles } from "../data/profiles";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import WhatsAppModal from "../components/WhatsAppModal";

export default function ProfileDetails() {
  const { id } = useParams();
  const [openContact, setOpenContact] = useState(false);

  // Combine all profiles
  const allProfiles = [...indianProfiles, ...russianProfiles];

  // Find profile safely
  const profile = allProfiles.find((p) => p.id === id);

  // Safety fallback
  if (!profile) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-bg px-6 text-center">
        <h2 className="text-gold text-3xl font-heading mb-4">
          Profile Not Found
        </h2>
        <p className="text-gray-400 mb-8 text-sm max-w-md">
          The profile you are looking for does not exist or may have been removed.
        </p>
        <Link
          to="/profiles"
          className="px-6 py-3 bg-gold text-bg rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Profiles
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen px-6 py-24 flex justify-center bg-bg">
        <div className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-xl">

          {/* IMAGE */}
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-10 text-center">

            {/* Name + Age */}
            <h1 className="text-gold text-4xl font-heading tracking-wide">
              {profile.name}, {profile.age}
            </h1>

            {/* Badge */}
            <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
              Verified Companion · Premium Profile
            </p>

            {/* Availability */}
            <p className="mt-3 text-sm text-green-400">
              ● Available by Appointment
            </p>

            {/* Divider */}
            <div className="w-24 h-px bg-gold/30 mx-auto my-8" />

            {/* About */}
            <div className="max-w-xl mx-auto">
              <span className="block text-gold mb-3 uppercase tracking-wide text-xs">
                About
              </span>
              <p className="leading-relaxed opacity-80 text-sm">
                {profile.description}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

              {/* WhatsApp */}
              <button
                onClick={() => setOpenContact(true)}
                className="flex items-center justify-center gap-3 px-8 py-3
                           bg-green-500 text-white rounded-full font-semibold
                           hover:opacity-90 transition"
              >
                <FaWhatsapp size={20} />
                Book on WhatsApp
              </button>

              {/* Call */}
              <button
                onClick={() => setOpenContact(true)}
                className="flex items-center justify-center gap-3 px-8 py-3
                           bg-gold text-bg rounded-full font-semibold
                           hover:opacity-90 transition"
              >
                <FaPhoneAlt size={18} />
                Call Now
              </button>

            </div>

            {/* Trust Line */}
            <p className="mt-8 text-xs opacity-50">
              Private Appointments Only · 100% Discreet · 18+
            </p>

            {/* Back */}
            <Link
              to="/profiles"
              className="block mt-6 text-xs opacity-60 hover:text-gold transition"
            >
              ← Back to Profiles
            </Link>

          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      <WhatsAppModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
        context={{ profileName: profile.name }}
      />
    </>
  );
}
