import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calculateTime, convertCurrency } from '../../../funcs.js';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
  return (
    <div className="movie-db-movieinfobar">
      <div className="movie-db-movieinfobar-content-wrapper">
      <div className="movie-db-movieinfobar-content">
        <div className="movie-db-movieinfobar-content-col">
          <FontAwesome className="fa-star" name="rating" size="1x" />
          <span className="movie-db-movieinfobar-info">IMDB Rating: {props.movie.vote_average}</span>
        </div>
        <div className="movie-db-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="1x" />
          <span className="movie-db-movieinfobar-info">Running time: {calculateTime(props.time)}</span>
        </div>
        <div className="movie-db-movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="1x" />
          <span className="movie-db-movieinfobar-info">Budget: {convertCurrency(props.budget)}</span>
        </div>
        <div className="movie-db-movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="1x" />
          <span className="movie-db-movieinfobar-info">Revenue: {convertCurrency(props.revenue)}</span>
        </div> 
      </div>
      </div>
      <div className="movie-db-movieinfobar-content-bg"></div>
    </div>
  )
}

export default MovieInfoBar;