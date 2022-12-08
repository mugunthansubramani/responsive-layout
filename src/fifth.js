import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faRecycle } from "@fortawesome/free-solid-svg-icons";

export default function Third(){
    return(
        <>
        <div className="container-fluid pt-4 ">
        <div className="row ">
            <div className="col-lg-3  text-center   bg-primary">
                
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white pt-2" fontSize="50px" />
                <h1 className="text-center pt-2">12+</h1>
                <h5 className="text-center pt-2">Years of experience</h5>
            </div>
            
            
                <div className="col-lg-3 text-center bg-primary">
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white  pt-2" fontSize="50px" />
                <h1 className="text-center pt-2">999+ </h1>
                <h5 className="text-center pt-2">Completed projects</h5>
            </div>
            <div className="col-lg-3 text-center bg-primary">
                
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white   pt-2" fontSize="50px" />
                <h1 className="text-center pt-2">480+</h1>
                <h5 className="text-center pt-2">Total clients</h5>
            </div>
            <div className="col-lg-3 text-center bg-primary">
                
                <FontAwesomeIcon icon={faClockRotateLeft} className="n1 text-white   pt-2" fontSize="50px" />
                <h1 className="text-center pt-2">15+</h1>
                <h5 className="text-center pt-2">Award won</h5>
            </div>
            </div>
            
        </div>


        </>
    );
}