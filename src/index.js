import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

//const rootElement = document.getElementById("root");
//ReactDOM.render(
// <StrictMode>
//   <App />
// </StrictMode>,
//rootElement
// );

// var React = require("react");
// var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Biriyani</li>
      <li>Chicken</li>
      <li>Freah juice</li>
    </ul>
  </div>,
  document.getElementById("root")
);

const fName = "Shilpa";
const lName = "Singh";
const num = 20;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root1")
);