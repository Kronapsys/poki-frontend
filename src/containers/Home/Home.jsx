import React from 'react';
import './Home.css';
import logo from '../../img/logo.png';
import Btn from '../../components/Btn/Btn';

const Home = () => {
    return(
        <div className="home">

            <div className="form">

                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>

                <div className="formButtons">
                    <Btn nombre = 'Entrar' destination='logIn'/>
                    <Btn nombre = 'Registrarse' destination='register'/>
                </div>
            </div>
            
        </div>
    );
};

export default Home;