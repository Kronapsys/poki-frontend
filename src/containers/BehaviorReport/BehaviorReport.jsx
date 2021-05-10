import React from 'react';
import './BehaviorReport.css';
import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';



const BehaviorReport = () => {
    

    let history = useHistory();

    return(
        <>
        <Header/>
        <div className='BehaviorReport'>
            <div className="BehaviorReportForm">
                <input className='input' type='textarea' name='description' title='description' placeholder='Descripción de lo sucedido' lenght='250' />
                
                <Btn nombre='Enviar' destination='mainMenuTeachers'/>
            </div>
        </div>
        </>
    );
};

export default BehaviorReport;