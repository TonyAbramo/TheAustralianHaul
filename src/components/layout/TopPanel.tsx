import * as React from 'react';
import NavBar from '../menu/NavBar';

export default function TopPanel () {
    
const topPanelStyle: React.CSSProperties = {
    backgroundColor: "#AAD7E6",
    height:"50%",
    maxHeight:"50%",
    width:"100%",
    position:"absolute"
}

    return(
        <div style={topPanelStyle} >
            <NavBar />
        </div>
    )
}