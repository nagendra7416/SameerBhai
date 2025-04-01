import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automated IT Ticketing System",
      description: "Built a Python-based script to auto-resolve ServiceNow tickets, reducing manual effort by 40%.",
      tags: ["Python", "ServiceNow", "Automation"],
      metrics: "40% reduction in manual effort"
    },
    {
      title: "E-Commerce Web Portal",
      description: "Designed a responsive front-end using HTML/CSS for a client-facing application.",
      tags: ["HTML", "CSS", "Responsive Design"],
      metrics: "100% responsive across devices"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-green-600 font-semibold mb-4">
                  <span className="mr-2">📈</span>
                  {project.metrics}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;