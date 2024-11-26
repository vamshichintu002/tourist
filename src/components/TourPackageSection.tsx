import React from 'react';
import TourPackage from './TourPackage';

const TourPackageSection = () => {
  return (
    <section className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4
                        bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                        text-transparent bg-clip-text">
            Our Tour Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated tour packages designed to give you the best experience
            of the UAE's most iconic destinations.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <TourPackage />
        </div>
      </div>
    </section>
  );
};

export default TourPackageSection;
