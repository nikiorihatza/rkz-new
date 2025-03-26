import { TeamMember } from './types';

export const TEAM_CONFIG = {
  title: "Unser Team",
  subtitle: "Erfahrene Experten für Ihre Sicherheit",
} as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "roland-kern",
    name: "Roland Kern",
    role: "Geschäftsführer",
    bio: "Mit über 20 Jahren Erfahrung in der Metallverarbeitung und Hochwasserschutzsystemen leitet Roland Kern das Unternehmen mit Weitblick und Innovation. Seine Vision von erstklassiger Qualität und Kundenzufriedenheit prägt die Unternehmenskultur der RKZ GmbH.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    expertise: [
      "Strategische Unternehmensführung",
      "Produktentwicklung",
      "Qualitätsmanagement",
      "Internationale Geschäftsbeziehungen"
    ],
    contact: {
      email: "r.kern@rkz-metall.de",
      linkedin: "https://linkedin.com/in/roland-kern"
    }
  },
  {
    id: "tobias-zahorsky",
    name: "Tobias Zahorsky",
    role: "Verkaufsleiter",
    bio: "Tobias Zahorsky bringt seine umfassende Expertise im technischen Vertrieb und seine Leidenschaft für innovative Lösungen in das Unternehmen ein. Er steht für kompetente Beratung und maßgeschneiderte Kundenlösungen.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    expertise: [
      "Technische Beratung",
      "Vertriebssteuerung",
      "Kundenbetreuung",
      "Projektmanagement"
    ],
    contact: {
      email: "t.zahorsky@rkz-metall.de",
      linkedin: "https://linkedin.com/in/tobias-zahorsky"
    }
  }
];