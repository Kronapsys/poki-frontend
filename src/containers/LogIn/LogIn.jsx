import React from 'react';
import './LogIn.css';
import logo from '../../img/logo.png';
import Btn from '../../components/Btn/Btn';
import {useHistory} from 'react-router-dom';


const LogIn = () => {

    let history = useHistory();

    const homeRedirect = () => {
        history.push(`/`);
    };

    return(
        <div className='home'>

            <div className='form'>

                <div className='logo'>
                    <img src={logo} alt='logo' onClick={homeRedirect}/>
                    <p className='nombreLogo'>~ P O K I ~</p>
                </div>

                <div className='formLogIn'>
                    <input className='input' type='text' name='email' title='Email' placeholder='Correo electrónico' lenght='50' />
                    <input className='input' type='text' name='password' title='Password' placeholder='Contraseña' lenght='20' />
                </div>

                <div className='formButtons'>
                    <Btn nombre='Entrar' destination='logIn'/>
                </div>
            </div>
        </div>
    );
};

export default LogIn;