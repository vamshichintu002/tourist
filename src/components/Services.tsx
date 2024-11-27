import React, { useEffect } from 'react';
import { Car, Hotel, Compass, Plane, Ticket, Passport } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Transportation',
    description: 'Professional transportation services including tour, event, corporate transportation, and chauffeur service.',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Find and book the perfect accommodation for your stay in the UAE.',
  },
  {
    icon: Compass,
    title: 'Tour Packages',
    description: 'Expertly curated tour packages to explore the best of UAE.',
  },
  {
    icon: Passport,
    title: 'UAE Visa',
    description: 'Hassle-free visa processing services for your UAE visit.',
  },
  {
    icon: Ticket,
    title: 'UAE Attractions Ticket',
    description: 'Book tickets for the most popular attractions across UAE.',
  },
  {
    icon: Plane,
    title: 'Worldwide Visa',
    description: 'Comprehensive visa services for destinations worldwide.',
  },
];

export default function Services() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#services') {
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Check hash on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 
                        transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#00B2FF]/10 via-[#00E0C6]/10 to-[#4ADE80]/10 
                            rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#00B2FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Transportation Services Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-8 text-center">Transportation Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Tour Transportation', 'Event Transportation', 'Corporate Transportation', 'Chauffeur Service'].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Car className="w-8 h-8 text-[#00B2FF] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}