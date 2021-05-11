import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import options from "../../img/options.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types/userType.js";


const Header = (props) => {
  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT, payload: {} });
    history.push("/");
};

  return (
    <div className="header">
      <div className="leftHeader">
        <img
          className="logoHeader"
          src={logo}
          alt="logo"
          onClick={logOut}
        />
      </div>

      <div className="rightHeader">
        <img className="optionsMenuIcon" src={options} alt="options" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Header);