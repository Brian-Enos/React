import React from "react" ;
import ReactDOM from "react-dom" ;
import Joke from "../Components/Joke";

function App() {
  return (
    <div>
      <Joke 
        setup="I got my daughter a fridge for her birthday "
        punchline="I can't wait to see her face light up when she opens it "
      />,

      <Joke 
        setup="How did the hacker escape the polive cell?"
        punchline="He just ransomware!"
      />,

      <Joke 
        setup="Why don't pirates travel on mountain roads? "
        punchline="Scurvy"
      />

      <Joke 
        setup="What's the best thing about Switzerland? " 
        punchline="I don't know, but the flag is a big plus!"
      />

    </div>
  )
}

export default App ;