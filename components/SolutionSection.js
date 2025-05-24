import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Mission
        </h2>

        <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
            ChargeDock aims to accelerate the adoption of sustainable 
            transportation practices by providing safe & secure electric mobility infrastructure.
            </p>

            <a 
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300"
            >
              Stay Connected →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
