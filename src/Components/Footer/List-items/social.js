import React from "react";
import './section.css';


const Logo=(props)=>{
    
    return(
        <div>
            <div className="social-section">
                <div className="col1">
                    <a href="/swiggy"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" width="150"  alt="swiggy-logo"/></a>
                </div>
                <div className="col2">
                    <p>© 2021 Swiggy</p>
                </div>
                <div className="col3">
                    <div className="social-logo">
                         <a href="/facebook"><img  className="logos" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" height="24" width="24"  alt="Facebook-logo"/></a>
                         <a href="/pinterest"><img className="logos" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" height="24" width="24" alt="Pinterest-logo"/></a>
                         <a href="/instagram"><img className="logos" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" height="24" width="24"  alt="Instagram-logo"/></a>
                         <a href="/twitter"><img className="logos" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" height="24" width="24"  alt="Twitter-logo"/></a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;

