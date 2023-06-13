import React from "react" ;
import ReactDOm from "react-dom";
import CSS from "../CSS/styles.css";
import Logo from "../Images/air-bnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} className="logo"></img>
    </nav>
  )
}