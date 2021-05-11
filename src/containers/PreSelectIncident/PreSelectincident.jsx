import React from 'react';
import './PreSelectIncident.css';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';

const PreSelectIncident = () => {
    return(
        <>
        <Header/>
        <div className='PreSelectIncident'>
            <div className="preSelectForm">
                <Btn nombre='Incidente' destination='incidentReport'/>
                <Btn nombre='Comportamiento' destination='behaviorReport'/>  
            </div>
        </div>
        </>
    );
};

export default PreSelectIncident;