
import React from 'react';
// Cast motion to any to bypass TypeScript environment errors where framer-motion props are not recognized on intrinsic elements.
import { motion as m } from 'framer-motion';
const motion = m as any;
// Added missing ChevronRight icon to the imports.
import { Youtube, Play, ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { YOUTUBE_VIDEOS, SOCIAL_LINKS } from '../constants';

const Videos: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Watch Us Dance" 
          subtitle="Latest performances, vlogs, and tutorials from our official YouTube channel." 
        />

        {/* Channel Banner */}
        <div className="bg-royal-blue/20 rounded-[40px] p-8 md:p-12 mb-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-600/20">
              <Youtube className="text-white w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">CV Dance Classes Official</h3>
              <p className="text-gray-400">Join 5,000+ subscribers for weekly dance inspiration.</p>
            </div>
          </div>
          <a 
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full flex items-center gap-3 transition-all transform hover:scale-105"
          >
            SUBSCRIBE NOW <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-900 border border-white/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Thumbnail Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{video.title}</h4>
              <p className="text-gray-500 text-sm">Official Choreography • 2024</p>
            </motion.div>
          ))}
        </div>

        {/* Load More Callout */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Discover 100+ more videos on our channel</p>
          <a 
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-bold flex items-center gap-2 justify-center hover:underline"
          >
            Visit Channel <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
