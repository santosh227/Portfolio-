import React from 'react';
import { ArrowUpRight, Github, ExternalLink, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 1,
    year: "2025",
    title: "SkyConnect - Enterprise Airline Microservices Platform",
    description: "Enterprise-grade airline booking platform demonstrating advanced microservices architecture and cloud deployment expertise and production-ready software engineering practices.",
    image: "src/images/project-1.png",
    link: "https://github.com/santosh227/-airlinesProject-microservice",
    links: {
      github: "https://github.com/santosh227/-airlinesProject-microservice",
      live: "http://3.110.161.234/health",
      documentation: "http://bit.ly/3VVkoEJ"
    },
    tags: ["NodeJS", "ExpressJS", "Mongoose", "AWS Deployment", "EC2", "nginx", "microservices", "idempotent key"]
  },
  {
    id: 2,
    year: '2024',
    title: 'Ecommerce Platform',
    description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',
    tags: ['React', 'Node.js', 'Spotify API', 'Express']
  },
  {
    id: 3,
    year: '2023',
    title: 'Spotify Profile Visualizer',
    description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks.',
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',
    stars: 691,
    tags: ['React', 'Express', 'Spotify API', 'Node.js']
  },
  {
    id: 4,
    year: '2022',
    title: 'Halcyon VS Code Theme',
    description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Featured on the official VS Code marketplace with thousands of downloads.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
    link: '#',
    tags: ['VS Code', 'Theme', 'Design']
  }
];

const ProjectsSection = () => {
  const handleLinkClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedSection id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base mb-8"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            View Full Project Archive{' '}
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
          </span>
        </a>
        <ol className="group/list">
          {projects.map((project) => (
            <li key={project.id} className="mb-12 project-item" style={{animationDelay: `${project.id * 0.1}s`}}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>
                        {project.title}{' '}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  
                  {/* Multiple Links Section - Only for projects that have links object */}
                  {project.links && (
                    <div className="mt-3 flex flex-wrap gap-2 relative z-20">
                      <button
                        onClick={(e) => handleLinkClick(e, project.links.github)}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700/50 hover:text-teal-300 transition-colors cursor-pointer"
                      >
                        <Github className="h-3 w-3" />
                        GitHub
                      </button>
                      <button
                        onClick={(e) => handleLinkClick(e, project.links.live)}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700/50 hover:text-teal-300 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </button>
                      <button
                        onClick={(e) => handleLinkClick(e, project.links.documentation)}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700/50 hover:text-teal-300 transition-colors cursor-pointer"
                      >
                        <FileText className="h-3 w-3" />
                        API Docs
                      </button>
                    </div>
                  )}
                  
                  {project.stars && (
                    <div className="mt-2 flex items-center">
                      <span className="text-slate-400 text-sm">★ {project.stars}</span>
                    </div>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tags.map((tag, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  alt={project.title}
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition-all duration-300 group-hover:border-slate-200/30 group-hover:scale-105 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
