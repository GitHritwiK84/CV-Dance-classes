
import React, { useState } from 'react';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Clock } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SectionHeading from '../components/SectionHeading';
import { LOCATION, PHONES, EMAIL, SOCIAL_LINKS, WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have questions? We're here to help you start your dance journey." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-royal-blue p-4 rounded-2xl h-fit">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Our Studio</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {LOCATION}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-royal-blue p-4 rounded-2xl h-fit">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
                    {PHONES.map(phone => (
                      <p key={phone} className="text-gray-400 text-lg">{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-royal-blue p-4 rounded-2xl h-fit">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Studio Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 7:00 AM - 9:00 PM</p>
                    <p className="text-gray-400">Sunday: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Connect with us</h4>
                <div className="flex gap-4">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-whatsapp hover:text-white transition-all group">
                    <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href={SOCIAL_LINKS.instagramAcademy} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-gold hover:text-black transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-gold hover:text-black transition-all">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Embed Placeholder - Real Google Map would use an iframe or SDK */}
            <div className="w-full h-[300px] rounded-[40px] overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.393450918732!2d86.1969299!3d23.717142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4174829367981%3A0x889895692080f089!2sHarina%2C%20Jharkhand%20828306!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-royal-blue p-8 md:p-12 rounded-[40px] shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/70 mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-white/70 mb-2 font-medium">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gold hover:bg-yellow-500 text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 text-lg"
              >
                SEND INQUIRY <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="mt-8 text-white/50 text-sm text-center">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
