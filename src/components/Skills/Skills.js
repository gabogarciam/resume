import React from 'react';

import ResumeData from '../Resume/ResumeData.json';
import './Skills.scss';

const Skills = () => {
  return (
    <div className="__skills">
      <h2>Skills</h2>
      <ul>
        {ResumeData.skills.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
