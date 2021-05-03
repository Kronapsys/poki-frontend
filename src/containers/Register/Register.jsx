import React from 'react';
import './Register.css';
import logo from '../../img/logo.png';
import Btn from '../../components/Btn/Btn';

const Register = () => {
    return(
        <div className="register">

            <div className="form">

                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>

                <div className="formRegister">

                    <input className='input' type='text' name='name' title='Name' placeholder='Nombre' lenght='30' />

                    <div className="doubleInput">
                        <input className='input' type='text' name='surname1' title='Surname_1' placeholder='Apellido 1' lenght='30' />
                        <input className='input' type='text' name='surname2' title='Surname_2' placeholder='Apellido 2' lenght='30' />
                    </div>
                    
                    <input className='input' type='text' name='address' title='Address' placeholder='Dirección' lenght='50' />

                    <div className="doubleInput">
                        <input className='input' type='text' name='dni' title='DNI' placeholder='dni / nif' lenght='10' />
                        <input className='input' type='text' name='phone' title='Phone' placeholder='Teléfono' lenght='9' />
                    </div>
                    
                    <input className='input' type='text' name='email' title='Email' placeholder='Correo electrónico' lenght='50' />
                    <input className='input' type='text' name='password' title='Password' placeholder='Contraseña' lenght='20' />

                </div>

                <div className="formButtons">
                    <Btn nombre = 'Darse de alta' destination=''/>
                </div>
                
            </div>
        </div>
    );
};

export default Register;