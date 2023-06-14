import React from "react" ;
import ReactDOM from "react-dom";
import Contacts from "../Components/Contacts" ;
import FirstContact from "../Images/contact-1.png";
import SecondContact from "../Images/contact-2.png";
import ThirdContact from "../Images/contact-3.jpg";
import FourthContact from "../Images/contact-4.png";
import MailIcon from "../Images/mail-icon.png";
import PhoneIcon from "../Images/phone-icon.png";
import CSS from "../CSS/styles.css";




 export function App() {
  return (
    <Contacts
      img={FirstContact}
      name="Mr. Whiskerson"
      phone="(212) 555-2345"
      emai="fluf@me.com"
    /> ,

    <Contacts 
      img={SecondContact}
      name="Fluffykins"
      phone="(212) 555-2345"
      emai="fluf@me.com"

     />,
     
     <Contacts 
      img={ThirdContact}
      name="Felix"
      phone="(212) 555-4567"
      emai="thecat@hotmail.com"

     />,


     <Contacts 
      img={FourthContact}
      name="Pumpkins"
      phone="(212) CAT KING"
      emai="pumpkins@hotmail.com"

     />
  )
}