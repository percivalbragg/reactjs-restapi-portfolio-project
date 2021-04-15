import React from 'react'
import { CertificationData } from '../data/CertificationData'

const Certification = () => {

    return (
        <div className='container my-5'>
            <h4 className='heading'>Certifications</h4>
            <div className="container">
                {CertificationData.map((cert, index) => {
                    return (<div key={index}>
                        <h6 className='heading'>{cert.certificate}</h6>
                        <p>{cert.body}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Certification;