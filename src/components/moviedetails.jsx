import React, { useState, useEffect } from "react";
import "../app";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAILS_URL } from "../api";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${id}?embed=cast`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(movie);

  const cast_show = movie?._embedded?.cast;
  console.log(cast_show);

  const character_render = cast_show?.map((nhanvat) => (
    <div className="nhanvat">
      <Link to={`/actor/${nhanvat?.person?.id}`}>
        <img loading="lazy" src={nhanvat?.character?.image?.original} />
        <h3>{nhanvat?.person?.name}</h3>
        <p>As {nhanvat?.character?.name}</p>
      </Link>
    </div>
  ));

  console.log(character_render);

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

      <div>{character_render}</div>
    </div>
  );
};
