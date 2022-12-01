import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
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
        <Loading />
      ) : (
        <div className={styles.container}>
          <Slide movies={topRating} title="High Rating" />
          <Slide movies={romance} title="Romance" />
          <Slide movies={thriller} title="Thriller" />
          <Slide movies={animation} title="Animation" />
        </div>
      )}
    </div>
  );
};

export default Home;
