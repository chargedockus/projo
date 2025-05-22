import React from 'react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Development Brief</h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          Enter your email to join our Development Brief and receive updates on ChargeDock's progress.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe 
            src="https://tally.so/r/wdRLND" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            title="ChargeDock Development Brief Signup"
            className="mx-auto"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;