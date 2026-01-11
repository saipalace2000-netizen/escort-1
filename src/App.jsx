import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import ProfileDetails from "./pages/ProfileDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-bg text-white min-h-screen flex flex-col">
        <Navbar />

        <div className="pt-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profiles/:id" element={<ProfileDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
