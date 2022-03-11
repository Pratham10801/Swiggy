import React from "react";
import Feature1 from "./Features-List/Feature1";
import Feature2 from "./Features-List/Feature2";
import Feature3 from "./Features-List/Feature3";
import './Features-List/Feature.css';



const Feature = ()=>{
    const data1={
        heading:"No Minimum Order",
        description:"Order in for yourself or for the group, with no restrictions on order value"
    }
    const data2={
        heading:"Live Order Tracking",
        description:"Know where your order is at all times, from the restaurant to your doorstep"
    }
    const data3={
        heading:"Lightning-Fast Delivery",
        description:"Experience Swiggy's superfast delivery for food delivered fresh & on time"
    }

    return (
        <div className="feature-container">
            <div className="features">
                <Feature1 data={data1}/>
                <Feature2 data={data2}/>
                <Feature3 data={data3}/>
            </div>
        </div>
    )
}

export default Feature;