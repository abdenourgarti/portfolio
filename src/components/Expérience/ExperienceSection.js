import React from 'react';
import ExperienceItem from './ExperienceItem';
import tekkolabLogo from "../../images/logo tekkolab.png"
import "./expérience.css"

const ExperienceSection = () => {
    const experiences = [
        {
          title: 'Full Stack Web Developer',
          duration: 'December 2023 - July 2024',
          companyLogo: tekkolabLogo,
          companyName: 'SARL TEKKOLAB',
          context: 'I worked on an end-of-studies project entitled "Design and creation of a web/mobile task management platform". Here are the skills I developed and the accomplishments I\'m particularly proud of:',
          description: [
            'Conducted requirements gathering and created the project specifications document.',
            'Proposed and presented a solution based on the gathered requirements.',
            'Performed thorough analysis and design for the platform\'s architecture.',
            'Developed a web task management platform using Next.js, Node.js, Express.js.',
            'Managed the database with MongoDB and Mongoose.',
            'Used GitHub for version control and collaboration.',
            'Applied software design principles and project management methodologies.',
            'Actively participated in task management and project planning.'
          ]
        },
        
      ];
    
      return (
        <section id='experience' className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                duration={experience.duration}
                companyLogo={experience.companyLogo}
                companyName={experience.companyName}
                context={experience.context}
                description={experience.description}
              />
            ))}
          </div>
        </section>
      );
};

export default ExperienceSection;