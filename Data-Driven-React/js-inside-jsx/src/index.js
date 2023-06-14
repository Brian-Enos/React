
import React from "react" ;
import ReactDOM from "react-dom" ;

/* function App() {

  const firstName = "Brian";
  const lastName = "Otieno" ;
    
  return (
    <h1>Hello {firstName} {lastName}!</h1>
  )
}
 */

/* function App() {

  const date = new Date();
    
  return (
    <h1>It's currently about {date.getHours() % 12}!</h1>
  ) */



  function App() {
    const date = new Date();
    const hours = (date.getHours());
    let timeOfDay ;

    if(hours < 12 ) {
      timeOfDay = "Good Morining" ;
    }
    else if(hours > 12 && hours < 17) {
      timeOfDay = "Good Afternoon!";
    }
    else {
     timeOfDay = "Good Night";
    }

    return (
      <h1>Hi, {timeOfDay}</h1>
    )
  }
  ReactDOM.render(<App />, document.getElementById("root"));