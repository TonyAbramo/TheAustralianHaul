import * as React from 'react';

interface LoginCheckboxProps {
  label: String,
  button: any
}

export default function LoginCheckbox(props: LoginCheckboxProps) {

  return (
    <div style={{ marginTop: 10, marginLeft: "21%" }}>
      {props.button}
      {props.label}
    </div>
  )
}

