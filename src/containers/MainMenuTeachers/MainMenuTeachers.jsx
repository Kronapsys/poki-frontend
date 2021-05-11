import React, { useState } from "react";
import "./MainMenuTeachers.css";
import ChildCard from "../../components/ChildCard/ChildCard";
import Btn from "../../components/Btn/Btn";
import axios from "axios";
import Header from "../../components/Header/Header";

const MainMenuTeachers = () => {
  let teacherId = window.localStorage.getItem("teacherId");

  let childs = [];
  
  const setChilds = (childs) => {
    childs.push(childs);
  };

  axios.get(`http://localhost:3000/teachers/${teacherId}`).then((res) => {
    setChilds(res.data.childs);
  });

  return (
    
    <>
    <Header/>
    <div className="MainMenuTeachers">
      <div className="areaMMT">
        
        <ChildCard />

        <div className="eventArea">
          <Btn nombre="Crear evento" destination="createEvent" />
        </div>
      </div>
    </div>
    </>
  );
};

export default MainMenuTeachers;