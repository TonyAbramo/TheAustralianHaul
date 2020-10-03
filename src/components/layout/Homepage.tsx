import * as React from 'react';
import TopPanel from './TopPanel';

export default function Homepage() {

  const container: React.CSSProperties = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '90%',
    width: "70%",
    backgroundColor: "#eeeeee",
    margin: "auto",
    position: "absolute",
    zIndex: 10
  }

  return (
    <div style={container}>
      <TopPanel />
    </div>
  )
}
