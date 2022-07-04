import React from 'react';
import PropTypes from 'prop-types';
import Image_Map from '../../public/ubicacion.svg';
import Image_Phone from '../../public/phone.svg';
import Image_Email from '../../public/email.svg';
import Image_Website from '../../public/website.svg';
import Image_GitHub from '../../public/github.svg';
import Image_linkedin from '../../public/linkedin.svg';

const Contact = ({ email, phone, website, location, profiles }) => {
  return (
    <section className="__contact basics">
      <h2>Contact</h2>
      <ul>
        <li className="location  logo">
          <div>
            <img src={Image_Map} alt="map logo" />
          </div>
          <div>{`${location.city}, ${location.country}`}</div>
        </li>
        <li className="phone  logo">
          <div>
            <img src={Image_Phone} alt={phone.alt} />
          </div>
          <div>
            <a href={`tel:${phone.number}`}>{phone.number}</a>
          </div>
        </li>
        <li className="email logo">
          <div>
            <img src={Image_Email} alt={email.alt} />
          </div>
          <div>
            <a href={`mailto:${email.mail}`}>{email.mail}</a>
          </div>
        </li>
        <li className="website  logo">
          <div>
            <img src={Image_Website} alt={website.alt} />
          </div>
          <div>
            <a href={website.url}>{website.name}</a>
          </div>
        </li>
        {profiles.map((item) => {
          return (
            <li className={`${item.network} logo`} key={item.network}>
              <div>
                <img
                  src={item.network == 'github' ? Image_GitHub : Image_linkedin}
                  alt={item.alt}
                />
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={item.url}>
                  {item.username}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Contact.propTypes = {
  email: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  website: PropTypes.object,
  location: PropTypes.object.isRequired,
  profiles: PropTypes.array,
};

export default Contact;
