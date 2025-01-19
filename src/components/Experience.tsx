import React from 'react';
import { Experience as ExperienceType } from '../types/portfolio';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-purple-600 mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}