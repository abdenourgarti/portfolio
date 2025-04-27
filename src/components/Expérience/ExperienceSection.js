import React from 'react';
import ExperienceItem from './ExperienceItem';
import tekkolabLogo from "../../images/logo tekkolab.png";
import m2iLogo from "../../images/m2i-logo.png"; // You'll need to add this image to your project
import freelanceLogo from "../../images/freelance.png"; // You'll need to add this image to your project
import "./expérience.css";

const ExperienceSection = () => {
    const experiences = [
        {
          title: 'Full Stack Web Engineer',
          duration: 'December 2024 - Present',
          companyLogo: m2iLogo,
          companyName: 'M2I Services',
          context: 'As a Full Stack Web Engineer at M2I Services, I work on a variety of challenging projects using modern web technologies:',
          description: [
            'Developing and maintaining enterprise-level web applications using Laravel (PHP) and Vue.js',
            'Collaborating with cross-functional teams to analyze business requirements and transform them into technical solutions',
            'Creating comprehensive technical proposals in response to client specifications, including planning and solution architecture',
            'Implementing best practices for code quality, performance optimization, and security standards',
            'Contributing to system design, database modeling, and API development for scalable web applications',
            'Participating in project lifecycle from requirements gathering to deployment and maintenance'
          ]
        },
        {
          title: 'Freelance Web Developer',
          duration: '2022 - Present',
          companyLogo: freelanceLogo,
          companyName: 'Freelance',
          context: 'As a freelance web developer, I have successfully delivered a wide range of web projects for international clients:',
          description: [
            'Designing and developing custom web applications using modern technologies including React.js, Next.js, Node.js, and MongoDB',
            'Building responsive e-commerce platforms with secure payment gateways, inventory management, and user authentication systems',
            'Creating professional business websites with SEO optimization, contact forms, and content management systems',
            'Implementing responsive designs that work flawlessly across all devices and screen sizes',
            'Providing end-to-end services including requirements analysis, UI/UX design, development, testing, and deployment',
            'Managing client relationships and delivering projects on time and within budget requirements'
          ]
        },
        {
          title: 'Full Stack Web Developer',
          duration: 'December 2023 - July 2024',
          companyLogo: tekkolabLogo,
          companyName: 'SARL TEKKOLAB',
          context: 'I worked on an end-of-studies project entitled "Design and creation of a web/mobile task management platform". Here are the skills I developed and the accomplishments I\'m particularly proud of:',
          description: [
            'Conducted requirements gathering and created the project specifications document',
            'Proposed and presented a solution based on the gathered requirements',
            'Performed thorough analysis and design for the platform\'s architecture',
            'Developed a web task management platform using Next.js, Node.js, Express.js',
            'Managed the database with MongoDB and Mongoose',
            'Used GitHub for version control and collaboration',
            'Applied software design principles and project management methodologies',
            'Actively participated in task management and project planning'
          ]
        }
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