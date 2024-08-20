import React from 'react';

const ExperienceItem = ({ title, duration, companyLogo, companyName, description }) => {
    return (
      <div className="experience-item">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">{title}</h3>
            <div className="experience-duration">{duration}</div>
          </div>
          <div className="company-info">
            <img src={companyLogo} alt={companyName} className="company-logo" />
            <span className="company-name">{companyName}</span>
          </div>
        </div>
        <div className="experience-description">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperienceItem;