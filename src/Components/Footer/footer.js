import React from "react";
import Service from "./List-items/services";
import './footer.css';
import City from "./List-items/cities";
import Logo from "./List-items/social";

const footer=()=>{
    const companyLinks=[
        {url:"/aboutUs",text:"About us" },
        {url:"/team",text:"Team" },
        {url:"/careers",text:"Careers" },
        {url:"/swiggyBlog",text:"Swiggy Blog" },
        {url:"/bugBounty",text:"Bug Bounty" },
        {url:"/swiggySuper",text:"Swiggy Super" },
        {url:"/swiggyCorporate",text:"Swiggy Corporate" },
        {url:"/swiggyInstamart",text:"Swiggy Instamart" }
    ]

    const contactLinks=[
        {url:'/help',text:'Help & Support'},
        {url:'/partner',text:'Partner with us'},
        {url:'/ride',text:'Ride with us'}
    ]

    const legalLinks=[
        {url:'/terms',text:'Terms & Conditions'},
        {url:'/refund',text:'Refund & Cancellation'},
        {url:'/privacy',text:'Privacy Policy'},
        {url:'/cookies',text:'Cookie Policy'},
        {url:'/offer',text:'Offer Terms'},
        {url:'/phising',text:'Phising & Fraud'}
    ]

    const A_cities=[
        {url:'/abohar',text:'Abohar'},
        {url:'/adilabad',text:'Adilabad'},
        {url:'/adityapur',text:'Adityapur'},
        {url:'/adoni',text:'Adoni'},
        {url:'/agartala',text:'Agartala'}
    ]
    const D_cities=[
        {url:'/dausa',text:'Dausa'},
        {url:'/davanagere',text:'Davanagere'},
        {url:'/dehradun',text:'Dehradun'},
        {url:'/dehri',text:'Dehri'},
        {url:'/delhi',text:'Delhi'}
    ]
    const K_cities=[
        {url:'/kishanganj',text:'Kishanganj'},
        {url:'/kishangarh',text:'Kishangarh'},
        {url:'/kochi',text:'Kochi'},
        {url:'/kodaikanal',text:'Kodaikanal'},
        {url:'/kolar',text:'Kolar'}
        
    ]
    const P_cities=[
        {url:'/pudu',text:'Pudukkottai'},
        {url:'/pune',text:'Pune'},
        {url:'/puri',text:'Puri'},
        {url:'/purnea',text:'Purnea'},
        {url:'/purulia',text:'Purulia'}
    ]
    return(
        <div className="footer">
            <Service h1="Company" links1={companyLinks}
                     h2="Contact" links2={contactLinks}
                     h3="Legal" links3={legalLinks}/>
            <City h1="We deliver to" links1={A_cities}
                links2={D_cities} links3={K_cities} links4={P_cities}/>
            <Logo/>
        </div>
    )
}

export default footer;