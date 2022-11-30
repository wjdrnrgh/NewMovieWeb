import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loding from "../components/Loding";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [detail, setDetail] = useState();
  const getDetail = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setDetail(json.data.movie);
    setLoding(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <Loding />
      ) : (
        <div>
          <div
            className={styles.bg}
            style={{
              backgroundImage: `url(${detail.background_image_original})`,
            }}
          ></div>
          <div className={styles.container}>
            <div className={styles.mainContent}>
              <div>
                <img
                  src={detail.large_cover_image}
                  alt="coverImg"
                  className={styles.coverImg}
                />
              </div>
              <div className={styles.movieInfo}>
                <div className={styles.infoTop}>
                  <h1 className={styles.movieTitle}>{detail.title}</h1>
                  <span className={styles.subTitle}>🗓️{detail.year}</span>
                  <span className={styles.subTitle}>⭐{detail.rating}</span>
                  <span className={styles.subTitle}>⏰{detail.runtime}min</span>
                  <ul className={styles.genreList}>
                    {detail.genres.map((genre, index) => {
                      return <li key={index}>{genre}</li>;
                    })}
                  </ul>
                </div>
                <div className={styles.infoMiddle}>
                  <p className={styles.description}>
                    {detail.description_intro}
                  </p>
                </div>
                <div className={styles.infoBottom}>
                  <h1>Download</h1>
                  {detail.torrents.map((item) => {
                    return (
                      <a className={styles.downloadBtn} href={item.url}>
                        {item.quality}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
