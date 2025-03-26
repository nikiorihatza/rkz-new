export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  url: string;
  category?: string;
}

export interface GalleryConfig {
  title: string;
  subtitle: string;
}