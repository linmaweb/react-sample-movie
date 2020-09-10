import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="movie-db-header">
      <div className="movie-db-header-content">
        <Link to="/">
          <img className="movie-db-logo" src="./images/reactMovie_logo.png" alt="movie-db-logo" />
        </Link>
        <img className="movie-db-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
      </div>
    </div>
  )
}

export default Header;