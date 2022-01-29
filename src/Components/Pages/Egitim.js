import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



export default function Egitim() {
  
    const [inputFields, setInputFields] = useState([
      { okul: '', bolum: '', sinif: '', girisYili: '', bitisYili: '', gpa: '' }
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
    setInputFields([...inputFields, { okul: '', bolum: '', sinif: '', girisYili: '', bitisYili: '', gpa: '' }])
   
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
 
  
      return (
         
          <div className = 'field-layer-egitim'>
          <Box 
        sx={{
          width: 500,
          position: 'absolute',
          
        }}
      autoComplete="off"
      >
            <div className='field-text-egitim'>
                <h2>Lise:</h2>
            </div>
             <div className='field-style-inner-egitim'>
            <TextField fullWidth label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="Mezun Olduğunuz Lise:"
            
            variant="standard"
          />
             </div>

             
             <div className='field-style-inner-egitim'>
            <TextField fullWidth label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="Lisenin Bulunduğu Şehir:"
            variant="standard"
            
          />
             </div>
           
            <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="Giriş Yılı:"
            variant="standard"

            />
             </div>

             <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="Mezuniyet Yılı:"
            variant="standard"

            />
             </div>

      <div className='field-text-egitim-uni'>
            <h2>Üniversite:</h2>
      </div>
      

      <form onSubmit={handleSubmit}>
        { inputFields.map((inputField, index) => (
      <div key={index} className='field-style-inner'>
        <div className = 'field-style-inner-egitim'>
            <TextField fullWidth label="fullWidth" id="fullWidth"
            name="okul"
            id="standard-required"
            label="Okul:"
            variant="standard"
            value={inputField.okul}
            onChange={event => handleChangeInput(index, event)}
            
          />
            </div>
      
      <div className='field-style-inner-egitim'>
      <TextField fullWidth label="fullWidth" id="fullWidth"
            name="bolum"
            id="standard-required"
            label="Bölüm:"
            variant="standard"
            value={inputField.bolum}
            onChange={event => handleChangeInput(index, event)}
            
        />
       </div>

       <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
            name="sinif"
            id="standard-required"
            label="Sınıf:"
            variant="standard"
            value={inputField.sinif}
            onChange={event => handleChangeInput(index, event)}

            />
        </div>

        <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
            name="girisYili"
            id="standard-required"
            label="Giriş Yılı:"
            variant="standard"
            value={inputField.girisYili}
            onChange={event => handleChangeInput(index, event)}

            />
        </div>
       
        <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
            name="bitisYili"
            id="standard-required"
            label="(Tahmini) Bitiş Yılı:"
            variant="standard"
            value={inputField.bitisYili}
            onChange={event => handleChangeInput(index, event)}

            />
        </div>
      
        <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
            name ="gpa"
            id="standard-required"
            label="CGPA:"
            variant="standard"
            value={inputField.gpa}
            onChange={event => handleChangeInput(index, event)}

            />
        </div>
          
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

))}

          </form>
     
          </Box>
    </div>

           

    );
}







            
      
  
  
  
  
  
      
  
      
  
  