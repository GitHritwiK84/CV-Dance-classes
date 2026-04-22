import React from "react";
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from "framer-motion";
const motion = m as any;

import { Link } from "react-router-dom";

import {
  Music,
  Users,
  PartyPopper,
  School,
  Home,
  Mic2,
  CalendarCheck,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { SPECIAL_PROGRAMS } from "../constants";

const iconMap: Record<string, any> = {
  Music,
  Users,
  PartyPopper,
  School,
  Home,
  Mic2,
};

const SpecialPrograms: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Special Programs"
          subtitle="Beyond the studio: customized dance services for every occasion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIAL_PROGRAMS.map((program, idx) => {
            const Icon = iconMap[program.icon];

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 hover:bg-royal-blue/10 p-10 rounded-[32px] border border-white/5 hover:border-royal-blue/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                  <Icon className="text-gold w-8 h-8 group-hover:text-black" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  {program.description}
                </p>

                {/* Navigate to Contact Page */}
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-gold font-bold group-hover:underline"
                >
                  Book Session <CalendarCheck className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner: Wedding Dance */}
        <div className="mt-24 bg-gradient-to-r from-gold to-yellow-600 rounded-[40px] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="text-black text-4xl font-black mb-6 uppercase">
                Make Your Wedding Magical
              </h3>

              <p className="text-black/80 text-xl mb-10 leading-relaxed">
                We specialize in Ladies Sangeet and Bride/Groom entries. From
                classic romantic tracks to high-energy Bollywood mashups, we
                choreograph performances that leave your guests spellbound.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 h-80 lg:h-auto">
              <img
                src="/programs.png"
                className="w-full h-full object-cover"
                alt="Wedding Dance"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPrograms;
