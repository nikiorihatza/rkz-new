export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}