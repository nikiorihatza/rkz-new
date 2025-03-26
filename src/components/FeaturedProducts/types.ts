export interface FeaturedProduct {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export interface FeaturedProductsProps {
    title: string;
    subtitle: string;
    products: FeaturedProduct[];
}