import React from 'react';
import Certification from './Certification';
import './Certification.css';

const certifications = [
    {
      date: '04/2024',
      platform: 'Udemy',
      title: 'React JS pour tous : l\'ultime formation',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '04/2024',
      platform: 'Udemy',
      title: 'Maîtriser Node.js et son écosystème',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '05/2023',
      platform: 'Udemy',
      title: 'The Advanced SQL Course',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '05/2023',
      platform: 'Udemy',
      title: 'JavaScript Ultimate Guide',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '09/2022',
      platform: 'Udemy',
      title: 'Formation Complète Développeur Web',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '09/2022',
      platform: 'Udemy',
      title: 'C Programming',
      url: 'https://www.udemy.com/certificate/UC-...'
    },
    {
      date: '11/2022',
      platform: 'Udemy',
      title: 'WordPress Express',
      url: 'https://www.udemy.com/certificate/UC-...'
    }
  ];

const CertificationSection = () => {
  return (
    <section id='formation' className="certification-section">
      <h2>Formations</h2>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <Certification key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
