import React from "react";
import { useState, useEffect } from "react";
import Loding from "../components/Loding";
import Slide from "../components/Slide";
import styles from "./Home.module.css";

const Home = () => {
  const [loading, SetLoding] = useState(true);
  const [topRating, setTopRating] = useState([]);
  const [romance, setRomance] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [animation, setAnimation] = useState([]);

  const getMovies = async () => {
    const gRating = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&limit=10&sort_by=year`
      )
    ).json();
    setTopRating(gRating.data.movies);
    const gRomance = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=romance&limit=10&sort_by=year`
      )
    ).json();
    setRomance(gRomance.data.movies);
    const gThriller = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=thriller&limit=10&sort_by=year`
      )
    ).json();
    setThriller(gThriller.data.movies);
    const gAnimation = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=animation&limit=10&sort_by=year`
      )
    ).json();
    setAnimation(gAnimation.data.movies);

    SetLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <Loding />
      ) : (
        <div className={styles.container}>
          <Slide movies={topRating} />
          <Slide movies={romance} />
          <Slide movies={thriller} />
          <Slide movies={animation} />
        </div>
      )}
    </div>
  );
};

export default Home;
