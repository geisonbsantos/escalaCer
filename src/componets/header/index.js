import React from "react";
import "./header.css";

function Header() {
    return (
      <div className="h-15 bg-gradient-to-l from-yellow-400 via-red-500 to-pink-900 text-white flex flex-row justify-between items-center">
        <p className="textHeader1">Inicial</p>
        <p className="textHeader2">inicio/</p>
      </div>
    );
  }
  
  export default Header;