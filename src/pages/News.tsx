import React from 'react';
import {NewsSection} from '../components/News/NewsSection';
import {NEWS_CONFIG} from '../components/News/config';
import {useData} from '../context/DataContext';

export const News: React.FC = () => {
    const {news} = useData();

    return (
        <NewsSection
            title={NEWS_CONFIG.title}
            subtitle={NEWS_CONFIG.subtitle}
            articles={news}
        />
    );
};