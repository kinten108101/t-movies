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

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${id}?embed[]=cast&embed[]=nextepisode`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  const cast = movie?._embedded?.cast
  const md_cast_cards_render = cast?.map((nhanvat) => (
    <div className="nhanvat">
      <Link to={`/actor/${nhanvat?.person?.id}`}>
        <img loading="lazy" src={nhanvat?.character?.image?.original} />
        <h3>{nhanvat?.person?.name}</h3>
        <p>As {nhanvat?.character?.name}</p>
      </Link>
    </div>
  ));

  const md_genre_tags_render = movie?.genres?.map(
    (genre) => (
      <div className="md-header-genre-tag">{genre}</div>
    )
  );

  // NEXT EPISODE AREA
  const next_episode = movie?._embedded?.nextepisode;
  console.log(next_episode?.airstamp);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <h2>Aring</h2>;
    } else {
      // Render a countdown
      return (
        <h2>
          <span>
            <strong>
              Next episode 『 SEASON {next_episode?.season} | EP
              {next_episode?.number} 』
            </strong>
            : {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
          </span>
        </h2>
      );
    }
  };

  const ret_two = () => (
    <div className="movie-detail mainview">
      <div className="md-header-block">
        <img loading="lazy" className="md-header-col-left md-header-thumbnail" src={movie?.image?.original} alt="#" />
        <div className="md-header-col-right">
          <div className="md-header-col-right-row-0">
            <div className="md-header-title">{movie?.name}</div>
            <div className="md-header-rating">Numerical Rating: {movie?.rating?.average}</div>
            <h2>Status: {movie?.status}</h2>
            <div className="md-header-genre-block">Genre: {md_genre_tags_render}</div>
          </div>
          <div className="md-header-col-right-row-1">
            <hr className="md-header-separator" />
            <div className="md-desc-content" dangerouslySetInnerHTML={{ __html: movie?.summary }}></div>
          </div>
        </div>
      </div>
      <div className="md-countdown">
        {next_episode?.airstamp ? (
          <div>
            <Countdown date={`${next_episode?.airstamp}`} renderer={renderer} />
          </div>
        ) : null}
        <Seasons id={id} />
      </div>
      {cast && 
      <div className="md-cast-panel">
        <div className="md-cast-title">CAST</div>
        <div className="md-cast-cards-list">{md_cast_cards_render}</div>
      </div>
      }
    </div>
  );

  return ret_two();
};
