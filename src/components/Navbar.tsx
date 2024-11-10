import React from 'react';
import { Menu, X, Plane } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-[#FF6B6B]" />
            <span className="ml-2 text-xl font-bold text-gray-800">Wanderlust</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#FF6B6B]">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#FF6B6B]">About</a>
            <a href="#services" className="text-gray-600 hover:text-[#FF6B6B]">Services</a>
            <a href="#destinations" className="text-gray-600 hover:text-[#FF6B6B]">Destinations</a>
            <a href="#blog" className="text-gray-600 hover:text-[#FF6B6B]">Blog</a>
            <a href="#contact" className="bg-[#FF6B6B] text-white px-4 py-2 rounded-md hover:bg-[#ff5b5b]">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#FF6B6B] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-[#FF6B6B]">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-[#FF6B6B]">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-[#FF6B6B]">Services</a>
            <a href="#destinations" className="block px-3 py-2 text-gray-600 hover:text-[#FF6B6B]">Destinations</a>
            <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-[#FF6B6B]">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-[#FF6B6B] font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}