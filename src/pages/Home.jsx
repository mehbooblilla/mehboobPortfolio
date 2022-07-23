import React from 'react'
import profileImg from '../assets/profilePic.jpg'
import '../Styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <div className='homeComponent'>
                    <p>Hey There! </p>
                    <div className="row">
                        <div className="col-6 ">
                            <h1 >I AM MUHAMMAD MEHBOOB</h1>
                            <h3>I make awesome websites</h3>
                            <p>Web Developer</p>
                        </div>
                        <div className="col-6 imgComponent">
                            <img style={{ borderRadius: "50%" }} src={profileImg} alt="profile Image" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
