import React, { Component } from 'react';
import ResumeData from '../Resume/ResumeData.json'

class Education extends Component {
    render() {
        return (
            <div className='experience__education'>
                <h3>Education</h3>
                {ResumeData.education.map((item, index) => {
                    return (
                        <ul className='education__experience' key={index}>
                            <div className='date'>
                                <li>{item.startDate}</li>
                                <li>{item.endDate}</li>
                            </div>
                            <li>{item.institution}</li>
                            <li>{item.area}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default Education;