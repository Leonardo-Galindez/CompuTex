import React from 'react';
import logoImage from "../assets/img/logo.png";
import "../styles/logo.css";
function Logo(){
    return(
        <div className="logo">
            <img src={logoImage} alt="Logo" />
        </div>
    );
}

export default Logo;