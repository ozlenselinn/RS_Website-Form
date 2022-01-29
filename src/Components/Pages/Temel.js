import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import TemelStyle from './TemelStyle.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Form, Field } from "react-final-form";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default function Temel() {
  
  let onSubmit = values => {
    console.log("values", values);
  };
  
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };



    return (
       
        <div className = 'field-layer'>
        <Box 
      sx={{
        width: 500,
        position: 'absolute',
        
      }}
    autoComplete="off"
    >
         <div className= 'field-style'>
          <TextField fullWidth label="fullWidth" id="fullWidth"
          required
          id="standard-required"
          label="İsminiz"
          
          variant="standard"
        />
           </div>
        

          <div className='field-text'>

            <h2>Iletisim Bilgileriniz</h2>
          </div>
           <div className='field-style-inner'>
          <TextField fullWidth label="fullWidth" id="fullWidth"
          required
          id="standard-required"
          label="Mail Adresiniz"
          
          variant="standard"
        />
           </div>

        <div className='field-style-inner'>
        <FormControl variant="standard" id = "fullWidth" required fullWidth>
        <InputLabel htmlFor="formatted-text-mask-input">Telefon Numaranız</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
         </FormControl>
           </div>

           <div className='field-style-inner'>
          <TextField fullWidth label="fullWidth" id="fullWidth"
          
          id="standard-required"
          label="Linkedin Profiliniz"
          
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