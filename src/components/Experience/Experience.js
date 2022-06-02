import React from 'react';
import './Experience.scss';

const Experience = ({works}) => {
  return (
    <div className="__work">
      <h3>Experience</h3>
      {works.map((item, index) => {
        return (
          <ul className="work__experience" key={index}>
            <li>{item.position}</li>
            <li className="company">{item.company}</li>
            <div className="date">
              <li>{item.startDate}</li>
              <li>{item.endDate}</li>
            </div>
            <li>{item.summary}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Experience;
