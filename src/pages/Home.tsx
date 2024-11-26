import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Experience the city of the future with its iconic landmarks, luxury shopping, and desert adventures.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    description: 'Discover the perfect blend of culture and modernity in the UAE\'s magnificent capital.',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    description: 'Explore the cultural heart of the UAE with its museums, heritage sites, and traditional markets.',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=2000&q=80"
          alt="UAE Skyline"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Explore the UAE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              Discover the magic of the United Arab Emirates through its most iconic cities
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {destination.status === 'coming-soon' && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{destination.description}</p>
                
                {destination.status === 'available' ? (
                  <button
                    onClick={() => navigate(`/${destination.id}`)}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore {destination.name}
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-100 text-gray-400 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}