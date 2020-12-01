import React, { Component } from 'react';
import ResumeData from './ResumeData.json'
import './Resume.scss'

import ImageProfile from './image__profile.jpg';
import Contact from '../Contact/Contact'
import Languages from '../Languages/Languages'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'

class Resume extends Component {
    render() {
        return(
            <div className='container__resume'>
                <div className='resume__basics'>
                    <div className='image__profile'>
                        <img src={ImageProfile} alt="Image Profile" />
                    </div>
                    <div className="__title">
                        <p className="profile__name">{ResumeData.basics.name}</p>
                        <p className="profile__label">{ResumeData.basics.label}</p>
                    </div>
                    <Languages />
                    <Contact />
                </div>
                <div className='resume__body'>
                    <div className='resume__summary'>{ResumeData.basics.summary}</div>
                    <div className='experience__'>
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;