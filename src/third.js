import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faRecycle } from "@fortawesome/free-solid-svg-icons";

export default function Third(){
    return(
        <>
        <div className="container-fluid bg-primary">
        <div className="container pt-4 ">
        <div className="row ">
            <div className="col-lg-4  text-center   bg-primary">
                
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white pt-2" fontSize="50px" />
                <h3 className="text-center pt-2">OUR STORY</h3>
                <h5 className="text-center pt-2">Indications that visitors are welcome can occur at different levels.
                     For example, a welcome sign, at the national, state, or municipal level,
                      is a road sign at the border of a region that introduces or welcomes
                       visitors to the region</h5>
            </div>
            
            
                <div className="col-lg-4 text-center bg-dark text-white">
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white  pt-2" fontSize="50px" />
                <h3 className="text-center pt-2">OUR MISSION</h3>
                <h5 className="text-center pt-2">Indications that visitors are welcome can occur at different levels.
                     For example, a welcome sign, at the national, state, or municipal level,
                      is a road sign at the border of a region that introduces or welcomes
                       visitors to the region</h5>
            </div>
            
            
            <div className="col-lg-4 text-center bg-primary">
                
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white   pt-2" fontSize="50px" />
                <h3 className="text-center pt-2">OUR VISSION</h3>
                <h5 className="text-center pt-2">Indications that visitors are welcome can occur at different levels.
                     For example, a welcome sign, at the national, state, or municipal level,
                      is a road sign at the border of a region that introduces or welcomes
                       visitors to the region</h5>
            </div>
            </div>
            
        </div>
        </div>


        </>
    );
}