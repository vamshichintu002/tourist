import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { AttractionType } from '../../types/attraction';
import { attractionImages as dubaiImages } from '../../utils/images';
import { attractionImages as sharjahImages } from '../../utils/sharjah-images';
import { attractionImages as abuDhabiImages } from '../../utils/abu-dhabi-images';

interface AttractionCardProps {
  attraction: AttractionType;
  city?: 'dubai' | 'sharjah' | 'abu-dhabi';
}

export default function AttractionCard({ attraction, city = 'dubai' }: AttractionCardProps) {
  const getImages = () => {
    switch (city) {
      case 'abu-dhabi':
        return abuDhabiImages;
      case 'sharjah':
        return sharjahImages;
      default:
        return dubaiImages;
    }
  };
  
  const images = getImages();
  const imageUrl = images[attraction.id] || images.default;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {attraction.price && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-900">From {attraction.price}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {attraction.location}
          </span>
          {attraction.duration && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {attraction.duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}