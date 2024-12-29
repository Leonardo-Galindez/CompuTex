import React from 'react';
import '../styles/container-1.css';

function Container1({logo,searchBar}) {
  return (
    <div className="container-1">
      {logo}
      {searchBar}
    </div>
  );
}

export default Container1;