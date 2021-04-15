import React from 'react'
import { EducationData } from '../data/EducationData'

const Education = () => {

    return (
        <div id='education' className='container my-5'>
            <h4 className='heading'>Education</h4>
            <div className='container'>
                {EducationData.map((element, index) => {
                    return (<div key={index}>
                        <h6 className='heading'>{element.course}</h6>
                        <p>{element.school}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Education;