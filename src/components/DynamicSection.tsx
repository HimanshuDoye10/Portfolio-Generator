import React from 'react';
import { Briefcase, GraduationCap, Code, Wrench, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { capitalizeFirstLetter } from '../utils/helpers';
import AnimatedCard from './AnimatedCard';

interface DynamicSectionProps {
  sectionKey: string;
  data: any;
}

export default function DynamicSection({ sectionKey, data }: DynamicSectionProps) {
  const sectionIcons: { [key: string]: React.ReactNode } = {
    experience: <Briefcase className="w-6 h-6 text-purple-400" />,
    education: <GraduationCap className="w-6 h-6 text-purple-400" />,
    skills: <Code className="w-6 h-6 text-purple-400" />,
    projects: <Wrench className="w-6 h-6 text-purple-400" />,
  };

  const renderSkillItem = (item: any, index: number) => (
    <AnimatedCard delay={index}>
      <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
        <motion.h3 
          className="text-xl font-semibold mb-4 text-purple-400"
          whileHover={{ x: 5 }}
        >
          {item.category}
        </motion.h3>
        <div className="flex flex-wrap gap-2">
          {item.items.map((skill: string, idx: number) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
              className="px-3 py-1 bg-gray-900/80 rounded-full text-sm text-gray-300 border border-gray-700 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );

  const renderExperienceItem = (item: any, index: number) => (
    <AnimatedCard delay={index}>
      <div className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-500/30">
            {sectionIcons[sectionKey]}
          </div>
        </motion.div>
        <div className="flex-grow">
          <motion.h3 
            className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            {item.title}
          </motion.h3>
          <p className="text-purple-400 mb-2">{item.company}</p>
          <p className="text-gray-400 text-sm mb-4">{item.period}</p>
          <p className="text-gray-300 mb-4">{item.description}</p>
          {item.highlights && (
            <div className="mb-4">
              <h4 className="text-purple-400 mb-2 font-medium">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.highlights.map((highlight: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-gray-300"
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
          {item.technologies && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech: string, idx: number) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  className="px-3 py-1 bg-gray-900/80 rounded-full text-sm text-gray-300 border border-gray-700 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedCard>
  );

  const renderProjectItem = (item: any, index: number) => (
    <AnimatedCard delay={index}>
      <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
        {item.image && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
        )}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors"
            whileHover={{ x: 5 }}
          >
            {item.title}
          </motion.h3>
          <p className="text-gray-300 mb-4">{item.description}</p>
          {item.stats && (
            <div className="grid grid-cols-3 gap-4 mb-4">
              {Object.entries(item.stats).map(([key, value], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-purple-400 font-bold text-lg">{value}</div>
                  <div className="text-gray-400 text-sm">{capitalizeFirstLetter(key)}</div>
                </motion.div>
              ))}
            </div>
          )}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech: string, idx: number) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  className="px-3 py-1 bg-gray-900/80 rounded-full text-sm text-purple-400 border border-gray-700 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
          {item.link && (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-400 hover:text-purple-300"
              whileHover={{ x: 5 }}
            >
              View Project
            </motion.a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );

  const renderEducationItem = (item: any, index: number) => (
    <AnimatedCard delay={index}>
      <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-500/30">
              {item.degree.includes('Certification') ? (
                <Award className="w-6 h-6 text-purple-400" />
              ) : (
                <GraduationCap className="w-6 h-6 text-purple-400" />
              )}
            </div>
          </motion.div>
          <div className="flex-grow">
            <motion.h3
              className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors"
              whileHover={{ x: 5 }}
            >
              {item.degree}
            </motion.h3>
            <p className="text-purple-400 mb-2">{item.school}</p>
            <div className="flex items-center gap-4 text-sm mb-3">
              <span className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                {item.period}
              </span>
              {item.gpa && (
                <span className="text-gray-300 bg-gray-700/50 px-2 py-1 rounded">
                  GPA: {item.gpa}
                </span>
              )}
            </div>
            {item.courses && (
              <div className="mb-4">
                <h4 className="text-purple-400 mb-2 font-medium">Key Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course: string, idx: number) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-900/80 rounded-full text-sm text-gray-300 border border-gray-700"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
            {item.achievements && (
              <div>
                <h4 className="text-purple-400 mb-2 font-medium">Achievements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.achievements.map((achievement: string, idx: number) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-gray-300"
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );

  function renderItem(item: any, index: number) {
    switch (sectionKey) {
      case 'skills':
        return renderSkillItem(item, index);
      case 'experience':
        return renderExperienceItem(item, index);
      case 'projects':
        return renderProjectItem(item, index);
      case 'education':
        return renderEducationItem(item, index);
      default:
        return <div key={index}>{JSON.stringify(item)}</div>;
    }
  }

  return (
    <section id={sectionKey} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {capitalizeFirstLetter(sectionKey)}
        </motion.h2>
        <div className={`grid grid-cols-1 ${sectionKey === 'projects' || sectionKey === 'education' ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          {Array.isArray(data) ? data.map((item, index) => (
            <React.Fragment key={index}>
              {renderItem(item, index)}
            </React.Fragment>
          )) : null}
        </div>
      </div>
    </section>
  );
}