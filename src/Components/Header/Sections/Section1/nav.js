import React from "react";

const Nav = ()=>{
    return (
        <div className="nav">
            <div>
                <img className="logo-img" width="200" height="60" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="swiggy-logo" />
            </div>
            <div>
                <button className="btn btn1">Login</button>
                <button className="btn btn2">Sign Up</button>
            </div>
        </div>
    )
}

export default Nav;