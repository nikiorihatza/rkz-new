import { Product } from './types';

export const PRODUCTS_CONFIG = {
  title: "Effizient. Innovativ.",
  subtitle: "Mit unseren maßgeschneiderten Lösungen können Sie auch bei Starkregen und Hochwassergefahr beruhigt schlafen!",
} as const;

export const PRODUCT_LIST: Product[] = [
  {
    id: "dammbalken",
    title: "Aluminium-Dammbalken",
    description: "Hochwertige Dammbalken aus Aluminium für zuverlässigen Hochwasserschutz. Leicht zu montieren und extrem robust.",
    imageUrl: "src/img/update_12082022_02.jpg",
    features: [
      "Leichte Aluminium-Konstruktion",
      "Schnelle Montage",
      "Wartungsarm",
      "Höchste Sicherheit"
    ],
    specifications: {
      "Material": "Aluminium EN AW-6060 T66",
      "Maximale Höhe": "3000mm",
      "Dichtungssystem": "EPDM-Dichtungen",
    }
  },
  {
    id: "schutztuer",
    title: "Hochwasser-Schutztüre / -tore",
    description: "Speziell entwickelte Schutztüren für den permanenten Einbau. Bietet optimalen Schutz bei minimalem Wartungsaufwand.",
    imageUrl: "src/img/HWS_Tuere.png",
    features: [
      "Dauerhafter Einbau",
      "Minimaler Wartungsaufwand",
      "Hohe Stabilität",
      "Geprüfte Sicherheit"
    ],
    specifications: {
      "Material": "Edelstahl 1.4571",
      "Maximale Breite": "1500mm",
      "Schutzhöhe": "bis 2500mm",
    }
  },
  {
    id: "schott",
    title: "Kellerfenster",
    description: "Wasserdichte Kellerfenster-Abdeckungen zum Schutz vor eindringendem Wasser bei Starkregen und Hochwasser.",
    imageUrl: "src/img/HWS_Fenster.png",
    features: [
      "Transparente Ausführung",
      "UV-beständig",
      "Einfache Reinigung",
      "Sofort einsatzbereit"
    ],
    specifications: {
      "Material": "Polycarbonat",
      "Lichtdurchlässigkeit": ">85%",
      "Belastbarkeit": "bis 300kg/m²",
    }
  }
];