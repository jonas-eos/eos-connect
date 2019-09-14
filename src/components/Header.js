/**
 * @overview Header
 * This file manipulate the page header
 *
 * @requires react
 * @requires fontawesome
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <nav className="header-menu">
        <p className="logo">EOS Connect</p>
        <div className="profile-div">
          <span className="profile-label">My Profile</span>
          <FontAwesomeIcon icon={faIdCard} className="faIdCard" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
