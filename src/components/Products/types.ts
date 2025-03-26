export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  specifications?: {
    [key: string]: string;
  };
}

export interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
}