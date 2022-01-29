import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Referans() {
  
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
      <h2>Referanslarınız:</h2>
      <br></br>
      <p>Buraya varsa üniversite hayatınızdaki proje, iş ve staj danışmanı, çeşitli etkinlik ve projelerde mentör, 
        yakın olduğunuz üniversite hocaları gibi kişi/kişilerden size referans olacak kişilerin isim ve iletişim bilgilerini yazabilirsiniz.</p>
     </div>
     <div className = 'field-style-inner'>
        <TextField fullWidth 
       
       id="fullWidth"
       label="Referanslarınızdan bahsediniz"
       multiline
       rows={20}
       variant="filled"
       
    
     />
     </div>
 
 
 </Box>
 </div>
);
}
       
       
        
        
      


