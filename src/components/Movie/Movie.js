import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import Grid from "../elements/Grid/Grid";
import Actor from "../elements/Actor/Actor";
import LoadMoreSpinner from "../elements/LoadMoreSpinner/LoadMoreSpinner";
import "./Movie.css";

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}movie/${props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    fetchItems(endpoint);
  }, []);

  useEffect(() => {
    const endpoint = `${API_URL}movie/${props.match.params.movieId}/credits?api_key=${API_KEY}`;
    try {
      fetch(endpoint)
        .then((result) => result.json())
        .then((result) => {
          const directors = result.crew.filter(
            (member) => member.job === "Director"
          );
          setActors(result.cast);
          setDirectors(directors);
          setLoading(false);
        });
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }, [movie]);

  const fetchItems = (endpoint) => {
    try {
      fetch(endpoint)
        .then((result) => result.json())
        .then((result) => {
          if (result.status_code) {
            setLoading(false);
          } else {
            setMovie(result);
          }
        });
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  };

  return (
    <div className="movie-db-movie">
      {movie ? (
        <div>
          <MovieInfo movie={movie} directors={directors} />
          <MovieInfoBar
            movie={movie}
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        </div>
      ) : null}
      {actors ? (
        <div className="movie-db-movie-grid">
          <Grid header={"Actors"}>
            {actors.map((element, i) => {
              return <Actor key={i} actor={element} />;
            })}
          </Grid>
        </div>
      ) : null}
      {!actors && !loading ? <h1>No Movie Found!</h1> : null}
      {loading ? <LoadMoreSpinner /> : null}
    </div>
  );
};

export default Movie;
