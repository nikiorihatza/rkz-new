export interface News {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
}

export interface NewsSectionProps {
    title: string;
    subtitle: string;
    articles: News[];
}