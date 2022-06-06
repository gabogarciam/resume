import React from 'react';
import './Education.scss';

const Education = ({education}) => {
  return (
    <div className="experience__education">
      <h3>Education</h3>
      {education.map((item) => {
        return (
          <ul className="education__experience" key={item.institution}>
            <li>{item.area}</li>
            <li className='institution'>{item.institution}</li>
            <div className="date">
              <li>{item.startDate}</li>
              <li>{item.endDate}</li>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Education;
