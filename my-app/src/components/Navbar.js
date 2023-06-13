

import React from "react" ;
import ReactDOM from "react-dom" ;
import Image from "../Images/react-icon-small.png" ;
import Styles from "../CSS/styles.css" ;

export default function Navbar() {
  return (
    <nav>
      <img src={Image} />
      <h3>React Facts</h3>
      <h4>React Course- Project 1</h4>
    </nav>
  )
}

