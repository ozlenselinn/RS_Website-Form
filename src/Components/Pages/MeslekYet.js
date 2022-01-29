import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import TemelStyle from './TemelStyle.css';
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';


function MeslekYet() {
  
  const [inputFields, setInputFields] = useState([
    { IlgiAlan: '' }
   ]);

   const [inputFields2, setInputFields2] = useState([
    { hobi: '' }
   ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("InputFields2", inputFields2);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }


  const handleChangeInput2 = (index2, event2) => {
    const values = [...inputFields2];
    values[index2][event2.target.name] = event2.target.value;
    setInputFields2(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { ilgiAlan: '' }])
   
  }

  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { hobi: '' }])
   
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  const handleRemoveFields2 = (index2) => {
    const values  = [...inputFields2];
    values.splice(index2, 1);
    setInputFields2(values);
  }

  return (
    <div className = 'field-layer'>
    <Box 
      sx={{
        width: 500,
        position: 'absolute',
        
      }}
    autoComplete="off"
    >

    <div className = 'field-text'>
      <h2>Mesleki Yetenekler:</h2>
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          label="İlgi Alanı: "
          value={inputField.igiAlan}
          onChange={event => handleChangeInput(index, event)}
          variant="standard"
          />
        
        <IconButton
              onClick={() => handleRemoveFields(index)}
         >
         <RemoveIcon />
           </IconButton>
    
       <IconButton
         onClick={() => handleAddFields()}
        >
         <AddIcon />
         </IconButton>
      </div>

)) }
           
</form>

         <form  onSubmit={handleSubmit2}>
        { inputFields2.map((inputField2, index2) => (
             <div key={index2} style = {{width:500}} className = 'field-style-inner'>
         <TextField fullWidth label="fullWidth"
          label="Hobi: "
          value={inputField2.hobi}
          onChange={event2 => handleChangeInput2(index2, event2)}
          variant="standard"
          />
        
           <IconButton
              onClick={() => handleRemoveFields2(index2)}
            >
            
           <RemoveIcon />
            </IconButton>
           
            <IconButton
              onClick={() => handleAddFields2()}
            >
         <AddIcon />
            </IconButton>
          </div>
)) }
      </form>
           
  </Box>
  </div>
 
  );
}

export default MeslekYet;

         

        


      


