import { FeaturedProduct } from './types';

export const FEATURED_PRODUCTS_CONFIG = {
    title: "Unsere Top-Produkte",
    subtitle: "Entdecken Sie unsere meistverkauften Hochwasserschutz-Lösungen",
} as const;

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
    {
        id: "dammbalken",
        title: "Aluminium-Dammbalken",
        description: "Leichte und robuste Dammbalken aus hochwertigem Aluminium für zuverlässigen Hochwasserschutz.",
        imageUrl: "src/img/update_12082022_02.jpg",
        link: "/products#dammbalken"
    },
    {
        id: "schutztuer",
        title: "Hochwasser-Schutztüre",
        description: "Maßgefertigte Schutztüren für dauerhaften Einbau und optimalen Schutz bei minimalem Wartungsaufwand.",
        imageUrl: "src/img/HWS_Tuere.png",
        link: "/products#schutztuer"
    },
    {
        id: "kellerfenster",
        title: "Kellerfenster-Schutz",
        description: "Innovative Kellerfenster-Systeme zum Schutz vor eindringendem Wasser bei Starkregen und Hochwasser.",
        imageUrl: "src/img/HWS_Fenster.png",
        link: "/products#schott"
    }
];