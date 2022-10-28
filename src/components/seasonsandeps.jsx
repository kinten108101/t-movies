import React, { useState, useEffect } from "react";
import "../app";
import axios from "axios";
import { MOVIE_DETAILS_URL } from "../api";
import useCollapse from "react-collapsed";
import { Link } from "react-router-dom";
export const Seasons = (props) => {
  //GET MOVIE INFO
  const [seasons, setSeasons] = useState();

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAILS_URL}/${props.id}/seasons`)
      .then((res) => {
        setSeasons(res.data);
      })
      .catch((error) => console.log(error));
  }, [props.id]);

  //   const seasons_render = seasons?.map((mua) => {
  //     <div className="season-tag">Season {mua?.number}</div>;
  //   });

  return (
    <div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? "All Seasons" : "Show Seasons"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            {seasons?.map((mua) => (
              <Link to={`/season/${mua?.id}`}>
                <div className="season-tag">Seasons {mua?.number}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
