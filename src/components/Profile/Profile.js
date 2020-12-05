import React from 'react';

import './Profile.scss';
import ResumeData from '../Resume/ResumeData.json';

const Profile = () => {
  return (
    <section className="resume__profile">
      <p className="profile__name">{ResumeData.basics.name}</p>
      <p className="profile__label">{ResumeData.basics.label}</p>
    </section>
  );
};

export default Profile;
