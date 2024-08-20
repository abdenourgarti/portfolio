import React from 'react';
import ExperienceItem from './ExperienceItem';
import "./expérience.css"

const ExperienceSection = () => {
    const experiences = [
        {
          title: 'Full Stack Web Developer',
          duration: 'August 2023 - March 2024',
          companyLogo: 'https://via.placeholder.com/50x50',
          companyName: 'SARL TEKKOLAB',
          description: [
            'Developed a web/mobile task management platform using Next.js, Node.js, Express.js.',
            'Managed the database with MongoDB and Mongoose.',
            'Used GitHub for version control and collaboration.',
            'Applied software design principles and project management methodologies.',
            'Actively participated in task management and project planning.'
          ]
        },
        {
          title: 'Web Developer',
          duration: 'January 2023 - June 2023',
          companyLogo: 'https://via.placeholder.com/50x50',
          companyName: 'Personal Project',
          description: [
            'Developed a web application with HTML, CSS, JavaScript, PHP, and MySQL.',
            'Worked in a team to design and build a website for obtaining scholarships abroad for Algerian students.',
            'Presented the project to university juries.'
          ]
        },
        {
            title: 'Web Developer',
            duration: 'January 2023 - June 2023',
            companyLogo: 'https://via.placeholder.com/50x50',
            companyName: 'Personal Project',
            description: [
              'Developed a web application with HTML, CSS, JavaScript, PHP, and MySQL.',
              'Worked in a team to design and build a website for obtaining scholarships abroad for Algerian students.',
              'Presented the project to university juries.'
            ]
          },
          {
            title: 'Web Developer',
            duration: 'January 2023 - June 2023',
            companyLogo: 'https://via.placeholder.com/50x50',
            companyName: 'Personal Project',
            description: [
              'Developed a web application with HTML, CSS, JavaScript, PHP, and MySQL.',
              'Worked in a team to design and build a website for obtaining scholarships abroad for Algerian students.',
              'Presented the project to university juries.'
            ]
          }
      ];
    
      return (
        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                duration={experience.duration}
                companyLogo={experience.companyLogo}
                companyName={experience.companyName}
                description={experience.description}
              />
            ))}
          </div>
        </section>
      );
};

export default ExperienceSection;