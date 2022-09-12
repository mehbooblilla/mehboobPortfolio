import React from 'react'
import '../Styles/Portfolio.css'
import gymImg from '../assets/gym.png'
import pizzaImg from '../assets/pizza.png'
import fypImg from '../assets/fyp.png'
import { Link } from 'react-router-dom';
const pizalink = 'https://pizamenu.netlify.app/'
function Portfolio() {
    return (
        <>
            <header >
                <div className='headerComponent'>
                    <h1>Project</h1>
                </div>
            </header>
            <div className='row cardComponent '>

                <div className="card hotelCard" style={{ width: "18rem" }} >
                    <a href="https://pizamenu.netlify.app/" target="_blank" className='link'>

                        <div className='overflow'>
                            <img src={pizzaImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h4>Pizza Shop</h4>
                        </div>

                    </a>
                </div>
                <div className="card hotelCard" style={{ width: "18rem" }} >
                    <a href="https://lillafitness.netlify.app/" target="_blank" className='link'>
                        <div className='overflow'>
                            <img src={gymImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h4>Gym Website</h4>
                        </div>
                    </a>
                </div>
                <div className="card hotelCard" style={{ width: "18rem" }} >
                    <Link to="/FypProject" className='link'>
                        <div className='overflow'>
                            <img src={fypImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h4>Tourism Website</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Portfolio