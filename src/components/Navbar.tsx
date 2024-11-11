import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-lg text-gray-600 hover:text-[#00B2FF]">Home</a>
            <a href="#about" className="text-lg text-gray-600 hover:text-[#00B2FF]">About</a>
            <a href="#services" className="text-lg text-gray-600 hover:text-[#00B2FF]">Services</a>
            <a href="#destinations" className="text-lg text-gray-600 hover:text-[#00B2FF]">Destinations</a>
            <a href="#blog" className="text-lg text-gray-600 hover:text-[#00B2FF]">Blog</a>
            <a href="#contact" 
               className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                        text-white px-6 py-3 rounded-md hover:shadow-lg 
                        hover:scale-105 transform transition-all duration-300 text-lg">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#00B2FF] focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Home</a>
            <a href="#about" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">About</a>
            <a href="#services" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Services</a>
            <a href="#destinations" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Destinations</a>
            <a href="#blog" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-lg text-[#00B2FF] font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}