import React from 'react'
import { AboutData } from '../data/AboutData'

function AboutMe() {
    return (
        <div id='about' className='container about my-5'>
            <h4 className='heading'>About Me</h4>
            <p>{AboutData}</p>
        </div>
    )
}

export default AboutMe
