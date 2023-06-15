import React from "react";
import ReactDOM from "react-dom";
import FirstContact from "../Images/contact-1.png";
import SecondContact from "../Images/contact-2.png";
import ThirdContact from "../Images/contact-3.jpg";
import FourthContact from "../Images/contact-4.png";
import MailIcon from "../Images/mail-icon.png";
import PhoneIcon from "../Images/phone-icon.png";
import CSS from "../CSS/styles.css";

export default function Contacts(props) {
  console.log(props);
  return (
    <div className="contacts">

      <div className="contact-card">

        {/*  Contact Group  begins here */}

        <img src={props.img} />

        <h3>{props.name}</h3>

        <div className="info-group">

          <img src={PhoneIcon} />

          <p>{props.phone}</p>
        </div>

        <div className="info-group">

          <img src={MailIcon} />

          <p>{props.email}</p>

        </div>
      </div>
    </div>
  );
}
