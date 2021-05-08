import React from "react";
import "./MainMenuTeachers.css";
import ChildCard from "../../components/ChildCard/ChildCard";
import Btn from "../../components/Btn/Btn";

const MainMenuTeachers = () => {
  return (
    
    <div className="MainMenuTeachers">
      <div className="areaMMT">
        <ChildCard />

        <div className="eventArea">
          <Btn nombre="Crear evento" destination="" />
        </div>
      </div>
    </div>

  );
};

export default MainMenuTeachers;