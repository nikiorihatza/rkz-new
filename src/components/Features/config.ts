import { Feature } from './types';

export const FEATURES_CONFIG = {
    title: "Unsere Lösungen im Überblick",
    subtitle: "Innovative Technologien für maximalen Hochwasserschutz",
} as const;

export const FEATURES_LIST: Feature[] = [
    {
        id: "customization",
        title: "Maßgeschneiderte Lösungen",
        description: "Jedes System wird individuell an Ihre spezifischen Anforderungen und örtlichen Gegebenheiten angepasst.",
        icon: "Settings"
    },
    {
        id: "quality",
        title: "Höchste Qualität",
        description: "Wir verwenden ausschließlich zertifizierte Materialien und garantieren geprüfte Sicherheit nach aktuellen Standards.",
        icon: "Shield"
    },
    {
        id: "service",
        title: "24/7 Support",
        description: "Unser Expertenteam steht Ihnen rund um die Uhr zur Verfügung - auch in Notfällen sind wir sofort zur Stelle.",
        icon: "Clock"
    },
    {
        id: "installation",
        title: "Professionelle Montage",
        description: "Die fachgerechte Installation durch unser geschultes Personal garantiert optimalen Schutz und lange Haltbarkeit.",
        icon: "Wrench"
    },
    {
        id: "warranty",
        title: "Garantie",
        description: "Umfassende Garantieleistungen und regelmäßige Wartungsservices sichern die Langlebigkeit Ihrer Investition.",
        icon: "CheckCircle"
    },
    {
        id: "consulting",
        title: "Expertenberatung",
        description: "Profitieren Sie von unserer langjährigen Erfahrung mit kompetenter Beratung von der Planung bis zur Umsetzung.",
        icon: "Users"
    }
];