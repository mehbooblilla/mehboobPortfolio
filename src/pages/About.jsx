import React from 'react'
import '../Styles/About.css'
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import resume from '../assets/Mehboob-Resume.pdf'

function About() {
    return (
        <>


            <header >
                <div className='headerComponent'>
                    <h1>About Me</h1>
                </div>
            </header>
            <div className="container">
                <h1>I'm Muhammad Mehboob</h1>
                <h3>Web Developer</h3>
                <Link className='downLink' to={resume} target="_blank" download><DownloadIcon />Resume</Link>


            </div>
            <div className="container">
                <hr />
                <h1>Education</h1>
                <h2>Bachelor of Science in Software Engineering</h2>
                <p>International Islamic University, Islamabad (IIUI)</p>
                <hr />
            </div>
            <div className='container'>
                <h1>Skills</h1>
                <div>
                    <button className='skills'>React JS</button>
                    <button className='skills' >JavaScript</button>
                    <button className='skills' >HTML</button>
                    <button className='skills'>CSS</button>
                    <button className='skills' >Bootstrap</button>
                    <button className='skills' >Material UI</button>
                    <button className='skills' >Github</button>
                    <button className='skills'>Font Awesome</button>
                    <hr />
                </div>
            </div>

        </>
    )
}

export default About
