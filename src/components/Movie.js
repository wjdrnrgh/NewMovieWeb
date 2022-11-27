import React from "react";

const Movie = ({ obj }) => {
  return obj.map((movie) => (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt="cover" />
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

export default Movie;
