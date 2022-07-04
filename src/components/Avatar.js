import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ picture }) => {
  return (
    <figure className="image__profile">
      <img src={picture} alt="Avatar Profile" />
    </figure>
  );
};

Avatar.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default Avatar;
