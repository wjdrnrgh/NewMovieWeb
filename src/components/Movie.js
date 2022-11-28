import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movie = ({ obj }) => {
  return obj.map((movie) => (
    <div key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.medium_cover_image} alt="cover" />
      </Link>
      <h1>{movie.title}</h1>
      <p>{movie.rating}⭐</p>
      <p>{movie.runtime}(min)⏰</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
};

Movie.propTypes = {
  obj: PropTypes.array.isRequired,
};

export default Movie;
