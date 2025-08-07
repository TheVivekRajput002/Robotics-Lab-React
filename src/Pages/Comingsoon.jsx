import React from 'react';

export default function Comingsoon() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icon */}
        <div className="mb-8 animate-bounce">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full">
            <svg className='w-12 h-12 text-gray-600' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1025"><path fill="currentColor" d="M512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-199t109-163.5T313 41T512 0t199 41t163.5 109.5t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5zm0-896q-104 0-192.5 51t-140 139.5t-51.5 193t51.5 193t140 140T512 897t192.5-51.5t140-140t51.5-193t-51.5-193t-140-139.5T512 129zm192 224L573 530q-5 20-22 33.5T512 577q-21 0-38-13t-23-32L256 289v-32h32l225 181l159-117h32v32z"/></svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Something amazing is on the way. We're working hard to bring you an incredible experience.
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}