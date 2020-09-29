import React, { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

const SearchBar = ({ searchItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      searchItems(searchTerm);
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <div className="movie-db-searchbar">
      <div className="movie-db-searchbar-content-wrapper">
        <div className="movie-db-searchbar-content">
          <FontAwesome className="movie-db-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="movie-db-searchbar-input"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
