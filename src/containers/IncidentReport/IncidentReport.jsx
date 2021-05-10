import React, {useState} from 'react';
import './IncidentReport.css';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import axios from "axios";



const IncidentReport = () => {
    

    let history = useHistory();

    const [report, setReport] = useState({
        treatmen: "",
        description: ""
    });

    let body = {
        treatment: report.treatment,
        description : report.description
    };

    const sendReport = async () => {
        await axios.post("http://localhost:3000/incidents-report", body);

        history.push('/mainMenuTeachers')
    };

    const handleState = (event) => {
        setReport({
            ...report,
            [event.target.name]:
                event.target.type === "number"
                    ? +event.target.value
                    : event.target.value,
        });
    };

    return(
        <>
        <Header/>
        <div className='IncidentReport'>
            <div className="incidentReportForm">
                <input className='input' type='text' name='treatment' title='treatment' placeholder='Tratamiento' lenght='30' onChange={handleState}/>
                <input className='input' type='textarea' name='description' title='description' placeholder='Descripción de lo sucedido' lenght='250' onChange={handleState}/>

                <button className='btnQR' onClick={sendReport}> Enviar </button>
            </div>
        </div>
        </>
    );
};

export default IncidentReport;