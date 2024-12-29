import React from "react";
import "../styles/header.css";


function Header({ container1, container2 }) {
  return (
    <header className="header">
      {container1}
      {container2}
    </header>
  );
}

export default Header;
