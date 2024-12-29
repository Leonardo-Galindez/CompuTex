import { createRoot } from "react-dom/client";
import React from "react";

/*
  Import Components
*/
import Header from "./components/header.jsx";
import Container1 from "./components/container-1.jsx";
import Container2 from "./components/container-2.jsx";
import Logo from "./components/logo.jsx";
import SearchBar from "./components/search-bar.jsx";
import BtnAccount from  "./components/btn-account.jsx";
import BtnCart from  "./components/btn-cart.jsx";

/*
  import styles
*/
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <Header
    container1={<Container1 logo={<Logo />} searchBar={<SearchBar />} />}
    container2={<Container2 btnAccount={<BtnAccount />} btnCart={<BtnCart />}/>}
  />
);
