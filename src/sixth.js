import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pc1 from './one.jpg'
import pc2 from'./two.jpg'
import pc3 from './three.jpg'
import pc4 from'./four.jpg'
import pc5 from './five.jpg'
import pc6 from'./six.jpg'
import './six.css';


export default function Sixth(){
    return(
        <>
        <div className="container-fluid bg-primary">
        <div className="container bg-white">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>OUR PORTFOLIO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                   <h6>Another community tradition, the welcome wagon, a phrase that
                     originally referred to an actual wagon containing a collection of 
                     useful gifts collected from residents of an area to welcome new people 
                     moving to that area.</h6>
                </div>
                <div className="col-lg-1"></div>
                
            </div>
            <div className="row" mt-4 >
               
                <div className="col-lg-2"></div>
                <div className="col-lg-2"> <h6>All</h6></div>    
                <div className="col-lg-2"><h6>WEB DEVELOPMENT</h6></div>  
                <div className="col-lg-2"><h6>GAME DEVELOPMENT</h6></div> 
                <div className="col-lg-2"><h6>APP DEVELOPMENT</h6> </div> 
                <div className="col-lg-2"></div>
               
            </div>
            <div className="row">
                <div className="col-lg-4"> <img className="res "  src={pc1} alt="first img"/></div>
                <div className="col-lg-4"> <img className="res " src={pc2} alt="second img"/></div>    
                <div className="col-lg-4"><img className="res " src={pc3} alt="third img"/></div>
            </div>  
            <div className="row">
                <div className="col-lg-4"><img className="res" src={pc4} alt="fourth img"/></div> 
                <div className="col-lg-4"><img className="res " src={pc5} alt="fifth img"/></div> 
                <div className="col-lg-4"><img className="res" src={pc6} alt="sixth img"/></div>
            </div>

            </div>
        </div>
        
        </>
    );
}
