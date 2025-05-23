import React from 'react';
import { BatteryCharging } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          
          <span className="font-bold text-white text-xl md:text-2xl drop-shadow-md"></span>
        </div>
        <div>
          <a 
            href="#contact" 
            
          >
            
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;