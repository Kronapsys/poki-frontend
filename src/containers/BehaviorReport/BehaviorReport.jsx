import React, { useState } from "react";
import "./BehaviorReport.css";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BehaviorReport = () => {
  let history = useHistory();

  const [description, setDescription] = useState({
    description: "",
  });

  let body = {
    description: description.description,
  };

  const sendReport = async () => {
    await axios.post("http://localhost:3000/incidents-report", body);

    history.push("/mainMenuTeachers");
  };

  const handleState = (event) => {
    setDescription({
      ...description,
      [event.target.name]:
        event.target.type === "number"
          ? +event.target.value
          : event.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="BehaviorReport">
        <div className="BehaviorReportForm">
          <input
            className="input"
            type="textarea"
            name="description"
            title="description"
            placeholder="Descripción de lo sucedido"
            lenght="250"
            onChange={handleState}
          />

          <button className="btnQR" onClick={sendReport}>
            {" "}
            Enviar{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default BehaviorReport;