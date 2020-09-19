import * as React from 'react';

export default function Homepage() {

  const container: React.CSSProperties = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 700,
    width: "70%",
    backgroundColor: "#eeeeee",
    margin: "auto",
    position: "absolute",
    zIndex: 10
  }

  return (
    <div style={container}>
      TODO: <br></br>
      - split container en 2<br></br>
      - upper side of the container<br></br>
      - clean up files hierarchy

    </div>
  )
}
