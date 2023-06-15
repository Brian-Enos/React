import React from "react" ;
import ReactDOM from "react-dom" ;
import Joke from "../Components/Joke";

function App() {
  return (
    <div>
      <Joke 
        setup="Evening "
        punchline="Jokes in the evening  are always funny "
      />,

      <Joke 
        setup="This should have been a setup"
        punchline="No Joke Today  "
      />,

      <Joke 
        setup="Afternoon "
        punchline="Too Tired for a joke "
      />

      <Joke 
        setup="Morning" 
        punchline="There are no Jokes in the morning, Only serious work "
      />

    </div>
  )
}

export default App ;