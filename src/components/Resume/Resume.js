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

import dataSchema from '../../schemas/Data';

const Resume = () => {
  const { basics, skills, languages, aboutMe, experience } = dataSchema;

  return (
    <div className="container__resume">
      <aside className="resume__basics">
        <Avatar />
        <Profile {...basics} />
        <Skills {...skills} />
        <Languages {...languages} />
        <Contact {...basics} />
      </aside>
      <div className="resume__main">
        <About {...aboutMe} />
        <Experience {...experience} />
        <Education {...experience} />
      </div>
    </div>
  );
};

export default Resume;
