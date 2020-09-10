import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css'

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSearch = (event) => {
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  }

  render() {
    return (
      <div className="movie-db-searchbar">
        <div className="movie-db-searchbar-content-wrapper">
          <div className="movie-db-searchbar-content">
            <FontAwesome className="movie-db-fa-search" name="search" size="2x" />
            <input
              type="text"
              className="movie-db-searchbar-input"
              placeholder="Search"
              onChange={this.doSearch}
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;