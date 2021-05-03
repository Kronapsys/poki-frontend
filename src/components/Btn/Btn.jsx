import React from 'react';
import './Btn.css';
import {useHistory} from 'react-router-dom';

const Btn = (props) => {

    let history = useHistory();

    const redirectMe = () => {
        history.push(`/${props.destination}`)
    };

    let onClick = () => redirectMe();

    if(props.action) onClick = props.action;

    return(
        <div onClick={onClick} className='btnStyle'>
            {props.nombre}
        </div>
    );
};

export default Btn;