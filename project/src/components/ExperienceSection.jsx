import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const experiences = [
 
  {
    period: 'Jun 2024 - Aug 2024',
    title: 'Web Developer Intern',
  
    company: 'Sunlight IT',

    description:"I worked with JavaScript, AJAX, PHP, Bootstrap, MySQL, CSS, and HTML to develop and improve the HamaraCRM hospital management system. My responsibilities included building responsive and user-friendly interfaces, integrating backend functionalities, and optimizing database operations for efficiency. I developed a hospital branch management module to support expansion into new cities and implemented a warning page with full CRUD operations. ",
    link: '#',
    tags: [
      'JavaScript',
      'AJAX',
      'HTML & SCSS',
      'MySQL',
      'Bootstrap',
      'CRM',
      'PHP',
    ]
  }
];

const ExperienceSection = () => {
  return (
    <AnimatedSection
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base mb-8"
          href="https://drive.google.com/file/d/1CkscU7WEadnYkKs7zlvgKRKkLDEH72KA/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>
            View Full Résumé{' '}
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
          </span>
        </a>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="mb-12 experience-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} · {exp.company}{' '}
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
