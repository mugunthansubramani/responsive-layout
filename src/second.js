import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Second(){
    return(
        <>
        <div className="container-fluid bg-primary">
        <div className="container">
        <div className=" col-lg-12 row  text-center">
            <h1>WELCOME TO OUR WEBSITE </h1>
        </div>
        <div className=" col-lg-12 row">
            <h4>A welcome is a kind of greeting designed to introduce a person to a
                 new place or situation, and to make them feel at ease. The term 
                 can similarly be used to describe the feeling of being accepted
                  on the part of the new person. In some contexts, a welcome is 
                  extended to a stranger to an area or a household. "The concept 
                  of welcoming the stranger means intentionally building into the 
                  interaction those factors that make others feel that they belong,
                   that they matter, and that you want to get to know them</h4>
        </div>
        <div className=" col-lg-12 row  text-center">
            <div className="col-lg-5"></div>
            <div className="col-lg-2">
            <input type="button" value="read more" className="secbu23 " ></input></div>
            <div className="col-lg-5"></div>
        
        </div>
        </div>
        </div>

        </>
    );
    
}