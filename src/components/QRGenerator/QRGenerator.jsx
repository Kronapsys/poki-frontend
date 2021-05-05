import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './QRGenerator.css';
// import Btn from '../../components/Btn/Btn';

const QRGenerator = () => {

    const [qr, setQr] = useState('');

    const generateQR = async () => {
        setQr(<QRCode value='' size='128' />)
    }

    return(
        <div className='QRGenerator'>
            <div className="areaQR">

                <div className="QR">
                  {qr}  
                </div>

                <button className='btnQR' onClick={generateQR}> Generar QR </button>
                
            </div>
            
        </div>
    );
};

export default QRGenerator;