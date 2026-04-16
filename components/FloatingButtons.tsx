
import React from 'react';
import { PhoneCall } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
import { WHATSAPP_NUMBER, PHONES } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-whatsapp-dark transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${PHONES[0]}`}
        className="bg-gold text-black p-4 rounded-full shadow-2xl hover:bg-yellow-500 transition-colors flex items-center justify-center md:hidden"
        aria-label="Call Now"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
