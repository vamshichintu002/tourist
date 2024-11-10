import { type FC } from 'react';

const Newsletter: FC = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Dubai Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Image and couple */}
          <div className="w-full md:w-2/3">
            {/* You can add another image or content here if needed */}
          </div>

          {/* Right side - Newsletter form */}
          <div className="w-full md:w-1/3 bg-white rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Newsletter</h2>
              <p className="text-gray-600">Signup for news and special offers!</p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B6B] text-white py-3 rounded-md hover:bg-[#ff5b5b] transition-colors duration-200"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
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