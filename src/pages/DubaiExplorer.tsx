import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import { categories } from '../data/attractions';
import { ChevronLeft, Search } from 'lucide-react';
import { CategoryType } from '../types/attraction';

function DubaiExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>(categories);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredCategories(categories);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = categories.map(category => ({
      ...category,
      attractions: category.attractions.filter(attraction =>
        attraction.name.toLowerCase().includes(searchTermLower) ||
        attraction.description.toLowerCase().includes(searchTermLower) ||
        attraction.category.toLowerCase().includes(searchTermLower) ||
        attraction.location.toLowerCase().includes(searchTermLower) ||
        attraction.highlights.some(highlight => 
          highlight.toLowerCase().includes(searchTermLower)
        )
      )
    })).filter(category => category.attractions.length > 0);

    setFilteredCategories(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Link 
        to="/" 
        className="fixed top-24 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back to Cities</span>
      </Link>
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero city="dubai" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="relative" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search attractions, categories, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <main className="py-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No attractions found matching your search criteria
          </div>
        )}
      </main>
    </div>
  );
}

export default DubaiExplorer;