import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Yayin() {
  
  return (
      <div className = 'field-layer'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
     
      >
      
      <div className = 'field-text'>
      <h2>Yayınlarınız:</h2>
      <br></br>
      <p>Buraya varsa mesleğinizle ilgili alanlarda yaptığınız yayınlarınızı ve içeriğini kısaca açıklayarak yazabilirsiniz.</p>
     </div>

      <div className='field-style-inner'>
        <TextField fullWidth 
       
       id="fullWidth"
       label="Yayınlarınızdan ve içeriklerinden kısaca bahsediniz"
       multiline
       rows={20}
       variant="filled"
       
    
     />
   </div>
 
 </Box>
 </div>
);
}