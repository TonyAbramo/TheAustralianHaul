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

  const titlePadding: React.CSSProperties = {
    padding: '20px'
  }

  return (
    <div style={BottomPanelStyle} >
      <p style={titlePadding}>New Products</p>
      <Grid />
      <div>TODO :
        Handle images, titles and prices with backend ??
        change images to png
        

      </div >
    </div >
  )
}