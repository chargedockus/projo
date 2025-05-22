import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-2xl">ChargeDock</span>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ChargeDock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;