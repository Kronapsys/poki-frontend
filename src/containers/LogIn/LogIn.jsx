import React, {useState} from 'react';
import './LogIn.css';
import logo from '../../img/logo.png';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {LOGIN} from '../../redux/types/userType.js';
import {connect} from 'react-redux';
// import  checkError  from '../../utils/util';

const LogIn = (props) => {

    let history = useHistory();

    const homeRedirect = () => {
        history.push(`/`);
    };

    const [dataLogin, setLogin] = useState({
        email: "",
        password: "",
    });

    // const [message, setMessage] = useState('');

    // Manejadores
    const handleState = (event) => {
        setLogin({
            ...dataLogin,
            [event.target.name]:
                event.target.type === "number"
                    ? +event.target.value
                    : event.target.value,

        });
    };

    const logeame = async () => {

        // Comprobación errores

        // setMessage('');

        // let errorMessage = checkError(dataLogin);
        // setMessage(errorMessage);
        // // console.log(errorMessage);
        // if(errorMessage) {
        //     return;
        // }

        let body = {
            email : dataLogin.email,
            password : dataLogin.password,
            isTeacher: dataLogin.isTeacher
        }

        if(dataLogin.isTeacher !== true) {
            let result = await axios.post("http://localhost:3000/parents", body);
                props.dispatch({type: LOGIN, payload: result.data});

            history.push(`/mainMenuParents`);
            console.log(result.data);


        } else {
            let result = await axios.post("http://localhost:3000/teachers", body);
            props.dispatch({type: LOGIN, payload: result.data});

            history.push(`/mainMenuTeachers`);
        }
    };

    return(
        <div className='home'>

            <div className='form'>

                <div className='logo'>
                    <img src={logo} alt='logo' onClick={homeRedirect}/>
                    <p className='nombreLogo'>~ P O K I ~</p>
                </div>

                <div className='formLogIn'>
                    <input className='input' type='email' name='email' title='Email' 
                        placeholder='Correo electrónico' lenght='50' onChange={handleState} />

                    <input className='input' type='password' name='password' title='Password' 
                        placeholder='Contraseña' lenght='20' onChange={handleState} />
                </div>

                <div className='formButtons'>
                    <button className='btnQR' onClick={logeame}> Entrar </button>
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