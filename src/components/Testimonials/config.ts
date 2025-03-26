import { Testimonial } from './types';

export const TESTIMONIALS_CONFIG = {
  title: "Das sagen unsere Kunden",
  subtitle: "Erfahren Sie, was unsere Kunden über unsere Produkte und Services sagen",
} as const;

export const TESTIMONIAL_LIST: Testimonial[] = [
  {
    id: "roland-kern",
    quote: "Super Firma, von der Beratung bis zum Abschluss des Projekts.",
    author: "Person 1",
    role: "Kunde",
    company: "private",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: "tobias-zahorsky",
    quote: "Toller Service!",
    author: "Person 2",
    role: "Kunde",
    company: "private",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: "maria-schmidt",
    quote: "Die Qualität und Zuverlässigkeit der Firma hat uns überzeugt.",
    author: "Person 3",
    role: "Partner",
    company: "PREFA",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  }
];