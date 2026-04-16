
export interface DanceStyle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SpecialProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'performance' | 'practice' | 'event';
}

export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
}
