import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ email, phone, website, location, profiles }) => {
  return (
    <section className="__contact basics">
      <h2>Contact</h2>
      <ul>
        <li className="location  logo">
          <div>
            <img src={location.img} alt="map logo" />
          </div>
          <div>{`${location.city}, ${location.country}`}</div>
        </li>
        <li className="phone  logo">
          <div>
            <img src={phone.img} alt={phone.alt} />
          </div>
          <div>
            <a href={`tel:${phone.number}`}>{phone.number}</a>
          </div>
        </li>
        <li className="email logo">
          <div>
            <img src={email.img} alt={email.alt} />
          </div>
          <div>
            <a href={`mailto:${email.mail}`}>{email.mail}</a>
          </div>
        </li>
        <li className="website  logo">
          <div>
            <img src={website.img} alt={website.alt} />
          </div>
          <div>
            <a href={website.url}>{website.name}</a>
          </div>
        </li>
        {profiles.map((item) => {
          return (
            <li className={`${item.network} logo`} key={item.network}>
              <div>
                <img src={item.img} alt={item.alt} />
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
