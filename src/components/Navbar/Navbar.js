import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const [showNavbarHeaders, setShowNavbarHeaders] = useState(false);
  return (
    <>
      <nav className="main-nav px-10">
        <div className="logo text-2xl font-semibold">
          <h2>Foodie</h2>
        </div>

        <div
          className={
            showNavbarHeaders ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="nav-headers lg:space-x-10 max-lg:space-y-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
          </ul>
        </div>

        <div
          className={
            showNavbarHeaders ? "login-link mobile-login-link" : "login-link"
          }
        >
          <ul className="login-headers lg:space-x-5 max-lg:space-y-5">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
        {/* <ul className= { showNavbarHeaders ? "login-headers mobile-login-headers max-lg:space-y-5" : "login-headers max-lg:space-y-5" }> */}

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowNavbarHeaders(!showNavbarHeaders)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>

      {/* <div
        className={
          showNavbarHeaders
            ? "dropdown-nav dropdown-nav-mob flex justify-between mx-8 border-2 p-5"
            : "dropdown-nav"
        }
      >
        <div>
          <ul className="col1 space-y-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
          </ul>
        </div>

        <div className="col2">
          <ul className="col1 space-y-5">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
