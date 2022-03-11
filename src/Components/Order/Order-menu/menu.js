import React from "react";
import PlayStore from '../../../Assests/playstore.jpeg';
import GooglePlay from '../../../Assests/googleplay.jpeg'; 

const Menu = (props)=>{
    const {heading,description}=props
    return(
        <div className="menu">
            <h3 className="heading">{heading}</h3>
            <p className="para">{description}</p>
            <div className="images">
                <a href="/img1"><img className="stores" height="60" width="200" src={GooglePlay} alt="play-store"/></a>
                <a href="/img2"><img className="stores" height="60" width="200" src={PlayStore}  alt="app-store"/></a>
            </div>
        </div>
    )
}

export default Menu;