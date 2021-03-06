import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Odul() {
  
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
      <h2>Odulleriniz/Sertifikalarınız:</h2>
      <br></br>
      <p>Buraya varsa mesleğinizle ilgili alanlarda aldığınız ödülleri ve sertifikaları içeriklerini kısaca açıklayarak yazabilirsiniz.</p>
     </div>

      <div className='field-style-inner'>
        <TextField fullWidth 
       
       id="fullWidth"
       label="Aldıgınız ödül ve sertifikalardan ve içeriklerinden bahsediniz"
       multiline
       rows={20}
       variant="filled"
       
    
     />
   </div>
 
 </Box>
 </div>
);
}