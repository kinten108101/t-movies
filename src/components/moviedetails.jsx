import React, { useState, useEffect } from "react";
import "../app";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAILS_URL } from "../api";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${id}?embed=cast`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  const cast = movie?._embedded?.cast
  const md_cast_cards_render = cast?.map((nhanvat) => (
    <div className="nhanvat">
      <img src={nhanvat?.character?.image?.medium} />
      <h3>{nhanvat?.person?.name}</h3>
      <p>As {nhanvat?.character?.name}</p>
    </div>
  ));

  const md_genre_tags_render = movie?.genres?.map(
    (genre) => (
      <div className="md-header-genre-tag">{genre}</div>
    )
  );

  /*
  const ret_one = () => (
    <div className="movie-detail mainview">
      <div>
        <h2>{movie?.name}</h2>
        <img src={movie?.image?.high} alt="#" />
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

      <div>{md_cast_cards_render}</div>
    </div>
  );
  */

  console.log(typeof(cast));

  const ret_two = () => (
    <div className="movie-detail mainview">
      <div className="md-header-block">
        <img className="md-header-col-left md-header-thumbnail" src={movie?.image?.medium} alt="#" />
        <div className="md-header-col-right">
          <div className="md-header-col-right-row-0">
            <div className="md-header-title">{movie?.name}</div>
            <div className="md-header-rating">Numerical Rating: {movie?.rating?.average}</div>
            <div className="md-header-genre-block">Genre: {md_genre_tags_render}</div>
          </div>
          <div className="md-header-col-right-row-1">
            <hr className="md-header-separator" />
            <div className="md-desc-content" dangerouslySetInnerHTML={{ __html: movie?.summary }}></div>
          </div>
        </div>
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
