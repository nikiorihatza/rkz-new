import React from 'react';
import { ProductSection } from '../components/Products';
import { PRODUCTS_CONFIG, PRODUCT_LIST } from '../components/Products/config';

export const Products: React.FC = () => {
  return (
    <div>
      <ProductSection
        title={PRODUCTS_CONFIG.title}
        subtitle={PRODUCTS_CONFIG.subtitle}
        products={PRODUCT_LIST}
      />
    </div>
  );
};