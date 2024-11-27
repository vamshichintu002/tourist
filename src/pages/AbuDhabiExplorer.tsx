import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import { categories } from '../data/abu-dhabi-attractions';
import { ChevronLeft } from 'lucide-react';

function AbuDhabiExplorer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

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
        <Hero city="abu-dhabi" />
      </div>
      <main className="py-12">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} city="abu-dhabi" />
        ))}
      </main>
    </div>
  );
}

export default AbuDhabiExplorer;