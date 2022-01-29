import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';


function IsTecrube() {
  
  const [inputFields, setInputFields] = useState([
    { staj: '' }
   ]);

   const [inputFields2, setInputFields2] = useState([
    { yariZamanliIs: '' }
   ]);

   const [inputFields3, setInputFields3] = useState([
    { tamZamanliIs: '' }
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

  const handleChangeInput3 = (index3, event3) => {
    const values = [...inputFields3];
    values[index3][event3.target.name] = event3.target.value;
    setInputFields3(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { staj: '' }])
   
  }

  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { yariZamanliIs: '' }])
   
  }

  const handleAddFields3 = () => {
    setInputFields3([...inputFields3, { tamZamanliIs: '' }])
   
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

  const handleRemoveFields3 = (index3) => {
    const values  = [...inputFields3];
    values.splice(index3, 1);
    setInputFields3(values);
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
      <h2>Is Tecrübeleriniz:</h2>
      <br></br>
      <p>Buraya daha önce yaptığınız staj, aday mühendislik, part-time çalışma gibi tecrübelerinizi, çalıştığınız yer ile birlikte yaptığınız 
        iş sırasında aldığınız görevi, yaptıklarınızı, bu tecrübenin size mesleki bakış açısı ve teknik bilgi olarak neler kattığını yazınız.</p>
     </div>
   
    <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
         <div key={index} style = {{width:500}} className='field-style-inner'>
         <TextField fullWidth label="fullWidth" 
          name ="staj"
          label="Staj: "
          multiline
          rows={4}
          value={inputField.staj}
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

         <form  onSubmit={handleSubmit2}>
        { inputFields2.map((inputField2, index2) => (
             <div key={index2} style = {{width:500}} className = 'field-style-inner'>
         <TextField fullWidth label="fullWidth"
          name = "yariZamanliIs"
          label="Yarı Zamanlı İş: "
          multiline
          rows={4}
          value={inputField2.yariZamanliIs}
          onChange={event2 => handleChangeInput2(index2, event2)}
          variant="filled"
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

      <form  onSubmit={handleSubmit3}>
        { inputFields3.map((inputField3, index3) => (
             <div key={index3} style = {{width:500}} className = 'field-style-inner'>
         <TextField fullWidth label="fullWidth"
          name ="tamZamanliIs"
          label="Tam Zamanlı İş: "
          multiline
          rows={4}
          value={inputField3.tamZamanliIs}
          onChange={event3 => handleChangeInput3(index3, event3)}
          variant="filled"
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
     








           
  </Box>
  </div>
 
  );
}

export default IsTecrube;

         

        


      


