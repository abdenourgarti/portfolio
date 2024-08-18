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
        <section id='about' className="about-me-section">
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
                        I am a dedicated and recently graduated software engineer with a focus on Full Stack web development. 
                        I specialize in designing and developing innovative web platforms. Known for my quick learning ability, 
                        reliability, and commitment to continuous improvement, I bring a serious and detail-oriented approach 
                        to every project. With hands-on experience in various technologies, I am eager to contribute to 
                        challenging projects and continue growing in a dynamic professional environment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
