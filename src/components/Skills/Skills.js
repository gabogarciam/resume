import React, { Component } from 'react';
import ResumeData from '../Resume/ResumeData.json'
import './Skills.scss'

class Skills extends Component {
    render() {
        return (
            <div className='__skills'>
                        <h2>Skills</h2>
                        <ul>
                            {ResumeData.skills.map((item, index) => {
                                return (
                                    <li key={index}>{item.name}</li>
                                )
                            })}
                        </ul>
            </div>
        )
    }
}

export default Skills;