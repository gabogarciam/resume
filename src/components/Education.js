import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ education }) => {
  return (
    <div className="experience__education">
      <h3>Education</h3>
      {education.map((item) => {
        return (
          <ul className="education__experience" key={item.institution}>
            <div className="experience__time">
              <span className="__rounder"></span>
              <span className="__line"></span>
            </div>
            <div className="experience__data bd-grid">
              <li>{item.area}</li>
              <li className="institution">{item.institution}</li>
              <div className="date">
                <li>{item.startDate}</li>
                <li>{item.endDate}</li>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
