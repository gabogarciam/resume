import React, { Component } from 'react';
import ResumeData from '../Resume/ResumeData.json'
import './Contact.scss'
import emailLogo from '../../../public/email.svg';
import phoneLogo from '../../../public/phone.svg';
import websiteLogo from '../../../public/website.svg';
import ubicationLogo from '../../../public/ubicacion.svg';
import githubLogo from '../../../public/github.svg';
import linkedinLogo from '../../../public/linkedin.svg';

class Contact extends Component {
    render() {
        return (
            <div className='__contact'>
                        <h2>Contact</h2>
                        <ul>
                            <div className='location  logo'>
                                <li><img src={ubicationLogo} alt="map logo" /></li>
                                <li>{ResumeData.basics.location.city+', '+ResumeData.basics.location.country}</li>
                            </div>
                            <div className='phone  logo'>
                                <li><img src={phoneLogo} alt="phone logo" /></li>
                                <li>{ResumeData.basics.phone}</li>
                            </div>
                            <div className='email logo'>
                                <li><img src={emailLogo} alt="email logo" /></li>
                                <li><a href={'mailto:'+ResumeData.basics.email}>{ResumeData.basics.email}</a></li>
                            </div>
                            <div className='website  logo'>
                                <li><img src={websiteLogo} alt="website logo" /></li>
                                <li><a href={ResumeData.basics.website}>https://gabogarciam.com</a></li>
                            </div>
                            {ResumeData.basics.profiles.map((item, index) => {
                                return (
                                    <div className={item.network + ' logo'} key={index}>
                                        <li><img src={item.network === 'github' ? githubLogo : linkedinLogo} alt={item.network + 'logo'} /></li>
                                        <li><a href={item.url}>{item.username}</a></li>
                                    </div>
                                )
                            })}
                        </ul>
            </div>
        )
    }
}

export default Contact;