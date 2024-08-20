import AboutMe from "./components/About me/about";
import Contact from "./components/Contact/contact";
import ExperienceSection from "./components/Expérience/ExperienceSection";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <ExperienceSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
