import React from 'react';
import { CategoryType } from '../../types/attraction';
import AttractionCard from './AttractionCard';

interface CategorySectionProps {
  category: CategoryType;
  city?: 'dubai' | 'sharjah' | 'abu-dhabi';
}

export default function CategorySection({ category, city = 'dubai' }: CategorySectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8" data-aos="fade-up">
          <span className="text-blue-600" dangerouslySetInnerHTML={{ __html: category.icon }} />
          <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
          {category.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.attractions.map((attraction, index) => (
            <div 
              key={attraction.id}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <AttractionCard attraction={attraction} city={city} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}