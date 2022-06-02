import React from 'react';
import './Profile.scss';

const Profile = ({name, label}) => {
  return (
    <section className="resume__profile">
      <p className="profile__name">{name}</p>
      <p className="profile__label">{label}</p>
    </section>
  );
};

export default Profile;
