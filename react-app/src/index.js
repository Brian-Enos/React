

import React from "react" ;
import ReactDOM from "react-dom" ;

function MyHeadrer() {
  return (
    <header>
      <h1>Hello React, I'm not new here Hehe!</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </header>
  )
}

ReactDOM.render(<myHeader />, document.getElementById("root"));