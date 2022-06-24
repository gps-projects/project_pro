import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {GiBirdMask} from 'react-icons/gi';


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div class="container px-4">
                    <a class="navbar-brand" href="#page-top"><span className='head'>Bird </span>  <GiBirdMask color="gray" fontSize="1.5em" className='pr-5'/>racker</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link as={Link} to="/" className="nav-link">
                                Home
                            </Link></li>
                            <li class="nav-item"><Link as={Link} to="/About" className="nav-link">
                                About
                            </Link></li>
                            <li class="nav-item"><Link as={Link} to="/Tracking" className="nav-link">
                                Tracking
                            </Link></li>
                            <li class="nav-item"><Link as={Link} to="/Policy" className="nav-link">
                                Policy
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        </div>
    )
}
