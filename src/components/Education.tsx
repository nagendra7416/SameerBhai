import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology (BTech)</h3>
                <p className="text-xl text-blue-600">TKR College of Engineering & Technology</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">2017 – 2021</p>
            <p className="text-gray-700">
              Major: Electronics & Communications Engineering
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-gray-800">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "AWS Certified Developer Associate",
                status: "In Progress",
                inProgress: true
              },
              {
                name: "Microsoft Certified: Azure Developer Associate",
                status: "Completed",
                inProgress: false
              },
              {
                name: "Python Institute Certified Entry-Level Programmer (PCEP)",
                status: "Completed",
                inProgress: false
              },
              {
                name: "ServiceNow Certified System Administrator",
                status: "Completed",
                inProgress: false
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{cert.name}</h4>
                {cert.inProgress ? (
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    In Progress
                  </span>
                ) : (
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    Completed
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;