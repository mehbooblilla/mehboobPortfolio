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
            <div className='components container' >

                <div className='row cardComponent '>
                    <div className='col-4'>
                        <Link className='link' to="/PizzaProject" >
                            <div className="card hotelCard" >
                                <div className='overflow'>
                                    <img src={pizzaImg} className="card-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h3>Pizza Shop</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <Link className='link' to="/GymProject" >
                            <div className="card hotelCard" >

                                <div className='overflow'>
                                    <img src={gymImg} className="card-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h3>Gym Website</h3>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <Link className='link' to="/FypProject" >
                            <div className="card hotelCard" >

                                <div className='overflow'>
                                    <img src={fypImg} className="card-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h3>Tourism website (FYP)</h3>
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio