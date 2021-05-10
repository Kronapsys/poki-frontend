import React from "react";
import "./Submenu.css";
import x from '../../img/x.png';

const Submenu = () => {
  return (
    <div className="popUp" hidden='true'>
      <div className="topPopUp">
        <img className="x" src={x} alt="x" />
      </div>
      <div className="restPopUp"></div>
    </div>
  );
};

export default Submenu;