import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axiosInstance from '../services/ExperienceService';

const renderExperience = (experience, index) => {
    return (
        <Card key={index} className="my-3">
            <Card.Body>
                <Card.Title>{experience.company}</Card.Title>
                <Card.Text as="div">
                    <div>{experience.title}</div>
                    <div>{experience.dates}</div>
                    <ul>
                        {
                            experience.responsibilities.map((resp, index) => {
                                return (<li key={index}>{resp.responsibility}</li>);
                            })
                        }
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const ProfessionalExperience = () => {

    const [experiences, setExperiences] = useState([]);

    const getExperiences = async () => {
        const response = await axiosInstance.get("/experiences").catch((err) => console.log("err", err));

        if (response && response.data) setExperiences(response.data)
    };

    useEffect(() => {
        getExperiences();
    }, []);

    return (
        <div id='experience' className='container'>
            <h4 className='heading'>Professional Experience</h4>
            {experiences.map(renderExperience)}
        </div>
    )
}

export default ProfessionalExperience;