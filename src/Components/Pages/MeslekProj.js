import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';


function MeslekProj() {
  
  const [inputFields, setInputFields] = useState([
    { proje: '' }
   ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { proje: '' }])
   
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
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
      <h2>Mesleki Projeler:</h2>
      <br></br>
      <p>Buraya eğitim hayatınız boyunca yer aldığınız teknik (mesleki) projelerden, projeyi ve projede aldığınız görevi kısaca açıklayarak 
        yazabilirsiniz.</p>
      
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name = "proje"
          label="Proje: "
          multiline
          rows={4}
          value={inputField.proje}
          onChange={event => handleChangeInput(index, event)}
          variant="filled"
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

  </Box>
  </div>
 
  );
}

export default MeslekProj;
  

     


           

         

        


      


