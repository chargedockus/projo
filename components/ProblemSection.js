import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          The Problem
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left Column — Custom vertical offset */}
          <div className="flex-1 flex justify-start">
            <div className="max-w-xl mx-auto text-center md:text-left mt-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Universities, apartments, and cities are banning the indoor charging and storage 
                of electric scooters and other electric personal assistive mobility devices.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                This gap in infrastructure leaves students, commuters, and delivery workers without a safe, 
                secure place to charge or store their devices.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-center mb-6">
              UL Standards & Certifications Survey of Colleges & Universities
            </h3>

            {/* First Banner - Red Theme */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-red-500 mb-4">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mr-4">65%</div>
                <p className="text-gray-700">
                  Universities cite inadequate charging infrastructure as a key concern
                </p>
              </div>
            </div>

            {/* Second Banner - Orange Theme */}
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-orange-500 mb-4">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mr-4">57%</div>
                <p className="text-gray-700">
                  Universities worry about battery and electrical hazards that result from E-Mobility Devices
                </p>
              </div>
            </div>

            {/* Learn More Link - Black Theme */}
            <div className="flex justify-center md:justify-end mt-2">
              <a 
                href="https://ulse.org/news/supporting-safer-e-mobility-college-campuses"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about supporting safer e-mobility on college campuses"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
