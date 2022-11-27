import React from "react";
import { useState, useEffect } from "react";
import Loding from "../components/Loding";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, SetLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=7`
    );
    const json = await res.json();
    setMovies(json.data.movies);
    SetLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{loading ? <Loding /> : <Movie obj={movies} />}</div>;
};

export default Home;
