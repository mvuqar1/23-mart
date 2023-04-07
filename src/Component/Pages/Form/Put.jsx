import React, { useState, useEffect } from 'react';
import { getFormInputs } from '../../API/Api';

export default function Put() {
  const [formInputs, setFormInputs] = useState([]);

  useEffect(() => {
    getFormInputs().then(data =>
      setFormInputs(data)
    );
  }, []);

  return (
    <div>
      {formInputs && Object.keys(formInputs).map(key => (
        <div style={{border:"black solid 1px",margin:"5px",padding:"15px"}} >
      
          <p>{formInputs[key].name}</p>
          <p>{formInputs[key].surname}</p>
          <p>{formInputs[key].age}</p>
          <p>{formInputs[key].mesag}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

