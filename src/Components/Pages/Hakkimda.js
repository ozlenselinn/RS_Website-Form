import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Hakkimda() {
  
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
      
      <div>
        <TextField fullWidth required
       
       id="fullWidth"
       label="Kendinizden kısaca bahsediniz"
       multiline
       rows={20}
       variant="filled"
       
    
     />
   </div>
 
 </Box>
 </div>
);
}
       
       
        
        
      


