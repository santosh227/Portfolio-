import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hi, I’m Santosh Kumar, a dedicated Backend Developer with a strong foundation in building secure, scalable, and efficient server-side applications. I specialize in Node.js, Express.js, and RESTful APIs with cloud tools like AWS , with hands-on experience in working with MySQL and MongoDB for robust database management.

I enjoy designing system architectures, optimizing application performance, and ensuring smooth communication between front-end interfaces and back-end systems. Over the course of my internships and projects, I’ve worked on building hospital management systems, API integrations, and real-time features using modern backend technologies.

        </p>
        <p>
          
Beyond coding, I’m passionate about problem-solving, process automation, and exploring DevOps tools to streamline deployments and improve reliability. I take pride in writing clean, maintainable code and crafting backend solutions that power great user experiences.
        </p>
        
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;