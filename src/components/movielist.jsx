import React, { useState, useEffect } from "react";
import "../app";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_SEARCH_URL } from "../api";
import { CardgridCard } from "./cardgrid";

export const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("name");

  useEffect(() => {
    axios
      .get(`${MOVIE_SEARCH_URL}${search}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [search]);

  console.log(movie);

  const movie_render = movie?.map((phim) => (
    <CardgridCard
      id={phim?.show?.id}
      tv_img={phim?.show?.image?.medium}
      tv_name={phim?.show?.name}
    ></CardgridCard>
  ));

  return (
    <div>
      <div className="mainview">{movie_render}</div>
    </div>
  );
};
