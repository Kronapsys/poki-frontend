import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './QRGenerator.css';
import Header from '../../components/Header/Header';
import axios from 'axios';

const QRGenerator = () => {

    const [qr, setQr] = useState('');

    let parentId = window.localStorage.getItem('parentId')

    // let QRValue = axios.get(`http://localhost:3000/parents/${parentId}`);
    

    const generateQR = async () => {
        setQr(<QRCode value={parentId} size={128} />)
    }

    return(
        <>
        <Header/>
        <div className='QRGenerator'>
            <div className="areaQR">

                <div className="QR">
                  {qr}  
                </div>

                {/* <input className='input' type='text' name='name' title='Name' placeholder='Nombre persona autoriazada' lenght='30' /> */}

                <button className='btnQR' onClick={generateQR}> Generar QR </button>
                
            </div>
            
        </div>
        </>
    );
};

export default QRGenerator;