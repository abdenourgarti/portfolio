import AboutMe from "./components/About me/about";
import CertificationSection from "./components/Certifications/CertificationSection";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import ExperienceSection from "./components/Expérience/ExperienceSection";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/portfolio";
import Skills from "./components/Skills/skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <ExperienceSection />
      <Education />
      <CertificationSection />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
