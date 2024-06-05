import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import homeIcon from "../assets/icons/home.svg";

const Navbar = ({ page }) => {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo retzettariu" className="logo" />
        </Link>
      </div>
      <div className="nav-links-container">
        {!page && (
          <ul className="nav-links">
            <li className="nav-link back-home">
              <Link to="/">
                <img src={homeIcon} alt="home icon" /> Back to home
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
