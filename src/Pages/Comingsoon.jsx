import React from 'react';
import { Clock } from 'lucide-react';

export default function Comingsoon() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icon */}
        <div className="mb-8 animate-bounce">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full">
            <Clock className="w-12 h-12 text-gray-600" />
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