import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          The Problem
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left Column */}
          <div className="md:w-1/2 text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Electric Personal Assistive Mobility Devices (EPAMDs) like e-scooters are rapidly
              becoming a preferred mode of transportation on university campuses and in cities and
              communities worldwide.
            </p>
            <p>
              Infrastructure needed to support personal EPAMD ownership has not kept pace with
              adoption, creating a gap and a need for deployable E-Mobility infrastructure.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-center">
             UL Standards &amp; Certifications<br className="hidden md:block" /> Survey of Colleges &amp; Universities
            </h3>

            <div className="space-y-4 w-full max-w-md">
              {/* Stat Card 1 */}
              <div className="flex items-start bg-gray-50 p-4 rounded-md border-l-4 border-red-500">
                <div className="text-red-500 text-xl font-bold mr-4">65%</div>
                <p className="text-sm text-gray-700">
                  Universities cite inadequate charging infrastructure as a key concern
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="flex items-start bg-gray-50 p-4 rounded-md border-l-4 border-orange-400">
                <div className="text-orange-500 text-xl font-bold mr-4">57%</div>
                <p className="text-sm text-gray-700">
                  Universities worry about battery and electrical hazards that result from E-Mobility Devices
                </p>
              </div>
            </div>

            {/* Learn More */}
            <div className="mt-4 text-right w-full max-w-md">
              <a
                href="https://ulse.org/insight/news-supporting-safer-e-mobility-college-campuses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
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
