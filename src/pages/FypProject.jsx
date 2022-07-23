import React from 'react'
import fypImg from '../assets/fyp.png'
import fypImg1 from '../assets/fyp1.png'
import fypImg2 from '../assets/fyp2.png'
import fypImg3 from '../assets/fyp3.png'



function FypProject() {
    return (
        <div className='container' style={{ marginTop: "30px" }}>
            <div className='row' >
                <img style={{ marginBottom: "20px" }} src={fypImg} alt="" />
                <img style={{ marginBottom: "20px" }} src={fypImg1} alt="" />
                <img style={{ marginBottom: "20px" }} src={fypImg2} alt="" />
                <img style={{ marginBottom: "20px" }} src={fypImg3} alt="" />
            </div>

        </div>
    )
}

export default FypProject