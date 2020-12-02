import React from 'react';

import ResumeData from '../Resume/ResumeData.json';
import './Languages.scss';

const Languages = () => {
  return (
    <div className="__languages">
      <h2>Languages</h2>
      {ResumeData.languages.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.language}</li>
            <li className="__fluency">({item.fluency})</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Languages;
