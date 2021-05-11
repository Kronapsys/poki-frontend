import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import options from "../../img/options.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  const homeRedirect = () => {
    history.push(`/`);
  };

  return (
    <div className="header">
      <div className="leftHeader">
        <img
          className="logoHeader"
          src={logo}
          alt="logo"
          onClick={homeRedirect}
        />
      </div>

      <div className="rightHeader">
        <img className="optionsMenuIcon" src={options} alt="options" />
      </div>
    </div>
  );
};

export default Header;