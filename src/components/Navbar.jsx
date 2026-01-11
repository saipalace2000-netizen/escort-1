import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-gold transition ${
      location.pathname === path ? "text-gold" : "text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Elite Event Service"
            className="h-9 md:h-12 w-auto"
          />

          {/* Hide brand text on mobile */}
          <span className="hidden md:block text-gold text-lg font-heading tracking-wide">
            Elite Event Service
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-5 md:gap-8 text-xs md:text-sm uppercase tracking-wide">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>

          <Link to="/profiles" className={linkClass("/profiles")}>
            Profiles
          </Link>

          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* Book Now CTA */}
          <a
            href="https://wa.me/917977209085"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 md:ml-2 px-4 md:px-5 py-2 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
