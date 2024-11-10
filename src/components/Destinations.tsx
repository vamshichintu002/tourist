import React, { useState } from 'react';
import { Headphones, Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Premium Customer Care',
    description: '24/7 support for all your travel needs',
  },
  {
    icon: Users,
    title: 'Success With Teamwork',
    description: 'Expert team collaboration for perfect trips',
  },
  {
    icon: TrendingUp,
    title: 'Trusted Transaction',
    description: 'Secure and reliable booking process',
  },
  {
    icon: DollarSign,
    title: 'Affordable Rates',
    description: 'Competitive prices for all destinations',
  },
];

const destinations = [
  {
    title: 'Dubai',
    activities: '22 activities',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Abu Dhabi',
    activities: '6 activities',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Fujairah',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Ras al Khaimah',
    activities: '3 activities',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Sharjah',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Hatta',
    activities: '4 activities',
    image: 'https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const trendingExcursions = [
  {
    title: 'Abu Dhabi City Tour',
    location: 'Abu Dhabi - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Deep Sea Fishing',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Desert Safari',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Dolphin Show At The Dubai Creek Park',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const adventureActivities = [
  {
    title: 'Deep Sea Fishing',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Desert Safari',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Dubai Safari Park',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Hot Air Balloon',
    location: 'Dubai - United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
];

const ExcursionCard = ({ title, location, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
    <div className="relative h-64 overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <div className="flex items-center text-blue-500 text-sm mb-2">
        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
        <span>{location}</span>
      </div>
      <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2 hover:text-blue-500 transition-colors">{title}</h3>
      <button className="mt-4 text-blue-500 font-semibold flex items-center hover:text-blue-600 transition-colors">
        Learn More
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

export default function Destinations() {
  const [currentTrendingSlide, setCurrentTrendingSlide] = useState(0);
  const [currentAdventureSlide, setCurrentAdventureSlide] = useState(0);

  const slideLeft = (current, setCurrent, maxSlides) => {
    setCurrent(current === 0 ? maxSlides - 1 : current - 1);
  };

  const slideRight = (current, setCurrent, maxSlides) => {
    setCurrent(current === maxSlides - 1 ? 0 : current + 1);
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Book With Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Book With Wanderlust Tourism
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <feature.icon className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-sm opacity-90">{destination.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Excursions Section */}
        <div className="mb-20">
          <h2 className="text-3xl text-center font-bold mb-12">
            <span className="text-blue-500">Trending</span> Excursions
          </h2>
          <div className="relative px-4 lg:px-8">
            <button
              onClick={() => slideLeft(currentTrendingSlide, setCurrentTrendingSlide, trendingExcursions.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTrendingSlide * 100}%)` }}
              >
                {trendingExcursions.map((excursion, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <ExcursionCard {...excursion} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => slideRight(currentTrendingSlide, setCurrentTrendingSlide, trendingExcursions.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {trendingExcursions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrendingSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                    ${index === currentTrendingSlide 
                      ? "bg-blue-500 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Adventure Activities Section */}
        <div className="mb-20">
          <h2 className="text-3xl text-center font-bold mb-12">
            <span className="text-blue-500">Adventure</span> Activities
          </h2>
          <div className="relative px-4 lg:px-8">
            <button
              onClick={() => slideLeft(currentAdventureSlide, setCurrentAdventureSlide, adventureActivities.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentAdventureSlide * 100}%)` }}
              >
                {adventureActivities.map((activity, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <ExcursionCard {...activity} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => slideRight(currentAdventureSlide, setCurrentAdventureSlide, adventureActivities.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {adventureActivities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdventureSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                    ${index === currentAdventureSlide 
                      ? "bg-blue-500 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}