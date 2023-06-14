import React from "react" ;
import ReactDOM from "react-dom";
import FirstContact from "../Images/contact-1.png";
import MailIcon from "../Images/mail-icon.png";
import PhoneIcon from "../Images/phone-icon.png";


export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contact-card">
       {/*  //first contact begins here */}

        <img src={FirstContact} />

        <h3>Mr. Whiskerson</h3>

        <div className="info-group">
          <img src={PhoneIcon} />
          <p>(212) 555-1234</p>
        </div>

        <div className="info-group">
          <img src={MailIcon} />
          <p>mr.whiskerz@catnap.meow</p>
        </div>

      </div>

    </div>
  )
}