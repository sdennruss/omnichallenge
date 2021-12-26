import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigations = ["Services", "Global Reach", "About Us", "Resources"];
  return (
    <div className="navigation-container">
      <div className="nav left">
        <Logo className="logo" />
        <div className="nav-items-container">
          {navigations.map((nav) => (
            <li className="nav-items" key={nav}>
              {nav} <i className="fa fa-angle-down"></i>
            </li>
          ))}
        </div>
      </div>

      <div className="nav right">
        <div className="nav-items-container-right">
          <li className="nav-items">Login</li>
          <button className="book-a-call">Book A Call</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
