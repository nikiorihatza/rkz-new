import { News } from './types';

export const NEWS_CONFIG = {
    title: "Aktuelle Neuigkeiten",
    subtitle: "Bleiben Sie informiert über die neuesten Entwicklungen und Innovationen im Hochwasserschutz",
} as const;

export const NEWS_LIST: News[] = [
    {
        id: 1,
        title: "Neuer Standort in Prinzersdorf",
        description: "Ab Juli 2025 finden Sie uns in unserem neuen, modernen Firmengebäude in Prinzersdorf. Die erweiterten Räumlichkeiten ermöglichen es uns, unseren Service für Sie weiter zu verbessern und unsere Produktionskapazitäten zu erhöhen.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        date: "30. März 2025",
        author: "Roland Kern",
        category: "Unternehmen",
        readTime: "3 min"
    },
    {
        id: 2,
        title: "Innovative Hochwasserschutzsysteme für 2025",
        description: "Entdecken Sie unsere neuesten Entwicklungen im Bereich Hochwasserschutz. Mit verbesserten Materialien und optimierter Technik bieten wir noch mehr Sicherheit für Ihr Zuhause.",
        image: "https://images.unsplash.com/photo-1574103188526-4faec0d4810f?auto=format&fit=crop&q=80",
        date: "28. März 2025",
        author: "Tobias Zahorsky",
        category: "Produkte",
        readTime: "5 min"
    },
    {
        id: 3,
        title: "Auszeichnung für Kundenzufriedenheit",
        description: "RKZ Metall Design wurde für herausragenden Kundenservice und höchste Kundenzufriedenheit ausgezeichnet. Wir bedanken uns bei unseren Kunden für ihr Vertrauen.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
        date: "25. März 2025",
        author: "Marketing Team",
        category: "Auszeichnungen",
        readTime: "4 min"
    },
    {
        id: 4,
        title: "Neue Partnerschaft mit PREFA",
        description: "Wir freuen uns, unsere strategische Partnerschaft mit PREFA bekannt zu geben. Diese Zusammenarbeit ermöglicht es uns, unser Produktportfolio zu erweitern und Ihnen noch bessere Lösungen anzubieten.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        date: "20. März 2025",
        author: "Roland Kern",
        category: "Partnerschaften",
        readTime: "4 min"
    },
    {
        id: 5,
        title: "Erfolgreiche Zertifizierung nach ISO 9001",
        description: "RKZ Metall Design hat erfolgreich die ISO 9001:2025 Zertifizierung erneuert. Dies unterstreicht unser Engagement für höchste Qualitätsstandards in allen Bereichen.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        date: "15. März 2025",
        author: "Qualitätsmanagement",
        category: "Zertifizierungen",
        readTime: "3 min"
    }
];