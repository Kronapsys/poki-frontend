import React from 'react';
import './Home.css';
import logo from '../../img/logo.png';
import Btn from '../../components/Btn/Btn';

const Home = () => {
    return(
        
        <div className="home">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>

            <div className="buttons">
                <Btn nombre = 'ENTRAR' destination='logIn'/>
                <Btn nombre = 'REGISTRARSE' destination='register'/>
            </div>
        </div>
        

    );
};

export default Home;