import "./cardstyle.css"
import React from "react";





const Card = ({ lodging }) => {
    return (
        <li className="card_block">
            <div className="card">
                <img className="card_img" src={lodging.cover} alt={lodging.title} />
                <p className="card_para">{lodging.title}</p>
            </div>
        </li>
    );
};



export default Card;