import React from 'react';
import './MainMenuParents.css';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';


const MainMenuParents = () => {
    return(
        <>
        <Header/>
        <div className='MainMenuParents'>
            <div className="areaMMP">
                <Btn nombre='Asistencia/ Retraso' destination=''/>
                <Btn nombre='Tratamientos' destination=''/>
                <Btn nombre='Alergias' destination=''/>
                <Btn nombre='Generar QR' destination='QRGenerator'/>
            </div>
            
        </div>
        </>
    );
};

export default MainMenuParents;