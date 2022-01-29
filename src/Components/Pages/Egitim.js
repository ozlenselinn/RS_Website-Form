import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, Field } from "react-final-form";
import ReactDOM from "react-dom";



export default function Temel() {
  
    let onSubmit = values => {
      console.log("values", values);
    };
    
    const [values, setValues] = React.useState({
      textmask: '(100) 000-0000',
      numberformat: '1320',
    });

  
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
            label="Meziniyet Yılı:"
            variant="standard"

            />
             </div>

      <div className='field-text-egitim-uni'>
            <h2>Üniversite:</h2>
      </div>

      <div className='field-style-inner-egitim'>
            <TextField fullWidth label="fullWidth" id="fullWidth"
            
            id="standard-required"
            label="Okul:"
            variant="standard"
            
          />
             </div>
      
      <div className='field-style-inner-egitim'>
      <TextField fullWidth label="fullWidth" id="fullWidth"
            
            id="standard-required"
            label="Bölüm:"
            variant="standard"
            
        />
       </div>

       <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="Sınıf:"
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
            label="(Tahmini) Bitiş Yılı:"
            variant="standard"

            />
        </div>
      
        <div className='field-style-inner-egitim'>
            <TextField label="fullWidth" id="fullWidth"
           
            id="standard-required"
            label="CGPA:"
            variant="standard"

            />
        </div>

        






            
      <div className="field-style-inner">
        <Form onSubmit={onSubmit}>
          {({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className='field-style-inner'>
                <label>Diğer hesaplarınız var mı? </label>
                <Field
                  name="showUsername"
                  component="input"
                  type="checkbox"
                  initialValue={false}
                />
              </div>
              {values.showUsername && (
                <div>
                 <TextField fullWidth label="fullWidth" id="fullWidth"
            
                id="standard-required"
                label="Hesap Link"
                variant="standard"
                />
                </div>
            
              )} 
  
            </form>
          )}
        </Form>
      </div>
  
             
  
      </Box>
      </div>
  
  
  
  
  
      
  
      
  
  );
    
  }