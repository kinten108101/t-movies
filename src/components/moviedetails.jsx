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
    <Link to={`/actor/${nhanvat?.person?.id}`}>
      <div className="nhanvat">
          <img loading="lazy" src={nhanvat?.character?.image?.original} />
          <div className="nhanvat-desc">
            <h3>{nhanvat?.person?.name}</h3>
            <p>{nhanvat?.character?.name}</p>
          </div>
      </div>
    </Link>
  ));

  const md_genre_tags_render = movie?.genres?.map(
    (genre) => (
      <div className="md-header-genre-tag">{genre}</div>
    )
  );

  // NEXT EPISODE AREA
  const next_episode = movie?._embedded?.nextepisode;
  console.log(next_episode?.airstamp);

  const countdown_renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <h2>- Airing</h2>;
    } else {
      // Render a countdown
      return (
        <div className="md-countdown-output">
              - Next: {next_episode?.season}x{next_episode?.number}
              <br />
              {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </div>
      );
    }
  };

  const ret_two = () => (
    <div className="movie-detail mainview">
      <div className="md-header-block">
        <div className="md-header-col-left">
          <img loading="lazy" className="md-header-thumbnail" src={movie?.image?.original} alt="#" />
        </div>
        <div className="md-header-col-right">
          <div className="md-header-col-right-row-0">
            <div className="md-header-title">{movie?.name}</div>
            <div className="md-header-rating">Rating: {movie?.rating?.average}</div>
            <div className="md-header-genre-block">Genre: {md_genre_tags_render}</div>
          </div>
          <div className="md-header-col-right-row-1">
            <hr className="md-header-separator" />
            <div className="md-desc-content" dangerouslySetInnerHTML={{ __html: movie?.summary }}></div>
          </div>
        </div>
      </div>
      <div className="md-countdown">
        <div className="md-countdown-screen">
          <div className="md-countdown-output">- Status: {movie?.status}</div>
          {next_episode?.airstamp ? (
              <Countdown date={`${next_episode?.airstamp}`} renderer={countdown_renderer} />
          ) : null}
        </div>
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
