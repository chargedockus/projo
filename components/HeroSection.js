import React, { useEffect, useState } from 'react';
import { BatteryCharging } from 'lucide-react';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40">
      {/* ─── Top-right Navigation ─── */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-6">
        <a
          href="#problem"
          className="text-white text-sm sm:text-base md:text-lg no-underline hover:text-gray-300 transition font-medium"
        >
          Learn More
        </a>
        <button
          onClick={() => setShowContact(true)}
          className="text-white text-sm sm:text-base md:text-lg font-medium hover:text-gray-300 transition bg-transparent p-0 m-0 border-none"
        >
          Contact Us
        </button>
      </div>

      {/* ─── Background Video ─── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5659664/5659664-sd_640_360_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/fallback.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      {/* ─── Hero Content ─── */}
      <div className="container mx-auto px-4 max-w-full sm:max-w-3xl lg:max-w-5xl xl:max-w-4xl text-center relative z-10 overflow-visible">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6 lg:mb-10">
          <BatteryCharging className="text-green-400 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       font-bold tracking-tight
                       text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                       leading-[1.1] pt-4 sm:pt-6 break-words mb-4 lg:mb-8"
          >
            ChargeDock
          </h1>
        </div>

        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                     font-semibold text-white
                     mx-auto mb-10"
        >
          Sustainable E-Mobility Charging Infrastructure
        </p>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-label="Scroll down">
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

      {/* ─── Contact Form Modal ─── */}
      {showContact && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <BatteryCharging className="text-green-500 w-5 h-5" />
              Contact ChargeDock
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;
                window.location.href = `mailto:chargedockus@gmail.com?subject=Message from ${name}&body=From: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
              }}
            >
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="4"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
