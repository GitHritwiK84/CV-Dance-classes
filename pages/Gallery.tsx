
import React, { useState } from 'react';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m, AnimatePresence } from 'framer-motion';
const motion = m as any;
import { Maximize2, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'performance' | 'practice' | 'event'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'performance', label: 'Performances' },
    { id: 'practice', label: 'Practice Sessions' },
    { id: 'event', label: 'Academy Events' },
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="Captured moments of motion, emotion, and dedication." 
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-8 py-2 rounded-full font-bold text-sm tracking-widest transition-all ${filter === cat.id ? 'bg-gold text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt="Gallery Item" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-6 right-6 text-white hover:text-gold" onClick={() => setSelectedImage(null)}>
                <X className="w-10 h-10" />
              </button>
              <motion.img 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage} 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                alt="Selected"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
