import React from 'react';
import './IncidentReport.css';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';



const IncidentReport = () => {
    

    let history = useHistory();

    return(
        <>
        <Header/>
        <div className='IncidentReport'>
            <div className="incidentReportForm">
                <input className='input' type='text' name='treatment' title='treatment' placeholder='Tratamiento' lenght='30' />
                <input className='input' type='textarea' name='description' title='description' placeholder='Descripción de lo sucedido' lenght='250' />

                <Btn nombre='Enviar' destination='mainMenuTeachers'/>
            </div>
        </div>
        </>
    );
};

export default IncidentReport;