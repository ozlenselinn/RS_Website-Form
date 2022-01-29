import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';


function Gonullu() {
  
  const [inputFields, setInputFields] = useState([
    { gTecrube: '' }
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
    setInputFields([...inputFields, { gTecrube: '' }])
   
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
      <h2>Gonullu Tecrubeleriniz:</h2>
      <br></br>
      <p> (Buraya yer aldığınız gönüllü projeleri ve o projelerde yer aldığınız görevlerden kısaca bahsedebilirsiniz. 
          Örnek olarak; <br></br>öğrenci topluluklarında, sosyal sorumluluk projelerinde vs. aldığınız görevlerden, görev aldığınız zaman aralığını da 
          belirterek yazabilirsiniz. Eğer göreviniz aktif olarak devam etmekte ise bunu da lütfen belirtiniz.)</p>
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name = "gTecrube"
          label="Gönüllü Tecrübe: "
          multiline
          rows={4}
          value={inputField.gTecrube}
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

export default Gonullu;
  

     


           

         

        


      


