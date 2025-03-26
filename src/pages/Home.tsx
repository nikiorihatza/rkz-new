import React from 'react';
import { HeroSection } from '../components/Hero';
import { AboutUsSection } from '../components/AboutUs';
import { FeaturesSection } from '../components/Features';
import { TestimonialSection } from '../components/Testimonials';
import { CTASection } from '../components/CTA';
import { FeaturedProductsSection } from '../components/FeaturedProducts';
import { TESTIMONIALS_CONFIG, TESTIMONIAL_LIST } from '../components/Testimonials/config';
import { FEATURES_CONFIG, FEATURES_LIST } from '../components/Features/config';
import { FEATURED_PRODUCTS_CONFIG, FEATURED_PRODUCTS } from '../components/FeaturedProducts/config';

export const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProductsSection
                title={FEATURED_PRODUCTS_CONFIG.title}
                subtitle={FEATURED_PRODUCTS_CONFIG.subtitle}
                products={FEATURED_PRODUCTS}
            />
            <AboutUsSection />
            <FeaturesSection
                title={FEATURES_CONFIG.title}
                subtitle={FEATURES_CONFIG.subtitle}
                features={FEATURES_LIST}
            />
            <TestimonialSection
                title={TESTIMONIALS_CONFIG.title}
                subtitle={TESTIMONIALS_CONFIG.subtitle}
                testimonials={TESTIMONIAL_LIST}
            />
            <CTASection />
        </div>
    );
};