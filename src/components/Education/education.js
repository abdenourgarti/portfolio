import React from 'react'
import "./education.css"
import TimelineItem from './timelineItem';

const educationData = [
    {
      title: "Computer Engineering Degree",
      institution: "University of Science and Technology Houari Boumediene (USTHB) - Algiers",
      period: "2022-2024",
      description: "Specialization in Software Engineering"
    },
    {
      title: "Bachelor's Degree in Computer Science",
      institution: "University of Science and Technology Houari Boumediene (USTHB) - Algiers",
      period: "2019-2022",
      description: "Specialization in General Computer Science - ACAD"
    },
    {
      title: "Baccalaureate Diploma",
      institution: "Hamza High School - Bouira",
      period: "2018",
      description: "Technical Mathematics Series, Civil Engineering Option"
    }
  ];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="divider white"></div>
        <h2>Education</h2>
        
        <ul className="timeline">
          {educationData.map((item, index) => (
            <TimelineItem 
              key={index} 
              data={item} 
              isInverted={index % 2 !== 0}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education