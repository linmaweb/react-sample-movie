import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map( (element, i) => {
      return (
        <div key={i} className="movie-db-grid-element">
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="movie-db-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="movie-db-grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default Grid;