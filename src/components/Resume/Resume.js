import React from 'react';

import './Resume.scss';

import Avatar from '../Avatar/Avatar';
import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const Resume = () => {
  return (
    <div className="container__resume">
      <aside className="resume__basics">
        <Avatar />
        <Profile />
        <Skills />
        <Languages />
        <Contact />
      </aside>
      <div className="resume__main">
        <About />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
