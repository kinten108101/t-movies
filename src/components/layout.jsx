import React from "react";
import {Outlet} from "react-router-dom";
import {Sidebar} from "./sidebar.jsx";
import "../styles/main.css"

const LayoutTwo = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Outlet />
		</div>
	);
}
export {LayoutTwo};