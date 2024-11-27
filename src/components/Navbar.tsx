import React from 'react';
import { Menu, X, Phone, Instagram, Facebook, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showContactPopup, setShowContactPopup] = React.useState(false);

  const toggleContactPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContactPopup(!showContactPopup);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="#home" className="text-lg text-gray-600 hover:text-[#00B2FF]">Home</Link>
            <Link to="#services" className="text-lg text-gray-600 hover:text-[#00B2FF]">Services</Link>
            <Link to="#destinations" className="text-lg text-gray-600 hover:text-[#00B2FF]">Destinations</Link>
            <Link to="#tour-packages" className="text-lg text-gray-600 hover:text-[#00B2FF]">Tour Packages</Link>
            <button
              onClick={toggleContactPopup}
              className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                       text-white px-6 py-3 rounded-md hover:shadow-lg 
                       hover:scale-105 transform transition-all duration-300 text-lg"
            >
              Contact Us
            </button>
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
            <Link to="#home" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Home</Link>
            <Link to="#services" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Services</Link>
            <Link to="#destinations" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Destinations</Link>
            <Link to="#tour-packages" className="block px-3 py-2 text-lg text-gray-600 hover:text-[#00B2FF]">Tour Packages</Link>
            <button
              onClick={toggleContactPopup}
              className="w-full text-left px-3 py-2 text-lg text-[#00B2FF] font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative animate-fadeIn">
            <button
              onClick={toggleContactPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] text-transparent bg-clip-text">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <a 
                href="tel:+971565254474" 
                className="flex items-center space-x-4 text-gray-600 hover:text-[#00B2FF] transition-colors p-3 rounded-lg hover:bg-gray-50"
              >
                <Phone className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">+971 565 254 474</span>
              </a>
              
              <a 
                href="https://www.instagram.com/cityview__tourism?igshid=MWhqbjk5YXlmdWdiMA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-[#E1306C] transition-colors p-3 rounded-lg hover:bg-gray-50"
              >
                <Instagram className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">@cityview__tourism</span>
              </a>
              
              <a 
                href="https://www.facebook.com/cityviewtourism/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-[#1877F2] transition-colors p-3 rounded-lg hover:bg-gray-50"
              >
                <Facebook className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">cityviewtourism</span>
              </a>
              
              <a 
                href="https://cityviewtourism.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-600 hover:text-[#00B2FF] transition-colors p-3 rounded-lg hover:bg-gray-50"
              >
                <Globe className="h-6 w-6 flex-shrink-0" />
                <span className="font-medium">cityviewtourism.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}