import React, { useState, useEffect } from "react";
import "../app";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAILS_URL } from "../api";
import Countdown from "react-countdown";
import { Seasons } from "./seasonsandeps";

export const MovieDetails = () => {
  //GET MOVIE INFO
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${id}?embed[]=cast&embed[]=nextepisode`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const cast_show = movie?._embedded?.cast;

  // CASTING AREA
  const character_render = cast_show?.map((nhanvat) => (
    <div className="nhanvat">
      <Link to={`/actor/${nhanvat?.person?.id}`}>
        <img loading="lazy" src={nhanvat?.character?.image?.original} />
        <h3>{nhanvat?.person?.name}</h3>
        <p>As {nhanvat?.character?.name}</p>
      </Link>
    </div>
  ));

  // NEXT EPISODE AREA
  const next_episode = movie?._embedded?.nextepisode;
  console.log(next_episode?.airstamp);

  // COUNTDOWN RENDER
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <h2>Aring</h2>;
    } else {
      // Render a countdown
      return (
        <h2>
          <span>
            <strong>Next episode</strong>: {days} days, {hours} hours, {minutes}{" "}
            minutes, {seconds} seconds
          </span>
        </h2>
      );
    }
  };

  //RETURN SECTION
  return (
    <div className="movie-detail mainview">
      <div>
        <h2>{movie?.name}</h2>
        <img loading="lazy" src={movie?.image?.original} alt="#" />
      </div>

      <div>
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: movie?.summary }}></div>
      </div>

      <div>
        <h2>Rating: {movie?.rating?.average}</h2>
      </div>

      <div>
        <h2>Genre: {movie?.genres?.join(", ")}</h2>
      </div>

      <div>
        <h2>Status: {movie?.status}</h2>
      </div>

      {next_episode?.airstamp ? (
        <div>
          <Countdown date={`${next_episode?.airstamp}`} renderer={renderer} />
        </div>
      ) : null}

      <Seasons id={id} />

      <div>{character_render}</div>
    </div>
  );
};
