import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyHire = () => {
  const reasons = [
    {
      title: "Hybrid Expertise",
      description: "Balances backend scripting (Python/PowerShell) with frontend development (HTML/CSS)."
    },
    {
      title: "Certification-Driven",
      description: "Actively pursuing cloud and DevOps certifications to stay industry-relevant."
    },
    {
      title: "Client-First Mindset",
      description: "Open to freelance, contract, or full-time roles for software engineering opportunities."
    }
  ];

  return (
    <section id="why-hire" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Hire Abdul?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;