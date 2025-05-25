import React, { useEffect, useState } from 'react';
import { BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/854985/854985-sd_640_360_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-2xl sm:max-w-3xl lg:max-w-4xl text-center relative z-10">
        <div className="flex flex-row items-center justify-center mb-4 gap-4">
          <BatteryCharging className="text-green-400 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36" />
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 fade-in-up leading-relaxed pb-2">
            ChargeDock
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-2xl lg:text-4xl text-white mx-auto mt-4 mb-8 font-modern slide-left-to-right whitespace-nowrap">
          Sustainable E-Mobility Charging Infrastructure
        </p>

        <a 
          href="#problem" 
          className="inline-flex items-center px-6 sm:px-8 md:px-11 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/70 transition-all duration-300 animate-pulse-border relative overflow-hidden group"
        >
          <span className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl">Learn More</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes slideLeftToRight {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulseBorder {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }

        .slide-left-to-right {
          animation: slideLeftToRight 1.5s ease-out forwards;
          opacity: 0;
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
          .animate-bounce-slow,
          .fade-in-up,
          .slide-left-to-right,
          .animate-float,
          .animate-pulse-border {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
