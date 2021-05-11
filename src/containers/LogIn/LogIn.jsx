import React, { useState } from "react";
import "./LogIn.css";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LOGIN } from "../../redux/types/userType.js";
import { connect } from "react-redux";
import checkError from "../../utils/validate";

const LogIn = (props) => {
  let history = useHistory();

  const homeRedirect = () => {
    history.push(`/`);
  };

  const [dataLogin, setLogin] = useState({
    email: "",
    password: "",
    isTeacher: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState([]);

  // Manejadores
  const handleState = (e) => {
    setLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
    setMessage("");
    if (Object.keys(errors).length > 0)
      setErrors(
        checkError(
          {
            ...dataLogin,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
          },
          "register"
        )
      );
  };

  const handleCheckbox = (event) => {
    if (event.target.checked === true) {
      setLogin({ ...dataLogin, isTeacher: true });
    } else {
      setLogin({ ...dataLogin, isTeacher: false });
    }
  };

  const logeame = async () => {
    // Comprobación errores
    let body = {
      email: dataLogin.email,
      password: dataLogin.password,
    };

    if (dataLogin.isTeacher !== true) {
      console.log(body);
      let result = await axios.post("http://localhost:3000/auths/loginP", body);
      props.dispatch({ type: LOGIN, payload: result.data });

      history.push(`/mainMenuParents`);
      window.localStorage.setItem("parentId", result.data.usuario.id);
    } else {
      let result = await axios.post("http://localhost:3000/auths/loginT", body);
      props.dispatch({ type: LOGIN, payload: result.data });

      history.push(`/mainMenuTeachers`);
      window.localStorage.setItem("teacherId", result.data.usuario.id);
    }
  };

  return (
    <div className="home">
      <div className="form">
        <div className="logo">
          <img src={logo} alt="logo" onClick={homeRedirect} />
          <p className="nombreLogo">~ P O K I ~</p>
        </div>

        <div className="formLogIn">
          <input
            className="input"
            type="email"
            name="email"
            title="Email"
            placeholder="Correo electrónico"
            lenght="50"
            onChange={handleState}
          />

          <div className="errorMessage">
            <p className="errorStyle">{message}</p>
          </div>

          <input
            className="input"
            type="password"
            name="password"
            title="Password"
            placeholder="Contraseña"
            lenght="20"
            onChange={handleState}
          />

          <div className="checkBox">
            <input type="checkbox" onChange={handleCheckbox} />{" "}
            <p> : ¿ Profesor ? </p>
          </div>
        </div>

        <div className="formButtons">
          <button className="btnQR" onClick={logeame}>
            {" "}
            Entrar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(LogIn);
