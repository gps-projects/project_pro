import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
import {GiHummingbird} from 'react-icons/gi';

export default function Home() {
  return (
    <div>
        {/* <h1>Home</h1> */}
        <div class="full">
        <div class="container">
            <div class="inside">
            <div className="text-center yellow"><h2>WELCOME TO THIS <br/>POEWRFULL WORLD</h2></div>
            <div className='flex-row'><GiHummingbird color="#333232" fontSize="15em" className='pr-5'/>
            <div className="text-center text">TOPIC:-  Bird Tracking movement framework Analysis using graph</div>
            </div>
            
                  
                 
                <div class="button  text-center st">
                  
                <Link as={Link} to="/Tracking" className="nav-link"><button class="btn-outline  text-center">START TRACKING
                    
                             </button></Link>
                </div>

            </div>
        </div>
    </div>

      
    </div>
  )
}
