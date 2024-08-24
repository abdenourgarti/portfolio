import React from 'react';
import { SiUdemy } from "react-icons/si";
import { TfiNewWindow } from "react-icons/tfi";

const Certification = ({ date, platform, title, url }) => {
  return (
    <div className="certification-card">
      <div className="certification-date">{date}</div>
      <SiUdemy className='icon'/> 
      <div className="certification-platform">
        {platform}
      </div>
      <h3 className="certification-title">{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className="certification-button">
        See <TfiNewWindow />
      </a>
    </div>
  );
};

export default Certification;
