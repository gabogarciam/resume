import React from 'react';

import ResumeData from './ResumeData.json';
import './Resume.scss';

import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const Resume = () => {
  return (
    <div className="container__resume">
      <div className="resume__basics">
        <div className="image__profile">
          <img src={ResumeData.basics.picture} alt="Avatar Profile" />
        </div>
        <div className="__title">
          <p className="profile__name">{ResumeData.basics.name}</p>
          <p className="profile__label">{ResumeData.basics.label}</p>
        </div>
        <Skills />
        <Languages />
        <Contact />
      </div>
      <div className="resume__body">
        <div className="resume__summary">{ResumeData.basics.summary}</div>
        <div className="experience__">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Resume;
