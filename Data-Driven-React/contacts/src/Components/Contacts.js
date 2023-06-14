import React from "react" ;
import ReactDOM from "react-dom";
import FirstContact from "../Images/contact-1.png";


export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contact-card">
       {/*  //first contact begins here */}

        <img src={FirstContact} />
        <h3>Mr. Whiskerson</h3>
      </div>
    </div>
  )
}