import React from 'react';
import { Compass, Hotel, Plane, Shield } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Get the best deals on flights worldwide with our extensive network of airlines.',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Book luxurious accommodations that suit your style and budget.',
  },
  {
    icon: Compass,
    title: 'Tour Packages',
    description: 'Experience carefully curated tour packages for unforgettable adventures.',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Travel with peace of mind with our comprehensive insurance coverage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive travel solutions to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 
                        hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[#FFF3F3] rounded-full flex items-center justify-center mb-4
                            hover:rotate-12 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-[#FF6B6B]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 