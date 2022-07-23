import React from 'react'
import { Link } from 'react-router-dom';
function NavbarComponent() {
    return (
        <div>
            <nav style={{ boxShadow: "0px 3px 17px 0px rgba(0,0,0,0.63)" }} class="navbar navbar-expand-lg ">
                <div class="container-fluid">

                    <Link to="/" style={{ border: "1px solid black", borderRadius: "50px", color: "white", backgroundColor: "blue" }} class="navbar-brand">MM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                        <ul style={{ fontWeight: 600 }} class="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/About" class="nav-link active" aria-current="page" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Contact" class="nav-link active" aria-current="page" >Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Portfolio" class="nav-link active" aria-current="page" >Portfolio</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent