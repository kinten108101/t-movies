import React from "react";
import {Outlet} from "react-router-dom";
import {Sidebar} from "./sidebar.jsx";
import "../styles/main.css"

const Statusbar = () => {
	return (
		<div className="status-bar">
		</div>
	);
}

const TVBox = (props) => {
	return (
		<div className="tv-box">
			{props.mainview}
			<Statusbar />
		</div>
	);
}

const LayoutTwo = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Outlet />
		</div>
	);
}
export {LayoutTwo};