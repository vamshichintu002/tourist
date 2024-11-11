import { type FC } from 'react';

const Newsletter: FC = () => {
  return (
    <section className="relative py-20 animate-fade-in-up">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Dubai Beach"
          className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-end gap-12">
          {/* Newsletter form - Now positioned on the right */}
          <div className="w-full md:w-1/3 bg-white rounded-lg p-8 hover:shadow-2xl transition-all duration-300
                         transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 
                           bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80] 
                           text-transparent bg-clip-text">
                Newsletter
              </h2>
              <p className="text-gray-600">Signup for news and special offers!</p>
            </div>

            <form className="space-y-4">
              <div className="transform transition-transform duration-300 hover:scale-105">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                           focus:ring-2 focus:ring-[#00B2FF] focus:border-transparent
                           hover:border-[#00B2FF] transition-all duration-300"
                  required
                />
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md 
                           focus:ring-2 focus:ring-[#00B2FF] focus:border-transparent
                           hover:border-[#00B2FF] transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00B2FF] via-[#00E0C6] to-[#4ADE80]
                         text-white py-3 rounded-md transition-all duration-300
                         hover:shadow-lg transform hover:-translate-y-1
                         hover:scale-105"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500 text-center mt-4 hover:text-[#00B2FF] transition-colors duration-300">
                You can unsubscribe anytime. For more details, review our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;