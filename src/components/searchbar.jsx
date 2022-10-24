import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/main.css";

export const Searchbar = () => {
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
    <form onSubmit={handleSearch}>
      <input
        className="searchbar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
};
