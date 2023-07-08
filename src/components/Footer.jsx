import React from "react";
import "./footer.scss";
import logo from "../Style/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>
          <span>
            <img
              src={logo}
              style={{ width: "20px" }}
              className="nav-logo"
              alt=""
            />
          </span>{" "}
          <span>CINE FLIX</span>&copy; 2023{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
