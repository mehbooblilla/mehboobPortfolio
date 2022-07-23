import React from 'react'
import pizzaImg from '../assets/pizza.png'
import pizzaImg1 from '../assets/pizza1.png'
import pizzaImg2 from '../assets/pizz2.png'
import pizzaImg3 from '../assets/pizza3.png'
function PizzaProject() {
    return (
        <div className='container ' style={{ marginTop: "30px" }}>
            <div className='row' >

                <img style={{ marginBottom: "20px" }} src={pizzaImg} alt="" />
                <img style={{ marginBottom: "20px" }} src={pizzaImg1} alt="" />
                <img style={{ marginBottom: "20px" }} src={pizzaImg2} alt="" />
                <img style={{ marginBottom: "20px" }} src={pizzaImg3} alt="" />
            </div>

        </div>
    )
}

export default PizzaProject