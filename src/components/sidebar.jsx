import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/main.css";
import { Searchbar } from "./searchbar";

const NavCmdLibrary = () => {
  let count = -1;
  return (
    <Link className="nav-cmd" id="nav-cmd-libary" to="/library">
      <div className="nav-cmd-title">Library</div>
      <div className="nav-cmd-count">{count}</div>
    </Link>
  );
};

const NavCmdFeed = () => {
  let count = 2;
  return (
    <Link className="nav-cmd" id="nav-cmd-feed" to="/feed">
      <div className="nav-cmd-title">Feed</div>
      <div className="nav-cmd-count">></div>
    </Link>
  );
};

const NavCmdTrending = () => {
  let count = 69;
  return (
    <Link className="nav-cmd" id="nav-cmd-trending" to="/trending">
      <div className="nav-cmd-title">Trending</div>
      <div className="nav-cmd-count">></div>
    </Link>
  );
};

const SiteHeader = () => {
  const siteSubtitle = "TV for TVMaze";
  return (
    <div className="site-header">
      <img src="/assets/mazeboy.svg" className="logo" />
      <div className="site-subtitle">{siteSubtitle}</div>
    </div>
  );
}

const Credit = () => {
  return (
    <div className="site-credit">
      closed-source · 2022
    </div>
  );
}

const Sidebar = () => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSearch = (event) => {
    event.preventDefault();
    if (value === "") {
      navigate(`/library`);
    }
    if (value) {
      navigate(`/movielist?name=${value}`);
    }
  };
  return (
    <div className="sidebar">
      <SiteHeader />
      <Searchbar />
      <NavCmdTrending />
      <Credit />
      <div className="sidebar-footer" />
    </div>
  );
};
export { Sidebar };