import React from "react";
import Nav from './Section1/nav';
import './Section1/section1.css';
import Form from "./Section1/form";
import List from './Section1/list';

const Section1 = (props) =>{
     const Famous_cities=["Ahmedabad","Banglore","Chennai",
                         "Delhi","Gurgaon","Hyderabad","Kolkata","Mumbai",
                        "Pune","& more."];
    
    return(   
        <div className="section1">
            <Nav/>
            <h2 id="ani" className="animation" ><span></span></h2>
            <h3>{props.h3}</h3>
            <Form placeholder="Enter your delivery location"/>
            <h4>{props.h4}</h4>
            <List cities={Famous_cities}/>
        </div>
    )
}

export default Section1;