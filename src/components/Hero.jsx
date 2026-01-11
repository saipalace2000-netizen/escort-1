import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png"
            alt="Elite Event Service"
            className="h-16"
          />
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-6xl text-gold leading-tight">
          Elite Event Service
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg text-gray-300">
          Private · Discreet · Premium
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
          Experience refined companionship curated for exclusive events,
          private engagements, and premium moments.
          Available strictly by appointment only.
        </p>

        {/* Key Bullet Points */}
        <ul className="mt-8 space-y-3 text-gray-300 text-sm md:text-base">
          <li>✔ High-Profile Models & Elite Companions</li>
          <li>✔ College-Going Companions (18+ Only)</li>
          <li>✔ International & Russian Companions</li>
          <li>✔ Private Parties, Events & Bachelor Celebrations</li>
          <li>✔ Indoor • Outdoor • Hotel Call-Out Available</li>
          <li>✔ Exclusively Available in Pune City</li>
        </ul>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/profiles"
            className="inline-block px-8 py-3 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition"
          >
            View Profiles
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-gray-500">
          18+ Only · All interactions are consensual and discreet
        </p>

      </div>
    </section>
  );
}
