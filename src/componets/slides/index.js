import React from "react";
import "./slide.css";

//<img src={logo} className="App-logo" alt="logo" />

function Slide() {
    return (
      <div className="mt-20">
        <img src={require('./slide01.png')} className="min-w-full min-h-full" alt="logo" />
      </div>
    );
  }
  
  export default Slide;