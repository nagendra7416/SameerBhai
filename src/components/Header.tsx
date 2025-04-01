import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Abdul Sameer</h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-4">Software Developer & System Engineer</h2>
            <p className="text-xl text-blue-100 mb-6">Building Scalable Solutions</p>
            <p className="text-lg text-blue-200 mb-8">
              <span className="inline-flex items-center">
                📍 Hyderabad, Telangana, India
              </span>
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/abdulsameer" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:abdul.sameer@example.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a href="#contact" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Hire Me
            </a>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Abdul Sameer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;