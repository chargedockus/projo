import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Problem</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Universities and cities are banning indoor EPAMD charging due to fire and theft risks. 
              Riders are left with no secure or sustainable place to charge.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">UL Standards & Certifications Survey of Colleges & Universities</h3>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mr-4">65%</div>
                <p className="text-gray-700">
                  Universities cite inadequate charging infrastructure as a key concern
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mr-4">57%</div>
                <p className="text-gray-700">
                  Universities worry about battery and electrical hazards that result from E-Mobility Devices
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <a 
                href="https://ulse.org/news/supporting-safer-e-mobility-college-campuses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300"
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