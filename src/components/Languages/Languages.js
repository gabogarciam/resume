import React from 'react';

import ResumeData from '../Resume/ResumeData.json';
import './Languages.scss';

const Languages = () => {
  return (
    <section className="resume__languages basics">
      <h2>Languages</h2>
      {ResumeData.languages.map((item) => {
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

export default Languages;
