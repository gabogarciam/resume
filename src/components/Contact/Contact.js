import React from 'react';
import './Contact.scss';

import emailLogo from '../../../public/email.svg';
import phoneLogo from '../../../public/phone.svg';
import websiteLogo from '../../../public/website.svg';
import ubicationLogo from '../../../public/ubicacion.svg';
import githubLogo from '../../../public/github.svg';
import linkedinLogo from '../../../public/linkedin.svg';

const Contact = ({email, phone, website, location, profiles}) => {
  return (
    <section className="__contact basics">
      <h2>Contact</h2>
      <ul>
        <li className="location  logo">
          <div>
            <img src={ubicationLogo} alt="map logo" />
          </div>
          <div>{`${location.city}, ${location.country}`}</div>
        </li>
        <li className="phone  logo">
          <div>
            <img src={phoneLogo} alt="phone logo" />
          </div>
          <div>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </li>
        <li className="email logo">
          <div>
            <img src={emailLogo} alt="email logo" />
          </div>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </li>
        <li className="website  logo">
          <div>
            <img src={websiteLogo} alt="website logo" />
          </div>
          <div>
            <a href={website}>https://gabogarciam.com</a>
          </div>
        </li>
        {profiles.map((item) => {
          return (
            <li className={`${item.network} logo`} key={item.network}>
              <div>
                <img
                  src={item.network === 'github' ? githubLogo : linkedinLogo}
                  alt={`${item.network}logo`}
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

export default Contact;
