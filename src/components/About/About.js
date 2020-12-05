import React from 'react';

import './About.scss';
import ResumeData from '../Resume/ResumeData.json';

const About = () => {
  return (
    <section className="resume__about">
      <div className="resume__summary">{ResumeData.basics.summary}</div>
    </section>
  );
};

export default About;
