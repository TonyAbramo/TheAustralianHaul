import * as React from 'react';

interface BottomPanelProps {

}

export default function BottomPanel(props: BottomPanelProps) {

  const BottomPanelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    width: "100%",
    minHeight: "50%",
    padding: "10px 20px"
  }

  return (
    <div style={BottomPanelStyle} >
      <p>New Products</p>
      <div>TODO: add grid here</div>
    </div>
  )
}