import * as React from 'react';

import pictoEmail from "../assets/picto-email.png";
import pictoPasswd from "../assets/picto-passwd.png";

export function PictoEmail() {
  return (
    <img src={pictoEmail} alt="aie" style={{ width: 20, height: "auto" }} />
  )
}
export function PictoPasswd() {
  return (
    <img src={pictoPasswd} alt="aie" style={{ width: 20, height: "auto" }} />
  )
}
