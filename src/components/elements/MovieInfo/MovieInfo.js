import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = (props) => {
  return (
    <div className="movie-db-movieinfo"
      style={{
        background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
      }}
    >
      <div className="movie-db-movieinfo-content">
        <div className="movie-db-movieinfo-thumb">
          <MovieThumb
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
          />
        </div>
        <div className="movie-db-movieinfo-text">
          <h1>{props.movie.title}</h1>
          <p>
          {props.directors.length > 1 ? <strong>DIRECTORS: </strong> : <strong>DIRECTOR: </strong>}
          {props.directors.map( (element, i) => {
            return <span key={i} className="movie-db-director"> {element.name}</span>
          })}
          </p>
          <p>{props.movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;