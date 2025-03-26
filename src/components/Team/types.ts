export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  contact?: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
  expertise?: string[];
}