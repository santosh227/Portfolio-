import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Education from './components/Education'
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const activeSection = useScrollSpy(['about','experience', 'projects','education'], 200);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />
          
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <Education/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;