import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Crown } from "lucide-react";
import Logo from "./Logo";
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m, AnimatePresence } from "framer-motion";
const motion = m as any;
import { BUSINESS_NAME, PHONES } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Dance Styles", path: "/special-programs" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-2 border-b border-white/10" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold ${location.pathname === link.path ? "text-gold" : "text-gray-300"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONES[0]}`}
            className="hidden md:flex items-center gap-2 bg-royal-blue hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
          >
            <Phone className="w-4 h-4" />
            CALL NOW
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-semibold uppercase tracking-widest ${location.pathname === link.path ? "text-gold" : "text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${PHONES[0]}`}
                className="flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-md font-bold text-sm tracking-widest mt-4"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
