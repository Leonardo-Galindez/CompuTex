import React from 'react';
import '../styles/container-2.css';

function Container2({btnAccount,btnCart}) {
  return (
    <div className="container-2">
      {btnAccount}
      {btnCart}
    </div>
  );
}

export default Container2;