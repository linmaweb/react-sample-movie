import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from "../../config";
import Banner from "../elements/Banner/Banner";
import SearchBar from "../elements/SearchBar/SearchBar";
import Grid from "../elements/Grid/Grid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import LoadMoreSpinner from "../elements/LoadMoreSpinner/LoadMoreSpinner";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchItems(endpoint);
  }, []);

  const searchItems = (searchTerm) => {
    let endpoint = "";
    setMovies([]);
    setLoading(true);
    setSearchTerm(searchTerm);
    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    fetchItems(endpoint);
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
        currentPage + 1
      }`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${
        currentPage + 1
      }`;
    }
    fetchItems(endpoint);
  };

  const fetchItems = (endpoint) => {
    try {
      fetch(endpoint)
        .then((result) => result.json())
        .then((result) => {
          setMovies([...movies, ...result.results]);
          setHeroImage(heroImage || result.results[0]);
          setLoading(false);
          setCurrentPage(result.page);
          setTotalPages(result.total_pages);
        });
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  };

  return (
    <div className="movie-db-home">
      {heroImage ? (
        <div>
          <Banner
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
          <SearchBar searchItems={searchItems} />
        </div>
      ) : null}
      <div className="movie-db-home-grid">
        <Grid
          header={searchTerm ? "Search Result" : "Popular Movies"}
          loading={loading}
        >
          {movies.map((element, i) => {
            return (
              <MovieThumb
                key={i}
                clickable={true}
                image={
                  element.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                    : "./images/no_image.jpg"
                }
                movieId={element.id}
                movieName={element.original_title}
              />
            );
          })}
        </Grid>
        {loading ? <LoadMoreSpinner /> : null}
        {currentPage <= totalPages && !loading ? (
          <LoadMoreBtn text="Load More" onClick={loadMoreItems} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
