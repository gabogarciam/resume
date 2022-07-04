import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, label }) => {
  return (
    <section className="resume__profile">
      <p className="profile__name">{name}</p>
      <p className="profile__label">{label}</p>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Profile;
