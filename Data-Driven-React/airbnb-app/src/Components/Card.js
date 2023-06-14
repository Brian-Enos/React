

import React from "react" ;
import ReactDOM from "react-dom";

import StarIcon from "../Images/Star 1.png";
import Image from "../Images/image 12.png" ;

export default function() {
  return (
    <div className="card">
      <img src={Image} />
      <div className="card-stats">
        <img src={StarIcon} />
          <span>5.0</span>
          <span>(6) . </span>
          <span>USA</span>
      </div>
      <p>Life Lessons with kattie Zaferes </p>
      <p>From $136 / person</p>
    </div>
  )
}