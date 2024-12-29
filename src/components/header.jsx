import React from "react";
import "../styles/header.css";
import Container1 from "./container-1.jsx"

function Header({ logo, searchBar, btnAccount, btnCart }) {
  return (
    <header className="header">
      {logo}
      {searchBar}
      {btnAccount}
      {btnCart}
    </header>
  );
}

export default Header;
