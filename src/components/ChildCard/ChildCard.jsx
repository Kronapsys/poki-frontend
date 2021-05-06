import React from "react";
import "./ChildCard.css";
import incidentIcon from '../../img/incidentIcon.png';
import foodIcon from '../../img/foodIcon.png';
import poopIcon from '../../img/poopIcon.png';
import tutorialIcon from '../../img/tutorial.png';
import userIcon from '../../img/user.jpg';

const ChildCard = () => {
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
          <div className="incidentIcon">
            <img className='incidentIconBtn' src={incidentIcon} alt='incidentIcon' />
          </div>
          <div className="foodIcon">
          <img className='foodIconBtn' src={foodIcon} alt='foodIcon' />
          </div>
          <div className="stoolIcon">
          <img className='stoolIconBtn' src={poopIcon} alt='poopIcon' />
          </div>
          <div className="tutorialIcon">
          <img className='tutorialIconBtn' src={tutorialIcon} alt='tutorialIcon' />
          </div>
      </div>
    </div>
  );
};

export default ChildCard;
