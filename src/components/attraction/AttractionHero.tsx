import React from 'react';
import { Clock, MapPin, Tag, ChevronLeft, Share2, Heart } from 'lucide-react';
import { AttractionType } from '../../types/attraction';
import { attractionImages } from '../../utils/images';

interface AttractionHeroProps {
  attraction: AttractionType;
}

export default function AttractionHero({ attraction }: AttractionHeroProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const imageUrl = attractionImages[attraction.id] || attractionImages.default;

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <img
        src={`${imageUrl}?auto=format&fit=crop&w=2000&q=80`}
        alt={attraction.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex gap-4">
          <button 
            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={`w-6 h-6 transition-colors ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} 
            />
          </button>
          <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
            <Share2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
              {attraction.category}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
              Top Rated
            </span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-white">{attraction.name}</h1>
          
          <div className="flex flex-wrap gap-6 items-center text-white/90">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {attraction.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {attraction.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}