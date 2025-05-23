import React from 'react';
import { BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://s4.ezgif.com/tmp/ezgif-42595fe2b412be.jpg" 
          alt="Cityscape at sunset with skyscrapers" 
          className="w-full h-full object-cover bg-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex items-center justify-center mb-4 space-x-3">
          <BatteryCharging className="text-green-400 animate-pulse animate-float" size={48} />
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 fade-in-up leading-relaxed">
            ChargeDock
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mt-4 mb-8 slide-left-to-right font-modern" style={{ animationDelay: '0.3s' }}>
          Sustainable E-Mobility Charging and Storage Infrastructure
        </p>
        <a 
          href="#problem" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/70 transition-all duration-300 animate-fade-in relative overflow-hidden group animate-pulse-border"
        >
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
      
      {/* Scroll Indicator with Bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow motion-reduce:animate-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Inline Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes slideLeftToRight {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseBorder {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .bg-zoom {
          animation: slowZoom 10s infinite alternate ease-in-out;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        .leading-relaxed {
          line-height: 1.4;
        }

        .slide-left-to-right {
          opacity: 0;
          animation: slideLeftToRight 1.5s ease-out forwards;
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.5);
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-border {
          animation: pulseBorder 2s infinite;
        }

        .font-modern {
          font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-bounce-slow,
          .bg-zoom,
          .fade-in-up,
          .animate-fade-in,
          .slide-left-to-right,
          .animate-float,
          .animate-pulse-border {
            animation: none !important;
            opacity: 1 !important;
            transform: translateX(0) !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;