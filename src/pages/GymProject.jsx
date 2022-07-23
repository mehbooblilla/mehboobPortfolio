import React from 'react'
import gymImg1 from '../assets/gym1.png'
import gymImg2 from '../assets/gym2.png'
import gymImg3 from '../assets/gym3.png'
import gymImg4 from '../assets/gym4.png'
function GymProject() {
    return (
        <div className='container' style={{ marginTop: "30px" }}>
            <div className='row' >

                <img style={{ marginBottom: "20px" }} src={gymImg1} alt="" />
                <img style={{ marginBottom: "20px" }} src={gymImg3} alt="" />
                <img style={{ marginBottom: "20px" }} src={gymImg2} alt="" />
                <img style={{ marginBottom: "20px" }} src={gymImg4} alt="" />
            </div>

        </div>
    )
}

export default GymProject