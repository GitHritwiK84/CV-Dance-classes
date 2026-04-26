import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, MapPin, Phone, Crown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Logo from "./Logo";
import {
  BUSINESS_NAME,
  LOCATION,
  PHONES,
  EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
} from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dhanbad's premier dance academy dedicated to nurturing talent and
              spreading the joy of movement since 2015. Join our family today.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-whatsapp hover:text-white p-3 rounded-full transition-all text-white group"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.instagramAcademy}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-gold hover:text-black p-3 rounded-full transition-all text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-gold hover:text-black p-3 rounded-full transition-all text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>

            <ul className="space-y-4">
              {[
                { name: "About", path: "/about" },
                { name: "Dance Styles", path: "/dance-styles" },
                { name: "Special Programs", path: "/special-programs" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="h-px w-3 bg-gold/50" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-royal-blue p-3 rounded-lg h-fit">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Location</p>
                  <p className="text-gray-400 text-sm">{LOCATION}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-royal-blue p-3 rounded-lg h-fit">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p className="text-gray-400 text-sm">
                    {PHONES.map((p, idx) => (
                      <React.Fragment key={p}>
                        {p}
                        {idx === 0 ? <br /> : ""}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-royal-blue p-3 rounded-lg h-fit">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p className="text-gray-400 text-sm break-all">{EMAIL}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed with Passion by{" "}
            <span className="text-gold">Hritwik Deo </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
