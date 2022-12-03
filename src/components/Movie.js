import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

const Movie = ({ obj }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {obj.map((movie) => (
          <div key={movie.id} className={styles.movieItem}>
            <Link to={`/movie/${movie.id}`} style={{ display: "inline-block" }}>
              <img
                src={movie.medium_cover_image}
                alt="cover"
                className={styles.coverImg}
              />
              <h1 className={styles.movieTitle}>{movie.title}</h1>
              <p className={styles.movieYear}>{movie.year}</p>
            </Link>
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
