
import React from 'react';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
import { Link } from 'react-router-dom';
import { DANCE_STYLES } from '../constants';
import SectionHeading from '../components/SectionHeading';

const DanceStyles: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Dance Styles" 
          subtitle="From classical elegance to street energy, find the style that resonates with you." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DANCE_STYLES.map((style, idx) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={style.image} 
                  alt={style.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-gold text-black font-bold text-xs py-1 px-3 rounded-full">
                  POPULAR
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{style.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {style.description}
                </p>
                <Link 
                  to="/contact"
                  className="block text-center w-full py-4 bg-white/5 hover:bg-gold hover:text-black text-white font-bold rounded-xl transition-all"
                >
                  Join Class
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Style Inquiry */}
        <div className="mt-24 p-12 bg-royal-blue/20 rounded-[40px] border border-royal-blue/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Don't see your style?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            We are always expanding our horizons. Contact us for custom workshops or to request new styles in our curriculum.
          </p>
          <Link 
            to="/contact"
            className="bg-gold text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform inline-block"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DanceStyles;
