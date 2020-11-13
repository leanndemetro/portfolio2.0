import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav justify-content-end">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
            PORTFOLIO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
