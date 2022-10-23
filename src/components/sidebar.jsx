import React from "react";
import {Link} from "react-router-dom"
import "../styles/main.css";

const NavCmdLibrary = () => {
	let count = 5;
	return (
	<Link className="nav-cmd" id="nav-cmd-libary" to="/library">
		<div className="nav-cmd-title">
			Library
		</div>
		<div className="nav-cmd-count">
			{count}
		</div>
	</Link>
	);
}

const NavCmdFeed = () => {
	let count = 2;
	return (
	<Link className="nav-cmd" id="nav-cmd-feed" to="/feed">
		<div className="nav-cmd-title">
			Feed
		</div>
		<div className="nav-cmd-count">
			{count}
		</div>
	</Link>
	);
}

const Sidebar = () => {
	const [isDarkTheme, setDarkTheme] = React.useState(true);
	return (
		<div className="sidebar">
			<input className="searchbar" type="search" name="haha" />
			<NavCmdLibrary />
			<NavCmdFeed />
		</div>
	);
}
export {Sidebar};