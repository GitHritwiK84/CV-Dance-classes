
import React from 'react';
import { 
  Music, 
  Users, 
  PartyPopper, 
  School, 
  Home, 
  Mic2,
  Instagram,
  Youtube,
  Phone,
  MessageCircle
} from 'lucide-react';
import { DanceStyle, SpecialProgram, GalleryItem, YouTubeVideo } from './types';

export const BUSINESS_NAME = "CV Dance Classes";
export const CHOREOGRAPHER = "Chandu Vishwa";
export const LOCATION = "Harina Market, Dhanbad, Jharkhand, India – 828306";
export const PHONES = ["9631293505", "7903620192"];
export const WHATSAPP_NUMBER = "919631293505";
export const EMAIL = "chandankumarvishwakarma111@gmail.com";

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@cvdanceclass5195",
  instagramAcademy: "https://www.instagram.com/cv_dance_class?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagramChoreographer: "https://www.instagram.com/cv_house6"
};

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: '1',
    title: 'Hip Hop',
    description: 'Dynamic and high-energy urban dance style focusing on rhythm and flow.',
    image: "/hiphop.jpg"
  },
  {
    id: '2',
    title: 'Bollywood',
    description: 'A vibrant blend of Indian classical, folk, and modern Western dance styles.',
    image: "/bolly.jpg"
  },
  {
    id: '3',
    title: 'House',
    description: 'A social dance primarily danced to house music, focusing on complex footwork.',
    image: "/house.jpg"
  },
  {
    id: '4',
    title: 'Popping & Locking',
    description: 'Classic funk styles based on the technique of quickly contracting and relaxing muscles.',
    image: "/poplok.jpg"
  },
  {
    id: '5',
    title: 'Contemporary',
    description: 'Fluid and expressive dance combining elements of several genres including modern, jazz, and ballet.',
    image: "/contemm.jpg"
  },
  {
    id: '6',
    title: 'B-Boying',
    description: 'Athletic style of street dance consisting of top rock, down rock, and power moves.',
    image: "/b-boy.jpg"
  },
  {
    id: '7',
    title: 'Salsa',
    description: 'Passionate Latin dance characterized by intricate footwork and rhythmic patterns.',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
  }
];

export const SPECIAL_PROGRAMS: SpecialProgram[] = [
  { id: 'sp1', title: 'Zumba & Aerobics', description: 'Fun fitness routines to stay in shape.', icon: 'Music' },
  { id: 'sp2', title: 'Ladies Sangeet', description: 'Custom choreography for family celebrations.', icon: 'Users' },
  { id: 'sp3', title: 'Wedding Dance', description: 'Make your big day unforgettable with a professional performance.', icon: 'PartyPopper' },
  { id: 'sp4', title: 'School Events', description: 'Coaching and choreography for annual days and competitions.', icon: 'School' },
  { id: 'sp5', title: 'Home Tuition', description: 'Private personalized classes at your doorstep.', icon: 'Home' },
  { id: 'sp6', title: 'Event Performances', description: 'Professional dance troupes for corporate and private events.', icon: 'Mic2' },
];

export const GALLERY_IMAGES: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `g${i}`,
  url: `https://picsum.photos/seed/dance${i}/800/600`,
  category: i % 3 === 0 ? 'performance' : i % 3 === 1 ? 'practice' : 'event'
}));

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  { id: 'v1', title: 'Hip Hop Fusion', videoId: 'dQw4w9WgXcQ' }, // Placeholders
  { id: 'v2', title: 'Bollywood Blast', videoId: 'dQw4w9WgXcQ' },
  { id: 'v3', title: 'Wedding Special', videoId: 'dQw4w9WgXcQ' },
  { id: 'v4', title: 'Contemporary Flow', videoId: 'dQw4w9WgXcQ' },
  { id: 'v5', title: 'B-Boying Battle', videoId: 'dQw4w9WgXcQ' },
  { id: 'v6', title: 'Zumba Fitness', videoId: 'dQw4w9WgXcQ' },
];
