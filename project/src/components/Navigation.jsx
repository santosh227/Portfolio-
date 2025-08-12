import React from 'react';

const Navigation = ({ activeSection }) => {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' }
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`group flex items-center py-3 text-left w-full ${
                activeSection === section.id ? 'active' : ''
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              <span className={`nav-indicator mr-4 h-px bg-slate-600 transition-all duration-300 ease-in-out ${
                activeSection === section.id 
                  ? 'w-16 bg-slate-200 shadow-sm' 
                  : 'w-8 group-hover:w-16 group-hover:bg-slate-300 group-focus-visible:w-16 group-focus-visible:bg-slate-300'
              }`}></span>
              <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeSection === section.id 
                  ? 'text-slate-200' 
                  : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
              }`}>
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;