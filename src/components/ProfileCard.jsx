import { Link } from "react-router-dom";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="p-6 text-center">
        <h3 className="text-gold text-xl font-heading">
          {profile.name}, {profile.age}
        </h3>

        <p className="opacity-70 mt-1">{profile.city}</p>

        <Link
          to={`/profiles/${profile.id}`}
          className="inline-block mt-5 px-6 py-2 bg-gold text-bg rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
