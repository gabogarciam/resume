import React from 'react';
import PropTypes from 'prop-types';

const Languages = ({ tongues }) => {
  return (
    <section className="resume__languages basics">
      <h2>Languages</h2>
      {tongues.map((item) => {
        return (
          <ul key={item.language}>
            <li>{item.language}</li>
            <li className="__fluency">({item.fluency})</li>
          </ul>
        );
      })}
    </section>
  );
};

Languages.propTypes = {
  tongues: PropTypes.array.isRequired,
};

export default Languages;
