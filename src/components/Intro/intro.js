import React from 'react'
import './intro.css'
import profileImage from "../../images/image_sans_backround-removebg-preview.png"
import btnImg from "../../images/hireme.png"
import CV from '../../Documents/GARTI Abdenour resume.pdf'

const Intro = () => {
  const handleHireClick = () => {
    window.open(CV, '_blank');
  };

  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1>Hello, <br />I'm <span>Abdenour</span></h1>
        <h2>Full Stack Web Developer</h2>
        <p>A 24-year-old software engineering graduate specializing in Full Stack Web Development.</p>
        <button className="hire-me-btn" onClick={handleHireClick}>
          <img src={btnImg} alt='hire me' className='btnImg'/> Hire Me
        </button>
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
