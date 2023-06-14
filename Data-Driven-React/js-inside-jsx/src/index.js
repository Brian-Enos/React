
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

function App() {

  const date = new Date();
    
  return (
    <h1>It's currently about {date.getHours() % 12}!</h1>
  )

}
  ReactDOM.render(<App />, document.getElementById("root"));