import React, { useState, useEffect } from 'react';
import { getFormInputs, deleteFormInput } from '../../API/Api';

export default function Delete() {
  const [formInputs, setFormInputs] = useState([]);
  const [deleted, setDeleted] = useState(false);
  
  const deleteHandler = (id) => {
    console.log(id)
    deleteFormInput(id).then(() => {
      setDeleted(!deleted);
    });
  }
  useEffect(() => {
    getFormInputs().then(data =>
      setFormInputs(data)
    );
  }, [deleted]);


  return (
    <div>
      {formInputs && Object.keys(formInputs).map(key => (
      
        <div style={{border:"black solid 1px",margin:"5px",padding:"15px"}} key={key}>
      
          <p>{formInputs[key].name}</p>
          <p>{formInputs[key].surname}</p>
          <p>{formInputs[key].age}</p>
          <p>{formInputs[key].mesag}</p>
          <button onClick={() => deleteHandler(key)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
