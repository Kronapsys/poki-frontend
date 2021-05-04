import React from 'react';
import './MainMenuParents.css';
import Btn from '../../components/Btn/Btn';

const MainMenuParents = () => {
    return(
        <div className='MainMenuParents'>
            <div className="areaMMP">
                <Btn nombre='Asistencia/ Retraso' destination=''/>
                <Btn nombre='Tratamientos' destination=''/>
                <Btn nombre='Alergias' destination=''/>
                <Btn nombre='Generar QR' destination='QRCode'/>
            </div>
            
        </div>
    );
};

export default MainMenuParents;