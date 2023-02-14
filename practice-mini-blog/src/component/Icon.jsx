import React from "react";
import logo from "../logo.svg";
import "../App.css";

function Icon(props) {
  return (
    <div className="App">
      <div className="logo-box">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Icon;
