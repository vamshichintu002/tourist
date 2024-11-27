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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between h-14 md:h-16 lg:h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-10 w-auto md:h-12 lg:h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link to="#home" className="text-base lg:text-lg text-gray-600 hover:text-[#00B2FF] transition-colors duration-300">Home</Link>
            <Link to="#services" className="text-base lg:text-lg text-gray-600 hover:text-[#00B2FF] transition-colors duration-300">Services</Link>
            <Link 
              to="#destinations" 
              className="text-base lg:text-lg text-gray-600 hover:text-[#00B2FF] transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('destinations');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.location.hash = 'destinations';
                }
              }}
            >Destinations</Link>
            <Link to="#tour-packages" className="text-base lg:text-lg text-gray-600 hover:text-[#00B2FF] transition-colors duration-300">Tour Packages</Link>
            <button
              onClick={toggleContactPopup}
              className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                       text-white px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-md hover:shadow-lg 
                       hover:scale-105 transform transition-all duration-300 text-sm lg:text-base"
            >
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#00B2FF] focus:outline-none p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="#home" 
              className="block py-2 text-base text-gray-600 hover:text-[#00B2FF] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >Home</Link>
            <Link to="#services" 
              className="block py-2 text-base text-gray-600 hover:text-[#00B2FF] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >Services</Link>
            <Link 
              to="#destinations" 
              className="block py-2 text-base text-gray-600 hover:text-[#00B2FF] transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const element = document.getElementById('destinations');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.location.hash = 'destinations';
                }
              }}
            >Destinations</Link>
            <Link to="#tour-packages" 
              className="block py-2 text-base text-gray-600 hover:text-[#00B2FF] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >Tour Packages</Link>
            <button
              onClick={(e) => {
                toggleContactPopup(e);
                setIsOpen(false);
              }}
              className="w-full text-left py-2 text-base text-[#00B2FF] font-medium hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 lg:p-8 max-w-[95%] w-full sm:max-w-md mx-auto relative animate-fadeIn">
            <button
              onClick={toggleContactPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] text-transparent bg-clip-text">
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