import React, { useState, useEffect } from 'react';
import './Aboutme.css';
import aboutMeImage1 from '../../images/aboutme.jpg'
import aboutMeImage2 from '../../images/aboutme2.jpg'
import aboutMeImage3 from '../../images/aboutme3.jpg'

const AboutMe = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [aboutMeImage1, aboutMeImage2, aboutMeImage3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    });

    return (
        <section id='about'>
            <div className="about-me-section">
                <h1 className="about-me-title">About Me</h1>
                <div className="about-me-content">
                    <div className="about-me-image-container">
                        <div className="about-me-image-wrapper">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Abdenour Garti ${index + 1}`}
                                    className={`about-me-image ${index === currentImage ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="about-me-text">
                        <p>
                        I am a software engineer currently working at M2I Services, while also operating as a freelance developer in both the Algerian and international markets. Specialized in Full Stack web development, I am dedicated to designing and creating modern, robust, and intuitive digital solutions that adhere to industry standards and best practices.

                        As a recent graduate with a passion for web technologies, I stand out through my quick learning ability, seriousness, and reliability. I am constantly seeking new opportunities to expand my skills and tackle challenging technical problems, while adding value to the projects I work on.
                        
                        My goal is to create exceptional user experiences through high-performance and accessible web applications that perfectly meet the needs of clients and end users.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
