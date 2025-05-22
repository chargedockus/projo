import React from 'react';
import { BatteryCharging } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BatteryCharging className="text-green-500" size={32} />
          <span className="font-bold text-white text-xl md:text-2xl drop-shadow-md">ChargeDock</span>
        </div>
        <div>
          <a 
            href="#contact" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;