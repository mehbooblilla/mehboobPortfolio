import React from 'react'
import '../Styles/Portfolio.css'
import gymImg from '../assets/gym.png'
import pizzaImg from '../assets/pizza.png'
import fypImg from '../assets/fyp.png'
import { Link } from 'react-router-dom';
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
                    <Link to="/PizzaProject" className='link'>
                        <div className='overflow'>
                            <img src={pizzaImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h3>Hotels</h3>
                        </div>
                    </Link>
                </div>
                <div className="card hotelCard" style={{ width: "18rem" }} >
                    <Link to="/GymProject" className='link' >
                        <div className='overflow'>
                            <img src={gymImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h3>Townhouses</h3>
                        </div>
                    </Link>
                </div>
                <div className="card hotelCard" style={{ width: "18rem" }} >
                    <Link to="/FypProject" className='link'>
                        <div className='overflow'>
                            <img src={fypImg} className="card-img" alt="..." />
                        </div>
                        <div class="card-body">
                            <h3>Guest Houses</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Portfolio