import React from 'react';
import { Testimonial } from './types';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};