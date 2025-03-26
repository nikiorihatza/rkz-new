import { DownloadCategory, DownloadItem } from './types';

export const DOWNLOADS_CONFIG = {
  title: "Download-Center",
  subtitle: "Technische Dokumentationen, Broschüren und Zertifikate",
} as const;

export const DOWNLOAD_CATEGORIES: DownloadCategory[] = [
  {
    id: "technical",
    title: "Technische Dokumentation",
    description: "Detaillierte technische Unterlagen und Montageanleitungen"
  },
  {
    id: "certificates",
    title: "Zertifikate",
    description: "Qualitätszertifikate und Prüfberichte"
  },
  {
    id: "brochures",
    title: "Broschüren",
    description: "Produktbroschüren und Informationsmaterial"
  }
];

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "tech-doc-1",
    title: "Montageanleitung Dammbalken",
    description: "Schritt-für-Schritt-Anleitung zur Installation von Dammbalken-Systemen",
    fileType: "PDF",
    fileSize: "2.4 MB",
    category: "technical",
    downloadUrl: "#",
    icon: "FileText"
  },
  {
    id: "cert-1",
    title: "IFT Rosenheim Zertifikat",
    description: "Qualitätszertifikat für Hochwasserschutzsysteme",
    fileType: "PDF",
    fileSize: "1.8 MB",
    category: "certificates",
    downloadUrl: "#",
    icon: "Award"
  },
  {
    id: "brochure-1",
    title: "Produktkatalog 2024",
    description: "Umfassende Übersicht unserer Hochwasserschutzlösungen",
    fileType: "PDF",
    fileSize: "5.2 MB",
    category: "brochures",
    downloadUrl: "#",
    icon: "BookOpen"
  }
];