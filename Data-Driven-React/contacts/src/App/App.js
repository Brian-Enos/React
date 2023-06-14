import React from "react";
import ReactDOM from "react-dom";
import Contacts from "../Components/Contacts";
import FirstContact from "../Images/contact-1.png";
import SecondContact from "../Images/contact-2.png";
import ThirdContact from "../Images/contact-3.jpg";
import FourthContact from "../Images/contact-4.png";
import MailIcon from "../Images/mail-icon.png";
import PhoneIcon from "../Images/phone-icon.png";
import CSS from "../CSS/styles.css";

function App(props) {
  return (
    <div>
      {/* First contact group */}
      <div>
        <Contacts
          img={FirstContact}
          name="Mr. Whiskerson"
          phone="(212) 555-2345"
          email="fluf@me.com"
        />

        <Contacts
          img={SecondContact}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluf@me.com"
        />
      </div>

      {/* Second contact group */}
      <div>
        <Contacts
          img={ThirdContact}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />

        <Contacts
          img={FourthContact}
          name="Pumpkins"
          phone="(212) CAT KING"
          email="pumpkins@hotmail.com"
        />
      </div>
    </div>
  );
}

export default App;
