import React from 'react';
import { BatteryCharging } from 'lucide-react'; // Optional icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <BatteryCharging className="text-green-400 w-6 h-6" />
            <span className="font-semibold text-xl">ChargeDock</span>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} ChargeDock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
