import React from "react";
import "../styles/main.css";

const CardgridCard = (props) => {
	var url = "url(" + props.tv_img + ")";
	const title_visible = (props.tv_display_name == "false") ? "hidden":"visible";
	return (
		<div className="cgcard">
		    <div className="cgcard_thumbnail" style={{
		    	backgroundImage : url
		    }}>
		    	<div className="cgcard_title" style={{
		    		visibility : title_visible
		    	}}>
		        {props.tv_name}
		    	</div>
		    </div>
		</div>
	);
}
export {CardgridCard};