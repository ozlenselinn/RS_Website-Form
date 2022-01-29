import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';


function IlgiDers() {
  
  const [inputFields, setInputFields] = useState([
    { dersOnem: '' }
   ]);
   
   const [inputFields2, setInputFields2] = useState([
    { dersTeknik: '' }
   ]);

   const [inputFields3, setInputFields3] = useState([
    { dersOzel: '' }
   ]);

   const [inputFields4, setInputFields4] = useState([
    { dersBolDisi: '' }
   ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("InputFields2", inputFields2);
  };
  
  const handleSubmit3 = (e) => {
  e.preventDefault();
    console.log("InputFields3", inputFields3);
  };


  const handleSubmit4 = (e) => {
    e.preventDefault();
    console.log("InputFields4", inputFields4);
  };

  


  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }


  const handleChangeInput2 = (index2, event2) => {
    const values2 = [...inputFields2];
    values2[index2][event2.target.name] = event2.target.value;
    setInputFields2(values2);
  }

  const handleChangeInput3 = (index3, event3) => {
    const values3 = [...inputFields3];
    values3[index3][event3.target.name] = event3.target.value;
    setInputFields3(values3);
  }

  const handleChangeInput4 = (index4, event4) => {
    const values4 = [...inputFields4];
    values4[index4][event4.target.name] = event4.target.value;
    setInputFields4(values4);
  }


 const handleAddFields = () => {
    setInputFields([...inputFields, { dersOnem: '' }])
   
  }

  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { dersTeknik: '' }])
   
  }
  
  const handleAddFields3 = () => {
    setInputFields3([...inputFields3, { dersOzel: '' }])
   
  }

  const handleAddFields4 = () => {
    setInputFields4([...inputFields4, { dersBolDisi: '' }])
   
  }

 const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  const handleRemoveFields2 = (index2) => {
    const values2  = [...inputFields2];
    values2.splice(index2, 1);
    setInputFields2(values2);
  }

  const handleRemoveFields3 = (index3) => {
    const values3  = [...inputFields3];
    values3.splice(index3, 1);
    setInputFields3(values3);
  }

  const handleRemoveFields4 = (index4) => {
    const values4  = [...inputFields4];
    values4.splice(index4, 1);
    setInputFields4(values4);
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
      <h2>Ilgili Dersler:</h2>
      <br></br>
      <h3>Bolum Ici Dersler</h3>
      <br></br>
      <p>- İş hayatınıza ciddi seviyede önemli olacağını düşündüğünüz dersler:</p>
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth"
          name="dersOnem" 
          label="Ders: "
          value={inputField.dersOnem}
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

     <div className = 'field-text'>
      <p>- Teknik/Bölüm İçi Seçmeliler:</p>
     </div>

      <form onSubmit={handleSubmit2}>
        { inputFields2.map((inputField2, index2) => (
         <div key={index2} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name ="dersTeknik"
          label="Ders: "
          value={inputField2.dersTeknik}
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
    
<div className = 'field-text'>
      <p>- Sizin üniversitenize ve bölümünüze özel, sizi bir adım öne çıkaracağını düşündüğünüz dersler:</p>
     </div>

      <form onSubmit={handleSubmit3}>
        { inputFields3.map((inputField3, index3) => (
         <div key={index3} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name ="dersOzel"
          label="Ders: "
          value={inputField3.dersOzel}
          onChange={event3 => handleChangeInput3(index3, event3)}
          variant="standard"
          />
        
        <IconButton
              onClick={() => handleRemoveFields3(index3)}
         >
         <RemoveIcon />
           </IconButton>
    
       <IconButton
         onClick={() => handleAddFields3()}
        >
         <AddIcon />
         </IconButton>
      </div>

)) }
           
</form>
    
<div className = 'field-text'>
    <h3>Bolum Dısı Dersler</h3>
    <br></br>
      <p>- Kendi bölümünüz dışında aldığınız, başvurularınızda önemli olacağını düşündüğünüz dersler:</p>
     </div>

      <form onSubmit={handleSubmit4}>
        { inputFields4.map((inputField4, index4) => (
         <div key={index4} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name ="dersBolDisi"
          label="Ders: "
          value={inputField4.dersBolDisi}
          onChange={event4 => handleChangeInput4(index4, event4)}
          variant="standard"
          />
        
        <IconButton
              onClick={() => handleRemoveFields4(index4)}
         >
         <RemoveIcon />
           </IconButton>
    
       <IconButton
         onClick={() => handleAddFields4()}
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

export default IlgiDers;


































           

         

        


      


