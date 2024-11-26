import React from 'react';
import { Facebook, Instagram, Globe, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About City View Tourism</h3>
            <p className="text-gray-400">
              We're dedicated to creating unforgettable travel experiences and helping you explore the UAE's most amazing destinations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+971565254474" className="hover:text-white transition-colors">
                  +971 565 254 474
                </a>
              </li>
              <li>
                <a 
                  href="https://cityviewtourism.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <span>cityviewtourism.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cityviewtourism/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/cityview__tourism?igsh=MWhqbjk5YXlmdWdiMA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} City View Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}