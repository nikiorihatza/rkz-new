export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface FeaturesProps {
    title: string;
    subtitle: string;
    features: Feature[];
}