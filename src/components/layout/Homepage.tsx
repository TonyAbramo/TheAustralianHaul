import * as React from 'react';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';

export default function Homepage() {

  const container: React.CSSProperties = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '90%',
    width: "70%",
    backgroundColor: "#FEFFFF",
    margin: "auto",
    position: "absolute",
    zIndex: 10
  }

  return (
    <div style={container}>
      <TopPanel />
      <BottomPanel />
    </div>
  )
}
