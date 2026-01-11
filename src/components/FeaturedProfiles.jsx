const profiles = [
  { name: "Sofia", tag: "Poised • Elegant • Conversational" },
  { name: "Ava", tag: "Charming • Confident • Refined" },
  { name: "Mia", tag: "Graceful • Intelligent • Warm" },
];

export default function FeaturedProfiles() {
  return (
    <section className="py-20 px-6">
      <h2 className="font-heading text-3xl text-center mb-12">
        Featured Companions
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {profiles.map((p, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-6 hover:scale-105 transition"
          >
            <div className="h-48 bg-gradient-to-br from-gold/20 to-transparent rounded-lg mb-4" />
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className="text-gray-400 text-sm mt-2">{p.tag}</p>
            <button className="mt-4 text-gold text-sm">
              View Profile →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
