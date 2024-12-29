import { createRoot } from "react-dom/client";
import React from "react";

/*
  Import Components
*/
import Header from "./components/header.jsx";
import BtnAccount from "./components/btn-account.jsx";
import BtnCart from "./components/btn-cart.jsx";

/*
  import styles
*/
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <Header
    logo={<Logo />}
    searchBar={<SearchBar />}
    btnAccount={<BtnAccount />}
    btnCart={<BtnCart />}
  />
);
