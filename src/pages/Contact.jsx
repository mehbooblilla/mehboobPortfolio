import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Styles/Contact.css'

function Contact() {

    return (
        <div>
            <header >
                <div className='headerComponent'>
                    <h1>Contacts</h1>
                </div>
            </header>
            <div className='contactComponent'>
                <div className="container">
                    <HomeIcon />
                    <label>Islamabad, Pakistan</label>
                    <br />
                    <AlternateEmailIcon />
                    <label>mehbooblilla007@gmail.com</label>
                    <div className='icons' >
                        <a className='icon' href="https://github.com/mehbooblilla" target="-blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>
                        <a className='icon' href="https://www.linkedin.com/in/muhammad-mehboob-9b20bb184" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large' /></a>
                        <a className='icon' href="https://twitter.com/mehbooblilla007" target="_blank" rel="noreferrer"><TwitterIcon fontSize='large' /></a>
                    </div>

                </div>



            </div>
        </div >
    )
}

export default Contact
