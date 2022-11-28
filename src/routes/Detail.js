import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loding from "../components/Loding";

const Detail = () => {
  const { id } = useParams();
  const [loading, SetLoding] = useState(true);
  const [detail, setDetail] = useState();
  const getDetail = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();
    setDetail(json.data.movie);
    SetLoding(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <Loding />
      ) : (
        <div>
          <h1>Hi</h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
