import React, { useState } from "react";
import "./search.css";
const Search = ({ searchedvalue, handelsearch }) => {
  const [search, setsearch] = useState(searchedvalue)
 
  return (
    <div className="main">
    <div className="search-container">
      <input
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        type="text"
        name="search"
        placeholder="Search..."
        className="search-input"
      />
      <a  className="search-btn">
        <i onClick={()=>handelsearch(search)} className="fas fa-search" />
      </a>
    </div></div>
  );
};

export default Search;
