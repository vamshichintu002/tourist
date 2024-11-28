import React from 'react';
import {
  Plane,
  Building2,
  User,
  Car,
  FileCheck,
  Building,
  DollarSign,
  Headphones,
  Users2,
  Recycle,
  Star,
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Reservations",
    description:
      "We give accessible choices for our clients to book suitable flight with over 700 major airlines and 150 low-cost carriers.",
  },
  {
    icon: Building2,
    title: "Hotels & Apartment reservations",
    description:
      "More than 250,000 properties are available in our global portfolio, encompassing a wide range of geographies, needs, and preferences.",
  },
  {
    icon: User,
    title: "Best Tour Packages",
    description:
      "We can give the greatest packages that will ensure our clients' happiness based on our thorough understanding of our customers, large inventory, and quality measures.",
  },
  {
    icon: FileCheck,
    title: "UAE Visa Services",
    description:
      "We provide comprehensive visa services for UAE, ensuring a smooth and hassle-free process for our clients.",
  },
  {
    icon: Car,
    title: "Transportation Services",
    description:
      "Professional transportation services including tour transportation, event transportation, corporate transportation, and chauffeur services.",
  },
  {
    icon: Building,
    title: "UAE Attractions",
    description:
      "Book tickets for the most popular attractions across UAE, from theme parks to cultural sites and desert adventures.",
  },
];

const bottomServices = [
  {
    icon: Building,
    title: "Hotel Bookings",
    subtitle: "Instant Confirmation",
  },
  {
    icon: User,
    title: "Tour Activities",
    subtitle: "Competitive Price",
  },
  {
    icon: FileCheck,
    title: "Visa",
    subtitle: "Quick Process",
  },
  {
    icon: Car,
    title: "Airport Transfer",
    subtitle: "24/7 Service to all UAE airports",
  },
]

const AdditionalServices = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in-down
                      bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                      text-transparent bg-clip-text" data-aos="fade-up">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 hover:transform hover:-translate-y-2 
                        transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00B2FF]/10 via-[#00E0C6]/10 to-[#4ADE80]/10 
                            flex items-center justify-center transform hover:rotate-12 transition-all duration-300 
                            hover:scale-110">
                <service.icon className="w-8 h-8 text-[#00B2FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-[#00B2FF] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                        rounded-lg p-8 text-center flex flex-col items-center space-y-4 
                        hover:shadow-xl hover:scale-105 transition-all duration-300
                        animate-fade-in-up cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={(index + services.length) * 100}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center 
                            transform group-hover:rotate-12 transition-all duration-300">
                <service.icon className="w-8 h-8 text-[#00B2FF]" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold text-lg group-hover:scale-105 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90 mt-1 group-hover:opacity-100 transition-opacity duration-300">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalServices;