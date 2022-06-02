import React from 'react';

const Education = ({education}) => {
  return (
    <div className="experience__education">
      <h3>Education</h3>
      {education.map((item) => {
        return (
          <ul className="education__experience" key={item.institution}>
            <div className="date">
              <li>{item.startDate}</li>
              <li>{item.endDate}</li>
            </div>
            <li>{item.institution}</li>
            <li>{item.area}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Education;
