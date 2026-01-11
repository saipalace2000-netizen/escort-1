export default function TrustBar() {
  const items = [
    "Verified Profiles",
    "Privacy First",
    "Discreet Services",
    "Professional Conduct",
  ];

  return (
    <section className="py-12 bg-card">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-sm text-gray-300">
        {items.map((item, i) => (
          <div key={i} className="tracking-wide">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
