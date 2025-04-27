import React from 'react'
import './intro.css'
import profileImage from "../../images/image_sans_backround-removebg-preview.png"
import btnImg from "../../images/hireme.png"
import CV from '../../Documents/GARTI Abdenour resume.pdf'
import { Link } from 'react-scroll' // Assurez-vous d'importer Link

const Intro = () => {
  const handleDownloadCV = () => {
    window.open(CV, '_blank');
  };

  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1>Hello, <br />I'm <span>Abdenour</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>A 24-year-old software engineering graduate specializing in Full Stack Web Development.</p>
        
        {/* Remplacer le bouton par un Link de react-scroll */}
        <Link 
          to='contact' 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="hire-me-btn"
        >
          <img src={btnImg} alt='hire me' className='btnImg'/> Contact Me
        </Link>
        
        {/* Si vous souhaitez conserver un bouton pour télécharger le CV séparément */}
        {/* <button className="download-cv-btn" onClick={handleDownloadCV}>
          Download CV
        </button> */}
      </div>
      <div className="intro-image-container">
        <div className="intro-image-wrapper">
          <img src={profileImage} alt="Abdenour" className="intro-image" />
        </div>
      </div>
    </section>
  )
}

export default Intro