import React from 'react'
import { ExperienceData } from '../data/ExperienceData'
import { Card } from 'react-bootstrap';

const renderExperience = (card, index) => {
    return (
        <Card /*style={{ width: "18rem" }}*/ key={index} className="my-3">
            <Card.Body>
                <Card.Title>{card.company}</Card.Title>
                <Card.Text as="div">
                    <div>{card.title}</div>
                    <div>{card.dates}</div>
                    <ul>
                        {
                            card.responsibilities.map((resp, index) => {
                                return (<li key={index}>{resp}</li>);
                            })
                        }
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const ProfessionalExperience = () => {

    return (
        <div id='experience' className='container'>
            <h4 className='heading'>Professional Experience</h4>
            {ExperienceData.map(renderExperience)}
        </div>
    )
}

export default ProfessionalExperience;