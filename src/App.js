import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Murphy" animal="Dog" breed="Goldendoodle"/>
      <Pet name="Montana" animal="Dog" breed="Pomeranian"/>
      <Pet name="Toby" animal="Dog" breed="Goldendoodle"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));