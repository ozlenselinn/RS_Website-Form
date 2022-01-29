import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';


function Dil() {
  
  const [inputFields, setInputFields] = useState([
    { dil: '' }
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
    setInputFields([...inputFields, { dil: '' }])
   
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
      <h2>Dil:</h2>
      <br></br>
      <p> Buraya ana diliniz de dahil olacak şekilde konuşabildiğiniz dilleri seviyenizi de belirterek yazınız. 
          Bu noktada girdiğiniz dil sınavı sonuçlarını da paylaşabilirsiniz. A1 seviyesinde bildiğiniz dilleri ne zaman öğrenmeye başladığınızı ve 
          öğrenmeye devam etmek isteyip istemediğinizi de belirterek yazınız.</p>
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name = "dil"
          label="Dil: "
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

export default Dil;
  

     


           

         

        


      


