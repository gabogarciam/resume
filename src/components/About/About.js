import React from 'react';
import PropTypes from 'prop-types';

const About = ({ description }) => {
  return (
    <section className="resume__about">
      <div className="resume__summary">{description}</div>
    </section>
  );
};

About.propTypes = {
  description: PropTypes.string.isRequired,
};

export default About;
