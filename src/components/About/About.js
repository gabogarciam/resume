import React from 'react';
import './About.scss';

const About = ({description}) => {
  return (
    <section className="resume__about">
      <div className="resume__summary">{description}</div>
    </section>
  );
};

export default About;
