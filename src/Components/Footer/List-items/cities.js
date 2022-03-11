import React from "react";
import './section.css';

const city = (props)=>{
    const {h1,links1,links2,links3,links4}=props
    return(
        <div>
            <div className="section">
                <div className="col1">
                    <h5>{h1}</h5>
                    <nav>
                        <ul className="ul">
                            {links1.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                        </ul>
                    </nav>
                </div>
                <div className="col2">
                    <nav>
                        <ul>
                            {links2.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                        </ul>
                    </nav>
                </div>
                <div className="col3">
                    <nav>
                        <ul>
                            {links3.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                        </ul>
                    </nav>
                </div>
                <div className="col4">
                    <nav>
                        <ul>
                            {links4.map(link => <li><a href={link.url}>{link.text}</a></li>)}
                        </ul>
                    </nav>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default city;