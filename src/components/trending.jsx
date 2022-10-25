import React, { useState, useEffect } from "react";
import axios from "axios";
import { TRENDING_MOVIE_URL, MOVIE_SINGLE_SEARCH_URL } from "../api";
import { CardgridCard } from "./cardgrid";

//get trending tvshows' name
const trendingresult = () => {
  // const [trending, setTrending] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${TRENDING_MOVIE_URL}`)
  //     .then((res) => {
  //       setTrending(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get(`${TRENDING_MOVIE_URL}1`),
        axios.get(`${TRENDING_MOVIE_URL}2`),
      ])
      .then((resArr) => {
        const data = [];
        resArr.map((res) => data.push(...res.data.results));
        setTrending(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(trending);

  const trend_arr = trending; //Films array

  const trend_name = trend_arr?.map((phim) => phim?.name);

  return trend_name;
};

//get movie details
const Trendmoviedetail = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`${MOVIE_SINGLE_SEARCH_URL}${props.name}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [props.name]);
  if (!movie?.id) {
    return null;
  }
  return (
    <CardgridCard
      id={movie?.id}
      tv_img={movie?.image?.medium}
      tv_name={movie?.name}
    ></CardgridCard>
  );
};

export const Trending = () => {
  const trending = trendingresult(); //cut trend arr list to 10
  console.log(trending); // arrays of tvshows

  return (
    <div className="mainview">
      Your mom
      <div>
        {trending?.map((phim) => (
          <Trendmoviedetail name={phim} />
        ))}
      </div>
    </div>
  );
};
