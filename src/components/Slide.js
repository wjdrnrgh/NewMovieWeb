import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Slide.module.css";
import PropTypes from "prop-types";

const Slide = ({ movies, title }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const leftSlide = () => {
    if (slidePosition >= 0) {
      return;
    }
    setSlidePosition((current) => current + 350);
  };
  const rightSlide = () => {
    if (slidePosition <= -2450) {
      return;
    }
    setSlidePosition((current) => current + -350);
  };

  return (
    <div className={styles.slideContainer}>
      <div className={styles.titleBox}>
        <span>{title}</span>
      </div>
      <div className={styles.slideBox}>
        <div
          className={styles.sliedeWrap}
          style={{
            transform: `translateX(${slidePosition}px)`,
          }}
        >
          {movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className={styles.slideItem}
                style={{
                  backgroundImage: `url(${movie.large_cover_image})`,
                }}
              >
                <div className={styles.movieInfo}>
                  <h1 className={styles.movieTitle}>{movie.title}</h1>
                  <div
                    style={{
                      textAlign: "center",
                      margin: "2rem 0",
                    }}
                  >
                    <span>{movie.rating}⭐</span>
                    <span>{movie.runtime}min⏰</span>
                  </div>
                  <ul className={styles.genreList}>
                    {movie.genres.map((genre, index) => {
                      return (
                        <li key={index}>
                          <span>{genre}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link to={`/movie/${movie.id}`} className={styles.detailBtn}>
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.controller}>
        <button className={styles.controllBtn} onClick={leftSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div
          style={{
            width: "3rem",
          }}
        ></div>
        <button className={styles.controllBtn} onClick={rightSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

Slide.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default Slide;
