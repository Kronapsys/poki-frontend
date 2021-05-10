import React from "react";
import "./ChildCard.css";
import incidentIcon from '../../img/incidentIcon.png';
import foodIcon from '../../img/foodIcon.png';
import poopIcon from '../../img/poopIcon.png';
import tutorialIcon from '../../img/tutorial.png';
import userIcon from '../../img/user.jpg';
import {useHistory} from 'react-router-dom';
import Submenu from "../Submenu/Submenu";

const ChildCard = () => {

  let history = useHistory();

    const preSelectIncident = () => {
        history.push(`/preSelectIncident`);
    };

  return (
    <div className="childCard">
        <div className="topChildCard">
            <div className="topLeft">
                <p>  </p>
            </div>

            <div className="topRight">
                <p>  </p>
            </div>
        </div>
      <div className="midChildCard">
        {/* <Submenu/> */}
        <div className="photoAreaChildCard">
            <div className="photoChildCard">
            <img className='photo' src={userIcon} alt='userIcon' />

            </div>
        </div>

        <div className="infoChildCard">
          <div className="nameAreaChildCard">
              <div className="nameChild">
                  <p> </p>
              </div>
              <div className="surnamesChild">
                  <p> </p>
              </div>
          </div>

          <div className="extraInfoChildCard"></div>
        </div>
      </div>

      <div className="botChildCard">
          <div className="incidentIcon icon">
            <img className='incidentIconBtn' src={incidentIcon} alt='incidentIcon' onClick={preSelectIncident} />
          </div>
          <div className="foodIcon icon">
          <img className='foodIconBtn' src={foodIcon} alt='foodIcon' />
          </div>
          <div className="stoolIcon icon">
          <img className='stoolIconBtn' src={poopIcon} alt='poopIcon' />
          </div>
          <div className="tutorialIcon icon">
          <img className='tutorialIconBtn' src={tutorialIcon} alt='tutorialIcon' />
          </div>
      </div>
    </div>
  );
};

export default ChildCard;
