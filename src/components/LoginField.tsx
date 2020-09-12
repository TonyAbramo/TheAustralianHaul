import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

interface LoginFieldProps {
  label: String,
  image: any,
  style?: any
}


export default function LoginField(props: LoginFieldProps) {
  return (
    <TextField
      style={{ width: 250, marginTop: "20px", margin: "auto" }}
      className={props.style}
      id="input-with-icon-textfield"
      label={props.label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {props.image}
          </InputAdornment>
        ),
      }}
    />

  )
}


