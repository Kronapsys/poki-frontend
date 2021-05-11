import React, { useEffect, useState } from "react";
import "./MainMenuTeachers.css";
import ChildCard from "../../components/ChildCard/ChildCard";
import Btn from "../../components/Btn/Btn";
import axios from "axios";
import Header from "../../components/Header/Header";

const MainMenuTeachers = () => {
  let teacherId = window.localStorage.getItem("teacherId");

  const [childs, setChilds] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/teachers/${teacherId}`).then((res) => {
      setChilds(res.data.childs);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="MainMenuTeachers">
        <div className="areaMMT">
          {childs.map((child) => (
            <ChildCard
              name={child.name}
              surname1={child.surname1}
              surname2={child.surname2}
            />
          ))}
          <div className="eventArea">
            <Btn nombre="Crear evento" destination="createEvent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenuTeachers;