import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { projectsData } from "./data/projects";

type View = 'portfolio' | 'project-detail';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentView('project-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setCurrentView('portfolio');
    setSelectedProjectId(null);
    // Scroll to projects section
    setTimeout(() => {
      const element = document.getElementById('projects');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNextProject = () => {
    if (selectedProjectId) {
      const currentIndex = projectsData.findIndex(p => p.id === selectedProjectId);
      const nextIndex = (currentIndex + 1) % projectsData.length;
      setSelectedProjectId(projectsData[nextIndex].id);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousProject = () => {
    if (selectedProjectId) {
      const currentIndex = projectsData.findIndex(p => p.id === selectedProjectId);
      const prevIndex = currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
      setSelectedProjectId(projectsData[prevIndex].id);
      window.scrollTo(0, 0);
    }
  };

  const selectedProject = selectedProjectId 
    ? projectsData.find(p => p.id === selectedProjectId)
    : null;

  const currentIndex = selectedProjectId 
    ? projectsData.findIndex(p => p.id === selectedProjectId)
    : -1;

  const hasNext = currentIndex < projectsData.length - 1;
  const hasPrevious = currentIndex > 0;

  if (currentView === 'project-detail' && selectedProject) {
    return (
      <div className="min-h-screen bg-white">
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToProjects}
          onNext={handleNextProject}
          onPrevious={handlePreviousProject}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkExperience />
        <Projects onProjectClick={handleProjectClick} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}