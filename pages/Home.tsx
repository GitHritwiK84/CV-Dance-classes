
import React from 'react';
import { Link } from 'react-router-dom';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
// Added missing Instagram icon to the imports.
import { ChevronRight, Youtube, Phone, Play, Instagram } from 'lucide-react';
import { DANCE_STYLES, CHOREOGRAPHER, PHONES, SOCIAL_LINKS } from '../constants';
import SectionHeading from '../components/SectionHeading';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero Background - Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="bg.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
              CV <span className="text-gold">Dance</span> Classes
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-300 mb-10 max-w-3xl mx-auto">
              Where <span className="text-gold font-bold">Passion</span> Meets <span className="text-gold font-bold">Performance</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gold/20"
              >
                Join Now
              </Link>
              <a 
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Youtube className="w-5 h-5 text-red-500" />
                YouTube
              </a>
              <a 
                href={SOCIAL_LINKS.instagramAcademy}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
                Instagram
              </a>
              <a 
                href={`tel:${PHONES[0]}`}
                className="bg-royal-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all md:hidden flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Style Pill */}
        <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-30 pointer-events-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-4xl md:text-6xl font-black text-white/10 uppercase"
          >
            HIP HOP • BOLLYWOOD • HOUSE • CONTEMPORARY • SALSA • POPPING • B-BOYING • HIP HOP • BOLLYWOOD • HOUSE • CONTEMPORARY • SALSA • POPPING • B-BOYING
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-royal-blue/20 rounded-full blur-3xl" />
              <img 
                src="image5.webp" 
                alt="Dance Movement" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl z-20 hidden md:block">
                <p className="text-black text-4xl font-bold">10+</p>
                <p className="text-black text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-4">Discover Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">More Than Just a Dance Academy</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Founded by <span className="text-white font-bold">Chandu Vishwa</span>, CV Dance Classes has evolved into a creative sanctuary for aspiring dancers in Dhanbad. We believe that every movement tells a story, and we're here to help you write yours.
              </p>
              <ul className="space-y-4 mb-10">
                {['Certified Professional Instructors', 'Modern Dance Studio Equipment', 'Performance Opportunities'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-gold/20 p-1 rounded-full text-gold">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 group text-gold font-bold text-lg hover:underline underline-offset-8"
              >
                Learn More About Us
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Styles Cards Preview */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Dance Styles" 
            subtitle="Explore our diverse range of dance disciplines designed for every skill level." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DANCE_STYLES.slice(0, 3).map((style, idx) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl h-[400px]"
              >
                <img 
                  src={style.image} 
                  alt={style.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-bold text-white mb-2">{style.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {style.description}
                  </p>
                  <Link 
                    to="/styles"
                    className="inline-block bg-white text-black font-bold px-6 py-2 rounded-full text-sm group-hover:bg-gold transition-colors"
                  >
                    Explore Style
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              to="/styles" 
              className="bg-royal-blue text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-all inline-block shadow-lg"
            >
              View All Styles
            </Link>
          </div>
        </div>
      </section>

      {/* Choreographer Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-royal-blue/30 to-black p-8 md:p-16 rounded-[40px] border border-white/10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <img 
                  src="chore.webp" 
                  alt={CHOREOGRAPHER} 
                  className="w-full h-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Meet the Maestro</span>
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">{CHOREOGRAPHER}</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-8 italic">
                "Dance is the hidden language of the soul. My mission is to empower every student to find their own rhythm and express their unique identity through movement."
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={SOCIAL_LINKS.instagramChoreographer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-bold transition-all border border-white/10"
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  Follow Chandu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-blue">
          <img 
            src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20"
            alt="CTA Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-blue/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Unleash Your Inner Dancer?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Classes are filling up fast! Book your spot today and become part of Dhanbad's most energetic dance community.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact"
              className="bg-gold text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
