import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

const Genre = () => {
  const { genre, num } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useRecoilState(listPageReLoading);
  const focusPage = useSetRecoilState(focusNav);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${num}&${genre}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setReloading(false);
    setLoading(true);
    focusPage(genre);

    getMovies();
  }, [reloading]);

  return <div>{loading ? <Loading /> : <Movie obj={movies} />}</div>;
};

export default Genre;
