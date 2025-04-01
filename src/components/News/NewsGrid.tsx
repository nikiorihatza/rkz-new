import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { News } from './types';

interface NewsGridProps {
    articles: News[];
}

export const NewsGrid: React.FC<NewsGridProps> = ({ articles }) => {
    const navigate = useNavigate();

    const handleArticleClick = (article: News) => {
        navigate(`/news/${article.id}`, { state: { article } });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <NewsCard
                    key={article.id}
                    article={article}
                    onClick={handleArticleClick}
                />
            ))}
        </div>
    );
};