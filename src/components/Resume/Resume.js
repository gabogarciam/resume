import React, { Suspense } from 'react';
import dataSchema from '../../schemas/Data';
import './Resume.scss';

const Resume = () => {
  const Avatar = React.lazy(() => import('../Avatar/Avatar'));
  const Profile = React.lazy(() => import('../Profile/Profile'));
  const Skills = React.lazy(() => import('../Skills/Skills'));
  const Languages = React.lazy(() => import('../Languages/Languages'));
  const Contact = React.lazy(() => import('../Contact/Contact'));
  const About = React.lazy(() => import('../About/About'));
  const Experience = React.lazy(() => import('../Experience/Experience'));
  const Education = React.lazy(() => import('../Education/Education'));

  const { basics, skills, languages, aboutMe, experience } = dataSchema;

  return (
    <div className="container__resume">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Resume;
