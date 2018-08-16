import React from "react";
import "./Card.css";
const Card = props => (
    <div key={props.id} 
        className="col-sm-4 chi-card" 
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.getChihuahua(props.id)}
        >
        <p>{props.name}</p>
    </div>
    
);

export default Card;