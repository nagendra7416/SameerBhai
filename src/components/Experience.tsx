import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">System Engineer</h3>
                <p className="text-xl text-blue-600">Infosys</p>
              </div>
            </div>
            <div className="flex items-center mb-6 text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Hybrid | Hyderabad, India</span>
              <span className="mx-4">•</span>
              <span>Jun 2022 – Present</span>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Developed and maintained ServiceNow workflows for enterprise clients, automating IT operations.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Built responsive web interfaces using HTML/CSS for internal tools.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Collaborated on cross-functional teams to deliver projects adhering to Agile SDLC principles.
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Scripted automation tasks in Python and PowerShell, improving system efficiency by 30%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;