import { indianProfiles, russianProfiles } from "../data/profiles";
import ProfileCard from "../components/ProfileCard";

export default function Profiles() {
  return (
    <section className="min-h-screen px-6 md:px-10 py-20 bg-bg">

      {/* ========================= */}
      {/* PAGE TITLE */}
      {/* ========================= */}
      <h1 className="text-gold text-4xl md:text-5xl font-heading mb-16 text-center">
        Featured Profiles
      </h1>

      {/* ========================= */}
      {/* INDIAN PROFILES */}
      {/* ========================= */}
      <div className="max-w-7xl mx-auto">

        <h2 className="text-gold text-3xl font-heading mb-10 text-center">
          Indian Companions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {indianProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

      </div>

      {/* ========================= */}
      {/* RUSSIAN PROFILES */}
      {/* ========================= */}
      <div className="max-w-7xl mx-auto mt-28">

        <h2 className="text-gold text-3xl font-heading mb-10 text-center">
          Russian Companions
        </h2>

        <p className="text-center text-gray-400 text-sm mb-12 max-w-3xl mx-auto">
          Explore our selection of international Russian companions offering
          refined presence, elegance, and discreet social companionship for
          premium occasions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {russianProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

      </div>

    </section>
  );
}
