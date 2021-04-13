import React from 'react'
import { CertificationData } from '../data/CertificationData'
import { Card } from 'react-bootstrap';

const renderCertification = (cert, index) => {
    return (
        <div className='container'>
            <h6 key={index} className='heading'>{cert.certificate}</h6>
            <p>{cert.body}</p>
        </div>
    )
}

const Certification = () => {

    return (
        <div className='container my-5'>
            <h4 className='heading'>Certifications</h4>
            {CertificationData.map(renderCertification)}
        </div>
    )
}

export default Certification;