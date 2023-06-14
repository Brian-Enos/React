

import React from "react" ;
import ReactDOM from "react-dom";

import StarIcon from "../Images/Star 1.png";
import Image from "../Images/image 12.png" ;
import CSS from "../CSS/styles.css";

export default function Card() {
  return (
    <div className="card">
      <img src={Image} className="card--image" />
      <div className="card--stats">
        <img src={StarIcon} className="card--star" />
          <span>5.0</span>
          <span className="gray">(6) . </span>
          <span className="gray">USA</span>
      </div>
      <p>Life Lessons with kattie Zaferes </p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}