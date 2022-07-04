import React from 'react';
import ImageProfile from '../../public/image_profile.webp';

const Avatar = () => {
  return (
    <figure className="image__profile">
      <img src={ImageProfile} alt="Avatar Profile" />
    </figure>
  );
};

export default Avatar;
