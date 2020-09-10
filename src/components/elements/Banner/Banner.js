import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className="movie-db-heroimage"
      style={{
        background:
          `linear-gradient(to bottom, rgba(0,0,0,0)
          39%,rgba(0,0,0,0)
          41%,rgba(0,0,0,0.65)
          100%),
          url('${props.image}'), #000`
      }}
    >
      <div className="movie-db-heroimage-content">
        <div className="movie-db-heroimage-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;