import React from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} alt="logo" className="punkLogo" />
      </div>
      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collections, items or nfts...."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitch-container">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>
      <button className="loginButton">Get In</button>
    </div>
  );
}

export default Header;
