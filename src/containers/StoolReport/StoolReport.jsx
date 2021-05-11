import React, {useState} from 'react';
import './StoolReport.css';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import axios from "axios";



const StoolReport = () => {
    

    let history = useHistory();

    const [report, setReport] = useState({
        type: "",
        blood: false,
        parasites: false,
        mucus: false,
        description: ""
    });

    let body = {
        type: report.type,
        blood: report.blood,
        parasites: report.parasites,
        mucus: report.mucus,
        description : report.description
    };

    const sendReport = async () => {
        await axios.post("http://localhost:3000/stools-report", body);

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

    // const handleCheckbox = (event) => {
    //     if(event.target.checked === true) {
    //         setReport({...report, blood: true, parasites: true, mucus: true})
    //     }else {
    //         setReport({...report, blood: false, parasites: false, mucus: false})
    //     }
    // };
    const handleCheckbox = (e) => {
        setReport({...report, [e.target.name] : e.target.checked, [e.target.blood] : e.target.value})
    };

    return(
        <>
        <Header/>
        <div className='stoolReport'>
            <div className="stoolReportForm">
                <input className='input' type='text' name='type' title='type' 
                    placeholder='Diarrea, dura, normal, etc...' lenght='20' onChange={handleState}/>

                <input className='input' type='text' name='color' title='color' 
                    placeholder='Color' lenght='10' onChange={handleState}/>

                <div className="checkBoxForm" >

                    <div className="checkboxLine">
                        <input className="cbBlood" type='checkbox' name='blood' onChange={handleCheckbox} /> <p> : ¿ Sangre ? </p>
                    </div>

                    <div className="checkboxLine">
                        <input className="cbParasites" type='checkbox' name='parasites' onChange={handleCheckbox} /> <p> : ¿ Parásitos ? </p>
                    </div>

                    <div className="checkboxLine">
                        <input className="cbMucus" type='checkbox' name='mucus' onChange={handleCheckbox} /> <p> : ¿ Mocos ? </p>
                    </div>

                    <input className='input' type='textarea' name='description' title='description' 
                        placeholder='Anotaciones' lenght='250' onChange={handleState}/>
                </div>
                <button className='btnQR' onClick={sendReport}> Enviar </button>
            </div>
        </div>
        </>
    );
};

export default StoolReport;