
import React from 'react';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
import { Trophy, Target, Lightbulb, UserCheck, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { CHOREOGRAPHER } from '../constants';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Trained Students', value: '2500+' },
    { label: 'Dance Styles', value: '15+' },
    { label: 'Awards Won', value: '50+' },
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Legacy" 
          subtitle="A journey of thousand steps that started with a single beat." 
        />

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/legacy.png" 
              className="rounded-3xl shadow-2xl border border-white/10"
              alt="Dance Class Studio"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Welcome to CV Dance Classes</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Established in 2015 by visionary choreographer <span className="text-gold font-bold">{CHOREOGRAPHER}</span>, CV Dance Classes has grown from a small local group into one of Jharkhand's most respected dance institutions.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Located in the heart of Harina Market, Dhanbad, we provide a vibrant space where children, teenagers, and adults can explore their physical potential through various dance forms. Our studio is not just a place to learn steps; it's a place to build confidence and character.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-3xl font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-royal-blue/20 p-10 rounded-3xl border border-white/10"
          >
            <Target className="text-gold w-12 h-12 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-gray-400 leading-relaxed">
              To provide accessible, high-quality dance education that inspires creative expression, promotes physical fitness, and fosters a lifelong love for the performing arts in our community.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-royal-blue/20 p-10 rounded-3xl border border-white/10"
          >
            <Lightbulb className="text-gold w-12 h-12 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
            <p className="text-gray-400 leading-relaxed">
              To be the leading center for artistic innovation in Eastern India, nurturing the next generation of world-class choreographers and performers who lead with passion and discipline.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gold text-black p-12 rounded-[40px] text-center">
          <h3 className="text-4xl font-black mb-12 uppercase">Why Choose CV Dance Classes?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Individual Attention',
              'Safe & Inclusive Environment',
              'Advanced Facilities',
              'Flexible Batch Timings'
            ].map((point) => (
              <div key={point} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold">
                  {point.charAt(0)}
                </div>
                <p className="font-bold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
