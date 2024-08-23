import React from 'react';
import { FaBriefcase, FaClock } from "react-icons/fa";

const TimelineItem = ({ data, isInverted }) => {
  return (
    <li>
      <div className="timeline-badge"><FaBriefcase /></div>
      <div className={`timeline-panel-container${isInverted ? '-inverted' : ''}`}>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h3>{data.title}</h3>
            <h4>{data.institution}</h4>
            <p className="text-muted"><FaClock className='icon'/>{data.period}</p>
          </div>
          <div className="timeline-body">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;