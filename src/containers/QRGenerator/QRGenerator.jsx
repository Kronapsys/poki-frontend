import axios from 'axios';
import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './QRGenerator.css';
import Header from '../../components/Header/Header';
// import Btn from '../../components/Btn/Btn';

const QRGenerator = () => {

    const [qr, setQr] = useState('');

    const generateQR = async () => {
        let QRValue = '5';
        setQr(<QRCode value={QRValue} size={128} />)
    }

    return(
        <>
        <Header/>
        <div className='QRGenerator'>
            <div className="areaQR">

                <div className="QR">
                  {qr}  
                </div>

                <input className='input' type='text' name='name' title='Name' placeholder='Nombre persona autoriazada' lenght='30' />

                <button className='btnQR' onClick={generateQR}> Generar QR </button>
                
            </div>
            
        </div>
        </>
    );
};

export default QRGenerator;