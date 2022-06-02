import React from 'react';
import './Skills.scss';

const Skills = ({technicalSkills}) => {
  return (
    <section className="resume__skills basics">
      <h2>Skills</h2>
      <ul>
        {technicalSkills.map((item) => <li key={item.name}>{item.name}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
