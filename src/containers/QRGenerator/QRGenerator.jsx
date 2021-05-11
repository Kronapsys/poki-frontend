import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './QRGenerator.css';
import Header from '../../components/Header/Header';

const QRGenerator = () => {
    const [qr, setQr] = useState('');

    let parentId = window.localStorage.getItem('parentId')
    
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
            <button className='btnQR' onClick={generateQR}> Generar QR </button>
            </div>
        </div>
        </>
    );
};

export default QRGenerator;