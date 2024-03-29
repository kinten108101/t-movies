import React, { useState, useEffect } from "react";
import { CardgridCard } from "./cardgrid.jsx";
import "../styles/main.css";
import { MOVIE_DETAILS_URL } from "../api.js";
import axios from "axios";

const RenderCardIter = (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${props.id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [props.id]);
  return (
    <CardgridCard
      id={movie?.id}
      tv_img={movie?.image?.original}
      tv_name={movie?.name}
    ></CardgridCard>
  );
};

const MvLibrary = () => {
  const featured_movie = [
    169, 618, 48945, 28276, 40329, 1371, 305, 269, 82, 50907, 1905, 23470,
  ];

  return (
    <div className="mainview">
      {featured_movie?.map((idphim) => (
        <RenderCardIter id={idphim} />
      ))}
    </div>
  );
};
export { MvLibrary };
