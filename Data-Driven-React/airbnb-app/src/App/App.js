
import React from "react" ;
import ReactDOm from "react-dom";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero" ;
import Card from "../Components/Card";

import Icon from "../Images/Star 1-1.png";
import Image from "../Images/image 12.png";

import Data from "../Components/Data";

export default function Nabar() {
  console.log(Data);
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={Image}
        icon={Icon}
        rating={5}
        reviewCount="(6)"
        location="Nairobi"
        title=""
        price={136}

       />
    </div>
  )
}

