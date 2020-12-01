import React, { Component } from 'react';
import ResumeData from '../Resume/ResumeData.json'
import './Experience.scss'

class Experience extends Component {
    render() {
        return (
            <div className='__work'>
                <h3>Experience</h3>
                {ResumeData.work.map((item, index) => {
                    return (
                        <ul className='work__experience' key={index}>
                            <div className='date'>
                                <li>{item.startDate}</li>
                                <li>{item.endDate}</li>
                            </div>
                            <li>{item.company}</li>
                            <li>{item.position}</li>
                            <li>{item.summary}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default Experience;