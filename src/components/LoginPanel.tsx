import * as React from 'react';

import LoginField from './LoginField';
import { PictoEmail, PictoPasswd } from './Images';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import LoginCheckbox from './LoginCheckbox';

const WIDTH = 10

const panelStyle: React.CSSProperties = {
  backgroundColor: "#eee",
  width: "25%",
  height: 700,
  margin: "50px auto 50px auto"
}

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  paddingTop: 50
}

export default function LoginPanel() {

  const [isClicked, setClick] = React.useState(false)

  const handleClickLogin = () => {
    setClick(!isClicked)
  }

  return (
    <div style={panelStyle}>
      <h1 style={titleStyle}>LOGIN</h1>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: 50 }}>
        <LoginField label="identifiant" image={<PictoEmail />} />
        <LoginField label="password" image={<PictoPasswd />} />
        <LoginCheckbox label="Remember me" button={<Checkbox />} />
        <div style={{ margin: "auto", paddingTop: 50 }}>
          <Button
            variant="contained"
            color={isClicked ? "secondary" : "primary"}
            style={{ width: WIDTH * 20 }}
            onClick={handleClickLogin}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  )
}