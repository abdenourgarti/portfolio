import React from 'react';
import Certification from './Certification';
import './Certification.css';

const certifications = [
    {
      date: '04/2024',
      platform: 'Udemy',
      title: 'React JS pour tous : l\'ultime formation',
      url: 'https://www.udemy.com/certificate/UC-f5f92c33-9438-4f71-a217-438ac500b7f7/'
    },
    {
      date: '04/2024',
      platform: 'Udemy',
      title: 'Maîtriser Node.js et son écosystème',
      url: 'https://www.udemy.com/certificate/UC-abc171ea-e609-415e-8d47-e0ccef189694/'
    },
    {
      date: '04/2023',
      platform: 'Udemy',
      title: 'The Advanced SQL Course',
      url: 'https://www.udemy.com/certificate/UC-f0c7dd1d-ce17-4c01-9dc3-849ca43db537'
    },
    {
      date: '04/2023',
      platform: 'Udemy',
      title: 'JavaScript Ultimate Guide',
      url: 'https://www.udemy.com/certificate/UC-4e52bffb-3dc8-45bf-b54a-6aee2758880e'
    },
    {
      date: '09/2022',
      platform: 'Udemy',
      title: 'Formation Complète Développeur Web',
      url: 'https://www.udemy.com/certificate/UC-9b25ad73-924e-4b3d-90cc-942d29881f69'
    },
    {
      date: '09/2022',
      platform: 'Udemy',
      title: 'C Programming',
      url: 'https://www.udemy.com/certificate/UC-f168f572-27ae-4963-8557-c71c4275429d/'
    },
    {
      date: '11/2022',
      platform: 'Udemy',
      title: 'WordPress Express',
      url: 'https://www.udemy.com/certificate/UC-aca66b72-3b4d-488a-af39-cf27c0ceab18/'
    },
    
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
