import React from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';

const Experience = ({ works }) => {
  return (
    <div className="__work">
      <h3>Experience</h3>
      {works.map((item, index) => {
        return (
          <ul className="work__experience" key={index}>
            <div className="experience__time">
              <span className="__rounder"></span>
              <span className="__line"></span>
            </div>
            <div className="experience__data bd-grid">
              <li className="position">{item.position}</li>
              <li className="company">{item.company}</li>
              <div className="date">
                <li>{item.startDate}</li>
                <li>{item.endDate}</li>
              </div>
              <li>{item.summary}</li>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

Experience.propTypes = {
  works: PropTypes.array.isRequired,
};

export default Experience;
