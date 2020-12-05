import React from 'react';

import ResumeData from '../Resume/ResumeData.json';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="resume__skills basics">
      <h2>Skills</h2>
      <ul>
        {ResumeData.skills.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Skills;
