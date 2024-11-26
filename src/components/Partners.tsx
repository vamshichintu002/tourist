"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "Priya Sharma",
    date: "2024.10.10",
    rating: 5,
    text: "Amazing Experience! 🥰 The Dubai desert safari was absolutely fantastic. The team took care of everything from pickup to drop-off. Highly recommend their services...",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  },
  {
    name: "Rajesh Patel",
    date: "2023.10.15",
    rating: 5,
    text: "Unforgettable Dubai experience! Our guide Hamad was very knowledgeable and friendly. The Burj Khalifa tour and Dubai Mall visit were perfectly organized...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  },
  {
    name: "Ananya Mehta",
    date: "2024.10.12",
    rating: 5,
    text: "Perfect Dubai City Tour! The whole experience was magical. From the Dubai Frame to the Palm Jumeirah, everything was well-planned. The team went above and beyond...",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  }
]

const partners = [
  { 
    name: "First Line Partners",
    logo: "/1st line partner.jpg"
  },
  { 
    name: "Second Line Partners",
    logo: "/2nd line.jpg"
  }
]

export default function Component() {
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0)
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-bold mb-2 hover:text-[#00B2FF] transition-colors duration-300">
              Excellent
            </h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                           flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <p className="text-sm">Based on 35 reviews</p>
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              className="h-8 mt-2"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setCurrentReviewSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md
                       hover:text-[#00B2FF] transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="border rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#00B2FF] fill-[#00B2FF]" />
                        ))}
                      </div>
                      <p className="text-sm">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentReviewSlide((prev) => (prev + 1) % reviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md
                       hover:text-[#00B2FF] transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-down
                      bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                      text-transparent bg-clip-text">
          Our Partners
        </h2>
        <div className="relative animate-fade-in-up delay-200">
          <button
            onClick={() => setCurrentPartnerSlide((prev) => (prev - 1 + partners.length) % partners.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md
                     hover:text-[#00B2FF] transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 flex items-center justify-center px-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500
                             hover:scale-110 transform"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentPartnerSlide((prev) => (prev + 1) % partners.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md
                     hover:text-[#00B2FF] transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPartnerSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                  ${index === currentPartnerSlide 
                    ? "bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] w-8" 
                    : "bg-gray-300 hover:bg-[#00B2FF]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}