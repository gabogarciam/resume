import React, { Suspense } from 'react';
import dataSchema from '../schemas/Data';

const Resume = () => {
  const Toggle = React.lazy(() => import('./Toggle'));
  const Avatar = React.lazy(() => import('./Avatar'));
  const Profile = React.lazy(() => import('./Profile'));
  const Skills = React.lazy(() => import('./Skills'));
  const Languages = React.lazy(() => import('./Languages'));
  const Contact = React.lazy(() => import('./Contact'));
  const About = React.lazy(() => import('./About'));
  const Experience = React.lazy(() => import('./Experience'));
  const Education = React.lazy(() => import('./Education'));

  const { basics, skills, languages, aboutMe, experience } = dataSchema;

  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <div className="container__resume">
        <aside className="resume__basics">
          <Toggle />
          <Avatar {...basics} />
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
    </Suspense>
  );
};

export default Resume;
