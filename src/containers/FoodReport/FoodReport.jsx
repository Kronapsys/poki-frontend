import React, { useState } from "react";
import "./FoodReport.css";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FoodReport = () => {
  let history = useHistory();

  const [report, setReport] = useState({
    type: "",
    description: "",
  });

  let body = {
    type: report.type,
    description: report.description,
  };

  const sendReport = async () => {
    await axios.post("http://localhost:3000/food-reports", body);

    history.push("/mainMenuTeachers");
  };

  const handleState = (event) => {
    setReport({
      ...report,
      [event.target.name]:
        event.target.type === "number"
          ? +event.target.value
          : event.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="foodReport">
        <div className="foodReportForm">
          <input
            className="input"
            type="text"
            name="type"
            title="type"
            placeholder="Almuerzo, comida o merienda?"
            lenght="8"
            onChange={handleState}
          />
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

export default FoodReport;
