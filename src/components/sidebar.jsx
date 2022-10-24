import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/main.css";

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
      <form onSubmit={handleSearch}>
        <input
          className="searchbar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </form>
      <NavCmdLibrary />
      <NavCmdFeed />
    </div>
  );
};
export { Sidebar };
