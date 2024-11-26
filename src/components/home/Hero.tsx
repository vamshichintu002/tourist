import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { searchAttractions } from '../../utils/search';
import SearchResults from './SearchResults';
import { AttractionType } from '../../types/attraction';

interface HeroProps {
  city: 'dubai' | 'abu-dhabi' | 'sharjah';
  title: string;
  description: string;
  backgroundImage: string;
}

const cityBackgrounds = {
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80',
  'abu-dhabi': 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=2000&q=80',
  'sharjah': 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=2000&q=80'
};

const cityDescriptions = {
  dubai: 'Discover iconic landmarks, luxury experiences, and desert adventures in the city of the future',
  'abu-dhabi': 'Experience the perfect blend of tradition and modernity in the UAE\'s cultural heart',
  'sharjah': 'Explore the cultural capital of the UAE through its museums, heritage sites, and traditional markets'
};

export default function Hero({ city }: { city: 'dubai' | 'abu-dhabi' | 'sharjah' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<AttractionType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchAttractions(searchQuery, city);
    setSearchResults(results);
    setIsSearching(true);
  };

  const cityName = city === 'abu-dhabi' ? 'Abu Dhabi' : city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={cityBackgrounds[city]}
          alt={`${cityName} Skyline`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">
            Discover {cityName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center mb-12 max-w-2xl">
            {cityDescriptions[city]}
          </p>
          
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="bg-white rounded-full shadow-xl p-2 flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${cityName} attractions, activities, or experiences...`}
                className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-500 bg-transparent outline-none"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSearching && (
        <SearchResults 
          results={searchResults} 
          onClose={() => {
            setIsSearching(false);
            setSearchResults([]);
            setSearchQuery('');
          }} 
        />
      )}
    </>
  );
}