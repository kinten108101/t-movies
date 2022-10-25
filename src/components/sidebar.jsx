import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/main.css";
import { Searchbar } from "./searchbar";

const NavCmdLibrary = () => {
  let count = 5;
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
      <div className="nav-cmd-count">{count}</div>
    </Link>
  );
};

const NavCmdTrending = () => {
  let count = 69;
  return (
    <Link className="nav-cmd" id="nav-cmd-trending" to="/trending">
      <div className="nav-cmd-title">Trending</div>
      <div className="nav-cmd-count">{count}</div>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Searchbar />
      <NavCmdLibrary />
      <NavCmdTrending />
      <NavCmdFeed />
    </div>
  );
};
export { Sidebar };
