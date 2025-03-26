export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApplicationFormData extends ContactFormData {
  resume: File | null;
}