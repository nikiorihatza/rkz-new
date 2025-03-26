import React from 'react';
import {Product} from './types';
import {ProductCard} from './ProductCard';

interface ProductGridProps {
    products: Product[];
    onProductClick?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({products, onProductClick}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={onProductClick}
                />
            ))}
        </div>
    );
};