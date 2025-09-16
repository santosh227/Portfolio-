import React from 'react';
import { GraduationCap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const education = [
  {
    period: '2021 Nov - 2025 April',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'Guru Ghasidas Vishwavidyalaya, Central University of Chhattisgarh, India',
    description: "Completed comprehensive coursework in software engineering, data structures, algorithms, database management, and web development. Gained hands-on experience in full-stack development, system design, and modern programming languages.",
    
    tags: [
      'Data Structures',
      'Algorithms',
      'Database Management',
      'Web Development',
      'Software Engineering',
      'System Design'
    ]
  },
  {
    period: '2019 Jun - 2021 Mar',
    degree: 'SSC Intermediate (12th Grade)',
    institution: 'Sri Chaitanya Junior College, Andhra Pradesh, India',
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills.",
    
    tags: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Science',
      'Analytical Skills'
    ]
  },
  {
    period: '2019 March',
    degree: 'SSC 10th Class',
    institution: 'Sri Chaitanya Techno School, Andhra Pradesh, India',
    description: "Completed secondary education with strong academic performance in science and mathematics.",
    
    tags: [
      'Mathematics',
      'Science',
      'English',
      'Academic Excellence'
    ]
  }
];

const Education = () => {
  return (
    <AnimatedSection
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Education
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {education.map((edu, index) => (
            <li
              key={index}
              className="mb-12 education-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {edu.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 text-base">
                        <GraduationCap className="inline-block h-4 w-4 shrink-0 mr-2" />
                        {edu.degree}
                      </span>
                    </div>
                  </h3>
                  <h4 className="mt-1 text-sm font-medium text-teal-300">
                    {edu.institution}
                  </h4>
                  {edu.cgpa && (
                    <p className="mt-1 text-xs text-slate-400">CGPA: {edu.cgpa}</p>
                  )}
                  {edu.percentage && (
                    <p className="mt-1 text-xs text-slate-400">Percentage: {edu.percentage}</p>
                  )}
                  {edu.description && (
                    <p className="mt-2 text-sm leading-normal">{edu.description}</p>
                  )}
                  {edu.tags && edu.tags.length > 0 && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Relevant coursework">
                      {edu.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
};

export default Education;
