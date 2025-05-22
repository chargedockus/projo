import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Solution</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              ChargeDock provides secure, sustainable, and scalable charging and storage solutions for E-Mobility devices, addressing the challenges faced by universities and cities.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Innovative Charging Infrastructure</h3>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mr-4">100%</div>
                <p className="text-gray-700">
                  Secure and monitored charging stations to prevent theft and hazards
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mr-4">80%</div>
                <p className="text-gray-700">
                  Reduction in fire risks with certified charging solutions
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;