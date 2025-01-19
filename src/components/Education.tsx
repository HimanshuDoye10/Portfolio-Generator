import React from 'react';
import { Education as EducationType } from '../types/portfolio';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-500/30">
                      {edu.degree.includes('Certification') ? (
                        <Award className="w-6 h-6 text-purple-400" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-purple-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 mb-2 font-medium">{edu.school}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
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