import React, {useState} from 'react';
import "./CreateEvent.css";
import Btn from "../../components/Btn/Btn";
import DateTimePicker from 'react-datetime-picker';

const CreateEvent = () => {

    const [value, onChange] = useState(new Date());


  return (
    
    <div className="CreateEvent">
      <div className="CreateEventForm">

        <input className='input' type='text' name='place' title='place' placeholder='Lugar' lenght='50' />
        <input className='input' type='textarea' name='description' title='description' placeholder='Descripción del evento' lenght='250' />
        <DateTimePicker className='dateTimePicker' onChange={onChange} value={value}/>
        
        <Btn nombre="Crear evento" destination="mainMenuTeachers" />
        
      </div>
    </div>

  );
};

export default CreateEvent;