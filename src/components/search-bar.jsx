import React from 'react';
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar productos" />
      <i className="fas fa-search"></i>
    </div>
  );
}

export default SearchBar;