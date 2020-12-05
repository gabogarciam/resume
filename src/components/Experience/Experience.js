import React from 'react';

import ResumeData from '../Resume/ResumeData.json';
import './Experience.scss';

const Experience = () => {
  return (
    <div className="__work">
      <h3>Experience</h3>
      {ResumeData.work.map((item, index) => {
        return (
          <ul className="work__experience" key={index}>
            <div className="date">
              <li>{item.startDate}</li>
              <li>{item.endDate}</li>
            </div>
            <li className="company">{item.company}</li>
            <li>{item.position}</li>
            <li>{item.summary}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Experience;
