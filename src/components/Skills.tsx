import React from 'react';
import { Code2, Terminal, GitBranch, Cloud, Database, Layout } from 'lucide-react';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="mr-2">✓</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Core Competencies",
      skills: [
        "Full-Stack Development ✅",
        "IT Automation & Scripting ✅",
        "SDLC & Agile Methodologies",
        "Cloud & DevOps Basics"
      ]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Languages",
      skills: [
        "HTML/CSS ✅",
        "Python ✅",
        "PowerShell",
        "JavaScript"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: [
        "ServiceNow ✅",
        "REST APIs",
        "Git",
        "Jira"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 text-blue-600">
                {category.icon}
              </div>
              <SkillCategory title={category.title} skills={category.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;