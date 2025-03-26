export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  imageUrl?: string;
}

export interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}