import React from 'react';
import { Menu, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface HeaderProps {
  profile: Profile;
}

export default function Header({ profile }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href={`https://github.com/${profile.contact.github}`} target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href={`https://linkedin.com/in/${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="text-gray-300 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}