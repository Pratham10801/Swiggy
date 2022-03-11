import React from "react";

const List = (props)=>{
    const {cities}=props;
    return(
        <div>
            <ul className="list">
                {cities.map(city => <li>{city}</li>)}
            </ul>
        </div>
    )
}

export default List;