import { useEffect, useState } from 'react';
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
import { useLang } from './i18n';
import { ScrollTrigger, scrubIn, useGSAP } from './scroll';

function App() {
  const [project, setProject] = useState(null);
  const { lang } = useLang();

  // Every section title flips up into place as it scrolls in.
  useGSAP(() => scrubIn('.section-head h2', { rotateX: 75, y: 30 }));
  // A new language changes text heights: measure the scroll scenes again.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [lang]);

  return (
    <>
      <Navbar />
      <main>
        <Intro />
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
