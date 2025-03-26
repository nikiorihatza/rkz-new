export interface DownloadCategory {
  id: string;
  title: string;
  description: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  category: string;
  downloadUrl: string;
  icon: string;
}

export interface DownloadSectionProps {
  title: string;
  subtitle: string;
  categories: DownloadCategory[];
  items: DownloadItem[];
}