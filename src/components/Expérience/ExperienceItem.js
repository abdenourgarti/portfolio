import React from 'react';

const ExperienceItem = ({ title, duration, companyLogo, companyName, context, description }) => {
    return (
      <div className="experience-item">
        <div className="experience-header">
          <div className="company-info">
            <img src={companyLogo} alt={companyName} className="company-logo" />
            <span className="company-name">{companyName}</span>
          </div>
          <div>
            <h3 className="experience-title">{title}</h3>
            <div className="experience-duration">{duration}</div>
          </div>
        </div>
        <div className="experience-description">
          <p>{context}</p>
          {description.map((paragraph, index) => (
            <ul className='description-list'>
              <li key={index}>{paragraph}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperienceItem;