import React, { useState } from 'react';
import { Headphones, Users, TrendingUp, DollarSign, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    link: '/dubai'
  },
  {
    title: 'Abu Dhabi',
    activities: '6 activities',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/abu-dhabi'
  },
  {
    title: 'Sharjah',
    activities: '1 activity',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/sharjah'
  }
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

const ExcursionCard = ({ title, location, image, link }) => {
  const content = (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-2 flex items-center text-white">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link to={link} className="block">
      {content}
    </Link>
  ) : (
    content
  );
};

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
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4
                        bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                        text-transparent bg-clip-text">
            Why Book With Cityview Tourism
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#00B2FF]/10 via-[#00E0C6]/10 to-[#4ADE80]/10 rounded-full">
                    <feature.icon className="w-8 h-8 text-[#00B2FF]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 hover:text-[#00B2FF] transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12
                        bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                        text-transparent bg-clip-text">
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <ExcursionCard {...destination} />
              </div>
            ))}
          </div>
        </div>

        {/* Trending Excursions Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold mb-12">
            <span className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                           text-transparent bg-clip-text">Trending</span> Excursions
          </h2>
          <div className="relative px-4 lg:px-8">
            <button
              onClick={() => slideLeft(currentTrendingSlide, setCurrentTrendingSlide, trendingExcursions.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg 
                       hover:text-[#00B2FF] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
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
                      ? "bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] w-8" 
                      : "bg-gray-300 hover:bg-[#00B2FF]"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Adventure Activities Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold mb-12">
            <span className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                           text-transparent bg-clip-text">Adventure</span> Activities
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