import React, { useEffect, useState } from 'react';
import { BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* ─── Background (unchanged) ─── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/855005/855005-sd_640_360_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      {/* ─── Content ─── */}
      <div
        className="container mx-auto px-4
                   max-w-full sm:max-w-3xl lg:max-w-5xl xl:max-w-4xl
                   text-center relative z-10"
      >
        {/* icon + word-mark */}
        <div className="flex items-center justify-center gap-3 mb-5">
          {/* ⬆︎ made icon bigger on base */}
          <BatteryCharging className="text-green-400 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
          {/* ⬆︎ headline larger on base, then steps up */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                         font-bold tracking-tight
                         text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                         fade-in-up leading-tight pb-2">
            ChargeDock
          </h1>
        </div>

        {/* tag-line */}
        <p className="text-base sm:text-lg md:text-2xl lg:text-4xl
                      font-semibold text-white
                      mx-auto mt-4 mb-10
                      slide-left-to-right
                      whitespace-normal sm:whitespace-nowrap">
          Sustainable&nbsp;E-Mobility&nbsp;Charging&nbsp;Infrastructure
        </p>

        {/* button – slightly wider on phones so it feels substantial */}
        <a
          href="#problem"
          className="inline-flex items-center
                     px-6 sm:px-8 md:px-11
                     py-3 sm:py-4 md:py-5
                     bg-gradient-to-r from-green-500 to-blue-500 text-white
                     rounded-lg font-medium
                     transition-transform duration-300
                     hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-green-400/40
                     fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Learn&nbsp;More
        </a>
      </div>

      {/* ─── scroll indicator ─── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow"
        aria-label="Scroll down"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14m0 0 7-7m-7 7-7-7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ─── animations ─── */}
      <style>{`
        @keyframes fadeInUp   { from {opacity:0; transform:translateY(20px)}
                                to   {opacity:1; transform:translateY(0)} }
        @keyframes slideLeftToRight { from {opacity:0; transform:translateX(-100%)}
                                      to   {opacity:1; transform:translateX(0)} }
        @keyframes floatSlow  { 0%,100% {transform:translateY(0)}
                                50%      {transform:translateY(-6px)} }

        .fade-in-up          { animation:fadeInUp 1s ease-out forwards }
        .slide-left-to-right { animation:slideLeftToRight 1.5s ease-out forwards; opacity:0 }
        .animate-float-slow  { animation:floatSlow 4s ease-in-out infinite }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,
          .slide-left-to-right,
          .animate-float-slow {
            animation:none!important;
            opacity:1!important;
            transform:none!important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
