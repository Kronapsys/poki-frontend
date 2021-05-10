import React, {useState} from 'react';
import './Register.css';
import logo from '../../img/logo.png';
import axios from 'axios';
// import  checkError  from '../../utils/util';
import {useHistory} from 'react-router-dom';
import {REGISTER} from '../../redux/types/userType';
import {connect} from 'react-redux';

const Register = (props) => {

    const history = useHistory();

    const [dataRegister, setRegister] = useState({
        name: '',
        surname1: '',
        surname2: '',
        address: '',
        dni: '',
        phone: '',
        email: '',
        password: ''
    });

    // const [message,setMessage] = useState('');

    const handleState = (event) => {
        setRegister({
            ...dataRegister,
            [event.target.name]:
            event.target.type === "number"
            ? +event.target.value
            : event.target.value,
        });
    };

    const registrame = async () => {

        const body = {
            name: dataRegister.name,
            surname1: dataRegister.surname1,
            surname2: dataRegister.surname2,
            address: dataRegister.address,
            dni: dataRegister.dni,
            phone: dataRegister.phone,
            email: dataRegister.email,
            password: dataRegister.password
        };

        // // Control de errores

        // setMessage('');
        // let errorMessage = checkError(dataRegister);

        // setMessage(errorMessage);

        // if(errorMessage){
        //     return;
        // }

        console.log(body);
        let result = await axios.post("http://localhost:3000/parents", body);
        console.log(result);

        props.dispatch({
            type: REGISTER,
            payload: result
        });

        return setTimeout(() => {
            history.push('/login')
        }, 1000);
    };

    return(
        <div className='register'>

            <div className='form'>

                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <p className='nombreLogo'>~ P O K I ~</p>
                </div>

                <div className='formRegister'>

                    <input className='input' type='text' name='name' title='Name' placeholder='Nombre' lenght='30' onChange={handleState} />

                    <div className='doubleInput'>
                        <input className='input' type='text' name='surname1' title='Surname_1' placeholder='Apellido 1' lenght='30' onChange={handleState} />
                        <input className='input' type='text' name='surname2' title='Surname_2' placeholder='Apellido 2' lenght='30' onChange={handleState} />
                    </div>
                    
                    <input className='input' type='text' name='address' title='Address' placeholder='Dirección' lenght='50' onChange={handleState}/>

                    <div className='doubleInput'>
                        <input className='input' type='text' name='dni' title='DNI' placeholder='DNI / NIE' lenght='10' onChange={handleState}/>
                        <input className='input' type='text' name='phone' title='Phone' placeholder='Teléfono' lenght='9' onChange={handleState}/>
                    </div>
                    
                    <input className='input' type='text' name='email' title='Email' placeholder='Correo electrónico' lenght='50' onChange={handleState}/>
                    <input className='input' type='password' name='password' title='Password' placeholder='Contraseña' lenght='20' onChange={handleState}/>

                </div>

                <div className='formButtons'>
                <button className='btnQR' onClick={registrame}> Darse de alta </button>

                </div>
                
            </div>
        </div>
    );
};

export default connect()(Register);