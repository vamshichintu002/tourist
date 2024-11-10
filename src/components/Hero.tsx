import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2018/09/23/18386-291585298_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
          Experience unforgettable journeys with our curated travel packages and expert guidance
        </p>
        
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full px-4 py-3 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] bg-white"
              />
            </div>
            <button className="bg-[#FF6B6B] text-white px-8 py-3 rounded-md hover:bg-[#ff5b5b] flex items-center justify-center transition-colors duration-300">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}