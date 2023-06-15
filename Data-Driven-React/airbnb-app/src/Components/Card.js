

import React from "react" ;
import ReactDOM from "react-dom";

/* import StarIcon from "../Images/Star 1.png";
import Image from "../Images/image 12.png" ; */
import CSS from "../CSS/styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src={props.icon} className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">{props.reviewCount}. </span>
          <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From $ {props.price}</span> / person</p>
    </div>
  )
}