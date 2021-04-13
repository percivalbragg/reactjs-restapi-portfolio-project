import React from 'react';
import { MajorStrengthsData } from '../data/MajorStrengthsData'

const renderMajorStrengths = (strength, index) => {
    return (
        <li key={index}>{strength}</li>
    )
}
const MajorStrengths = () => {
    return (
        <div id='strengths' className='container about my-5'>
            <h4 className='heading'>Major Strengths</h4>
            <ul>
                {MajorStrengthsData.map(renderMajorStrengths)}
            </ul>
        </div>
    );
}

export default MajorStrengths;