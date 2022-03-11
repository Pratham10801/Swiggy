import React,{useState} from "react";


const Form= (props)=>{
    const [state,setState]=useState('');

    return(
        <div className="form">
            <div className="location">
                <input type="text" className="input" maxlength="30" 
                placeholder={props.placeholder} 
                onChange={(event)=>{setState(event.target.value)}}/>
                <button id="locate-btn"className="span"><img width="20"  alt="icon" src="https://cdn4.iconfinder.com/data/icons/complete-version-1/1024/location4-512.png"/>Locate Me</button>
                
            </div>
            <button className="button">Find food</button>
        </div>
    )
}

export default Form;