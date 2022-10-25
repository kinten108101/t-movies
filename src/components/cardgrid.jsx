import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

const CardgridCard = (props) => {
  var url = "url(" + props.tv_img + ")";
  const title_visible =
    props.tv_display_name === "false" ? "hidden" : "visible";
  return (
    <div className="cgcard">
      <Link to={`/show/${props.id}`}>
        <div
          className="cgcard_thumbnail"
          loading="lazy"
          style={{
            backgroundImage: url,
          }}
        >
          <div
            className="cgcard_title"
            style={{
              visibility: title_visible,
            }}
          >
            {props.tv_name}
          </div>
        </div>
      </Link>
    </div>
  );
};
export { CardgridCard };
