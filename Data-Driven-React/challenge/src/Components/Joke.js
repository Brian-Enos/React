
import React from "react";
import ReactDOM from "react-dom" ;

export default function Joke(props) {
  return (
    <div>
      <h1>Setup: {props.setup}</h1>
      <h2>The Punchline is: {props.punchline}</h2>
    </div>
  )
}