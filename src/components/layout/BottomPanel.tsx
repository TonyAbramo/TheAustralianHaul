import * as React from 'react';

import Grid from '../grid/Grid';

interface BottomPanelProps {

}

export default function BottomPanel(props: BottomPanelProps) {

  const BottomPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    width: "100%",
    minHeight: "50%",
    padding: "10px 0px"
  }

  const titleStyle: React.CSSProperties = {
    padding: '20px',
    fontWeight: 'bold'
  }

  return (
    <div style={BottomPanelStyle} >
      <p style={titleStyle}>New Products</p>
      <Grid />
    </div >
  )
}