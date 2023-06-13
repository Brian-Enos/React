

import React from "react" ;
import ReactDOM from "react-dom" ;
import Styles from "../CSS/styles.css";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun Facts About React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke </li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powre thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}