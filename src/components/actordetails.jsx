import React, { useState, useEffect } from "react";
import "../app";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ACTOR_DETAILS_URL } from "../api";
import { CardgridCard } from "./cardgrid";

const CastingCredit = () => {
  const [credit, setCredit] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${ACTOR_DETAILS_URL}/${id}/castcredits?embed=show`)
      .then((res) => {
        setCredit(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const movie = credit?.map((phim) => phim?._embedded?.show);

  return (
    <div>
      {movie?.map((phim) => (
        <CardgridCard
          id={phim?.id}
          tv_img={phim?.image?.original}
          tv_name={phim?.name}
        ></CardgridCard>
      ))}
    </div>
  );
};

const ActorDetails = () => {
  const [actor, setActor] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${ACTOR_DETAILS_URL}/${id}`)
      .then((res) => {
        setActor(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="ad-header">
      <img className="ad-head-thumbnail" loading="lazy" src={actor?.image?.original} alt="#" />
      <div className="ad-head-name">{actor?.name}</div>
    </div>
  );
};

export const ActorPage = () => {
  return (
    <div className="mainview">
      <ActorDetails />
      <CastingCredit />
    </div>
  );
};
