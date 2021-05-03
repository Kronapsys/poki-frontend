import React from 'react';
import './Home.css';
import logo from '../../img/logo.png';

const Home = () => {
    return(
        <div>
            <div className="home">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
            </div>
        </div>

    );
};

export default Home;