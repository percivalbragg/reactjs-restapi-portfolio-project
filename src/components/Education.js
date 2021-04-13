import React from 'react'
import { EducationData } from '../data/EducationData'
import { Card } from 'react-bootstrap';

const renderEducation = (element, index) => {
    return (
        <div className='container'>
            <h6 className='heading'>{element.course}</h6>
            <p>{element.school}</p>
        </div>
    )
}

const Education = () => {

    return (
        <div id='education' className='container my-5'>
            <h4 className='heading'>Education</h4>
            {EducationData.map(renderEducation)}
        </div>
    )
}

export default Education;