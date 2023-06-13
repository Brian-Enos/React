

import React from "react" ;
import ReactDOM from "react-dom";
import Image from "../Images/Group 77.png";

export default function Hero() {
  return (
    <section>
      <img src={Image} className="hero-photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led bt one-of-a-kind  hosts-all without leaving home</p>

    </section>
  )
}