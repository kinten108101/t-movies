import React, { useState, useEffect } from "react";
import "../app";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SEASON_DETAILS } from "../api";
import useCollapse from "react-collapsed";

export const SeasonDetails = () => {
  //GET MOVIE INFO
  const [season, setSeason] = useState();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${SEASON_DETAILS}/${id}?embed=episodes`)
      .then((res) => {
        setSeason(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(season);

  // ALL OF THE EPISODES
  // Set collapse status
  const Episode = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded
            ? `↓ Episode ${props.number}: ${props.name} `
            : `Episode ${props.number}: ${props.name}`}
        </div>
        <div {...getCollapseProps()}>
          <div className="episode">
            <img src={props.image} loading="eager" />
            <h3 dangerouslySetInnerHTML={{ __html: props.summary }}></h3>
          </div>
        </div>
      </div>
    );
  };

  const all_episodes = season?._embedded?.episodes?.map((tap) => (
    <Episode
      number={tap?.number}
      name={tap?.name}
      image={tap?.image?.original}
      summary={tap?.summary}
    />
  ));

  return (
    <div className="mainview">
      <div className="season-detail">
        <img loading="eager" src={season?.image?.original} alt="#" />
        <div>
          {season?.endDate ? (
            <h3>Premier date: {season?.premiereDate}</h3>
          ) : null}
        </div>
        {all_episodes}
      </div>
    </div>
  );
};
