"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "Go31007465573",
    date: "2023.10.10",
    rating: 5,
    text: "Amazing Experience 🥰 🥰 Amazing trip provide by Bedouin trips.All the excursions was well-organized and...",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  },
  {
    name: "Aliya O",
    date: "2023.10.15",
    rating: 5,
    text: "Unforgettable moments Tour was a fantastic experience. Our guide was informative, taking us to...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  },
  {
    name: "Justin B",
    date: "2023.10.12",
    rating: 5,
    text: "Perfect Dubai City Tour I recently booked the Dubai City Tour from Bedouin Trips, and I have to admit that they...",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
  }
]

const partners = [
  { 
    name: "Dubai Dolphinarium",
    logo: "https://www.dubaidolphinarium.ae/images/logo.png"
  },
  { 
    name: "Dubai Parks",
    logo: "https://www.dubaiparksandresorts.com/images/logo.png"
  },
  { 
    name: "Ferrari World",
    logo: "https://ferrariworldabudhabi.com/en/logo.png"
  },
  { 
    name: "Heli Dubai",
    logo: "https://www.helidubai.com/images/logo.png"
  },
  { 
    name: "Jumeirah Hotels",
    logo: "https://www.jumeirah.com/images/logo.png"
  }
]

export default function Component() {
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0)
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Excellent</h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-[#00B67A] flex items-center justify-center">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="border rounded-lg p-6">
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
                          <Star key={i} className="w-4 h-4 text-[#00B67A] fill-[#00B67A]" />
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <h2 className="text-3xl font-bold text-center text-[#FF6B6B] mb-12">Our Partners</h2>
        <div className="relative">
          <button
            onClick={() => setCurrentPartnerSlide((prev) => (prev - 1 + partners.length) % partners.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentPartnerSlide((prev) => (prev + 1) % partners.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPartnerSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 
                  ${index === currentPartnerSlide ? "bg-[#FF6B6B]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}