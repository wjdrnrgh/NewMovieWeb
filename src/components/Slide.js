import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ movies }) => {
  return (
    <div className={styles.slideContainer}>
      <h1>Top Rating</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className={styles.slideBox}>
            <h1>{movie.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
