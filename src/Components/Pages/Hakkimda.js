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
       <div className = 'field-text'>
      <h2>Kendinizden kısaca bahsediniz:</h2>
      <br></br>
      <p>Bu bölümde, kişilik özelliklerinizden, eğlendiğiniz, yapmayı sevdiğiniz işlerden ve hobilerinizden, katıldığınız takım işlerinden ve 
        gönüllü aktivitelerden, bunlardan neler öğrendiğinizden, sizi nasıl etkilediğinden bahsedebilirsiniz. Büyük tutkularınızı, zevklerinizi, 
        zorluklara karşı tutumunuzu, hayatta karşılaştığınız çeşitli durumlarda geçmişte verdiğiniz tepkilerinizi anlatabilirsiniz.
        Gelecek hayallerinizi, önümüzdeki 3-5-10 yıllık hedeflerinizi de ekleyebilirsiniz. 
        Bu bölümde özgür ve rahat bir şekilde kendinizi ifade edebilmeniz oluşacak özgeçmişin kalitesi için çok önemli, 
        kendinizi anlatırken önemli olduğunu düşündüğünüz her şeyi rahatlıkla ekleyin lütfen.</p>
     </div>
      
      <div className='field-style-inner'> 
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
       
       
        
        
      


