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
      
      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {[
          { Icon: Github, href: '#', label: 'GitHub' },
          { Icon: Linkedin, href: '#', label: 'LinkedIn' },
          { Icon: Mail, href: '#', label: 'Email' }
        ].map(({ Icon, href, label }) => (
          <li key={label} className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200 transition-colors"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              title={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;