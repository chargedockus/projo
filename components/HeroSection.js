import React from 'react';
import { BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
          alt="Solar panels under blue sky" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <BatteryCharging className="text-green-400" size={56} />
          <h1 className="text-4xl md:text-6xl font-bold text-white ml-2">HELLO</h1>
        </div>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mt-4 mb-8">
          Sustainable E-Mobility Charging and Storage Infrastructure
        </p>
        <a 
          href="#problem" 
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;