
import React from "react" ;
import ReactDOm from "react-dom";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero" ;
import Card from "../Components/Card";

import Icon from "../Images/Star 1-1.png";
import Image from "../Images/image 12.png";

export default function Nabar() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={Image}
        icon={Icon}
        rating="6"
        reviewCount="(6)"
        country="Nairobi"
        title="Life Lessons with Kattie Zaferas"
        price="136"

       />
    </div>
  )
}

