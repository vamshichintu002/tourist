import React from 'react';
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
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Ras al Khaimah',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Sharjah',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Hatta',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
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
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <div className="flex items-center text-gray-500 text-sm mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{location}</span>
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
  </div>
);

export default function Destinations() {
  const [currentTrendingSlide, setCurrentTrendingSlide] = React.useState(0);
  const [currentAdventureSlide, setCurrentAdventureSlide] = React.useState(0);

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
                  <div className="p-3 bg-coral-100 rounded-full">
                    <feature.icon className="w-8 h-8 text-coral-500" />
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
        <div className="mb-16">
          <h2 className="text-3xl text-center text-coral-500 font-bold mb-12">
            Trending Excursions
          </h2>
          <div className="relative">
            <button
              onClick={() => slideLeft(currentTrendingSlide, setCurrentTrendingSlide, trendingExcursions.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTrendingSlide * 100}%)` }}
              >
                {trendingExcursions.map((excursion, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <ExcursionCard {...excursion} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => slideRight(currentTrendingSlide, setCurrentTrendingSlide, trendingExcursions.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Adventure Activities Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-coral-500 font-bold mb-12">
            Adventure Activities
          </h2>
          <div className="relative">
            <button
              onClick={() => slideLeft(currentAdventureSlide, setCurrentAdventureSlide, adventureActivities.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentAdventureSlide * 100}%)` }}
              >
                {adventureActivities.map((activity, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <ExcursionCard {...activity} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => slideRight(currentAdventureSlide, setCurrentAdventureSlide, adventureActivities.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}