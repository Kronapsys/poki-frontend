import React, {useState} from "react";
import "./MainMenuTeachers.css";
import ChildCard from "../../components/ChildCard/ChildCard";
import Btn from "../../components/Btn/Btn";
import axios from 'axios';


const MainMenuTeachers = () => {

  let teacherId = window.localStorage.getItem('teacherId');

  // let alumnos =  axios.get(`http://localhost:3000/teachers/${teacherId}`);
  // console.log(alumnos);

  // const [childs, setChilds] = useState({});

    let childs = [];

    const setChilds = (childs) => {
      childs.push(childs)
    }

    axios.get(`http://localhost:3000/teachers/${teacherId}`)
    .then(res=>{
      console.log(res.data.childs);
        setChilds(res.data.childs);
    })



  return (
    
    <div className="MainMenuTeachers">
      <div className="areaMMT">
        <ChildCard />

        <div className="eventArea">
          <Btn nombre="Crear evento" destination="createEvent" />
        </div>
      </div>
    </div>

  );
};

export default MainMenuTeachers;