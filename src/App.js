import { useState } from 'react';
import AboutMe from './components/About me/about';
import Contact from './components/Contact/contact';
import Education from './components/Education/education';
import ExperienceSection from './components/Expérience/ExperienceSection';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';
import Portfolio from './components/Portfolio/portfolio';
import ProjectModal from './components/Portfolio/ProjectModal';
import Skills from './components/Skills/skills';

function App() {
  const [project, setProject] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Intro onOpenProject={setProject} />
        <AboutMe />
        <ExperienceSection />
        <Education />
        <Skills />
        <Portfolio onOpenProject={setProject} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </>
  );
}

export default App;
