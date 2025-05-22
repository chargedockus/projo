import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function Home() {
  // Update document title
  useEffect(() => {
    document.title = 'ChargeDock - Sustainable E-Mobility Charging';

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth',
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CtaSection />
      <Footer />
    </div>
  );
}