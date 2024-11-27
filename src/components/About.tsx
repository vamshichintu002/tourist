import React from 'react';
import { Shield, Leaf, RefreshCcw } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] text-transparent bg-clip-text">
            CITY VIEW TOURISM LLC
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            IS ONE OF THE MOST PROFESSIONAL TOUR OPERATORS BASED IN DUBAI.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">WHO WE ARE</h3>
          <p className="text-lg text-gray-600 mb-6">
            City View Tourism LLC is one of the most professional tour operators based in Dubai. We bring with us a wealth of experience and our expert tourist guides possess extensive socio-cultural knowledge of the region.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our company boasts a team of well-trained, experienced and licensed tour guides who are proficient in detailing about cities ultramodern architecture and cultural and historical features.
          </p>
          <p className="text-lg text-gray-600">
            With a fleet of modern vehicles and a team of experienced drivers we are committed to providing our clients with safe, reliable, and cost-effective transportation solutions. Our services include airport transfers, corporate transfers, city tours and event transportation. Whether you are a tourist, a business traveler or an event organizer we have the right transportation solution for you.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">EFFECTIVE VISION OF THE TEAM</h3>
          <p className="text-lg text-gray-600 mb-6">
            At City View Tourism, we envision a world where every traveller's journey is transformed into an unforgettable experience filled with awe and wonder. Our vision is to become the foremost travel company in Dubai, setting new standards of excellence in the industry, and inspiring travellers from across the globe to explore the cityscapes of Dubai.
          </p>
          <p className="text-xl font-semibold text-gray-800 text-center mt-8">
            WE BELIEVE THAT TRAVEL CAN BE A GENUINE FORCE FOR GOOD
          </p>
        </div>

        {/* Strengths & Values */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">STRENGTHS & VALUES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">INTEGRITY</h4>
              <p className="text-gray-600">
                We uphold the highest standards of integrity, transparent pricing, honest communication, and commitment to delivering what we promise build trust with our clients and partners alike.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">RESPONSIBLE TOURISM</h4>
              <p className="text-gray-600">
                We are dedicated to promoting sustainable and responsible tourism. Our itineraries are designed to minimize environmental impact, support local communities, and foster cultural understanding.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <RefreshCcw className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">CONTINUOUS IMPROVEMENT</h4>
              <p className="text-gray-600">
                The world is ever-changing, and so are the expectations of clients. We embrace a culture of continuous improvement, always seeking feedback, staying updated with industry trends, and refining our services to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
