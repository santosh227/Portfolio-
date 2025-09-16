import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from './Navigation';

const Header = ({ activeSection }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="#" className="hover:text-teal-400 transition-colors">
            Santosh Kumar 
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Back End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build a Scalable Back end Applications 
        </p>
        
        <Navigation activeSection={activeSection} />
      </div>
      
      {/* Social Links with Hover Popup Effects */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {[
          { 
            Icon: Github, 
            href: 'https://github.com/santosh227', 
            label: 'GitHub',
            tooltip: 'View GitHub Profile'
          },
          { 
            Icon: Linkedin, 
            href: 'https://www.linkedin.com/in/boddepallisantoshkumar/', 
            label: 'LinkedIn',
            tooltip: 'Connect on LinkedIn'
          },
          { 
            Icon: Mail, 
            href: 'mailto:santoshkumarg227@gmail.com', 
            label: 'Email',
            tooltip: 'Send Email'
          }
        ].map(({ Icon, href, label, tooltip }) => (
          <li key={label} className="mr-5 text-xs shrink-0 relative group">
            <a
              className="block hover:text-slate-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              title={label}
            >
              <Icon className="h-6 w-6 transition-all duration-300" />
              
              {/* Tooltip Popup */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 
                             bg-slate-800 text-slate-200 text-xs font-medium px-3 py-2 rounded-lg
                             opacity-0 group-hover:opacity-100 transition-all duration-300
                             pointer-events-none whitespace-nowrap shadow-lg
                             before:content-[''] before:absolute before:top-full before:left-1/2 
                             before:transform before:-translate-x-1/2 before:border-4 
                             before:border-transparent before:border-t-slate-800">
                {tooltip}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
