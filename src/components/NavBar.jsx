import React from "react";
import { Link } from "react-router-dom";
import logo from '../Style/logo.png';
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
            <img src={logo} alt="" />
          <Link to="/" className="navbar-logo">
            <h2>CINE FLIX</h2>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/movies" className="navbar-link">
            Movies
          </Link>
          <Link to="/tvshows" className="navbar-link">
            TV Shows
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
