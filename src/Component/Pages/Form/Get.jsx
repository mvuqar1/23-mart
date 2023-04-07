import React, { useState, useEffect } from 'react';
import { getFormInputs } from '../../API/Api';

export default function Get() {
  const [formInputs, setFormInputs] = useState([]);

  useEffect(() => {
    getFormInputs().then(data =>
      setFormInputs(data)
    );
  }, []);

  return (
    <div>
      {formInputs && Object.values(formInputs).map(value => (
        <div style={{border:"black solid 1px",margin:"5px",padding:"15px"}} >
      
          <p>{value.name}</p>
          <p>{value.surname}</p>
          <p>{value.age}</p>
          <p>{value.mesag}</p>
        </div>
      ))}
    </div>
  );
}

