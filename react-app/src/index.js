

import React from "react" ;
import ReactDOM from "react-dom" ;

function MyHeader() {
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

ReactDOM.render(<MyHeader />, document.getElementById("root"));