import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

const Movie = ({ obj }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {obj.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "550px",
              marginBottom: "2rem",
            }}
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.medium_cover_image}
                style={{
                  width: "100%",
                  height: "500px",
                }}
                alt="cover"
              />
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
        ))}
      </div>
    </div>
  );
};

Movie.propTypes = {
  obj: PropTypes.array.isRequired,
};

export default Movie;
