import React from 'react';
import './Home.css';
import logo from '../../img/logo.png';
import Btn from '../../components/Btn/Btn';
// import axios from 'axios';

const Home = () => {

    // let a = axios.get('http://localhost:3000/parents');
    // console.log(a);

    return(
        <div className='home'>

            <div className='form'>

                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <p className='nombreLogo'>~ P O K I ~</p>
                </div>

                <div className='formButtons'>
                    <Btn nombre = 'Entrar' destination='logIn'/>
                    <Btn nombre = 'Registrarse' destination='register'/>
                </div>
            </div>
        </div>
    );
};

export default Home;