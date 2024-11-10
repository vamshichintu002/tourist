import { type FC } from 'react';
import { Search } from 'lucide-react';

const Hero: FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover scale-105 animate-slow-zoom"
        >
          <source
            src="https://cdn.pixabay.com/video/2018/09/23/18386-291585298_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 animate-fade-in"></div>
      </div>
      
      {/* Content with Staggered Animations */}
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 
                      animate-slide-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]
                      hover:scale-105 transition-transform duration-300">
          Discover Your Next Adventure
        </h1>
        
        <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl
                     animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]
                     hover:text-[#FF6B6B] transition-colors duration-300">
          Experience unforgettable journeys with our curated travel packages and expert guidance
        </p>
        
        {/* Search Box with Enhanced Animations */}
        <div className="w-full max-w-3xl animate-slide-up opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-2 
                         hover:shadow-2xl transition-all duration-500 
                         hover:bg-white/95">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 group">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="w-full px-4 py-3 text-gray-700 rounded-md 
                             bg-white transition-all duration-300
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             group-hover:shadow-md"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 
                                scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left"></div>
                </div>
              </div>
              
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md 
                       hover:bg-blue-600 flex items-center justify-center 
                       transition-all duration-300 hover:shadow-lg
                       transform hover:-translate-y-1 active:translate-y-0
                       hover:scale-105">
                <Search className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-semibold">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;