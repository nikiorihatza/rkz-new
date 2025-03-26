import { SocialLink, FooterSection } from './types';

export const FOOTER_CONFIG = {
  companyName: "RKZ Metall Design GmbH",
  currentYear: new Date().getFullYear(),
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100057438280676",
    icon: "Facebook"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/company/rkz-metall",
    icon: "Linkedin"
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/rkz.hochwasserschutz/",
    icon: "Instagram"
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:office@rkz-design.gmbh",
    icon: "Mail"
  }
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { id: "products", label: "Produkte", url: "/products" },
      { id: "gallery", label: "Fotogalerie", url: "/gallery" },
      { id: "contact", label: "Kontakt", url: "/contact" }
    ]
  },
  {
    title: "Kontakt",
    links: [
      { id: "contact", label: "Kontaktieren Sie uns", url: "/contact" },
      { id: "support", label: "Support", url: "/support" },
      { id: "locations", label: "Standorte", url: "/company#standorte" }
    ]
  },
  {
    title: "Rechtliches",
    links: [
      { id: "terms", label: "AGB", url: "/terms" },
      { id: "privacy", label: "Datenschutz", url: "/privacy" },
      { id: "imprint", label: "Impressum", url: "/imprint" }
    ]
  }
];