import * as React from 'react';
import Carousel from '../carousel/Carousel';
import NavBar from '../menu/NavBar';

export default function TopPanel() {

    const topPanelStyle: React.CSSProperties = {
        backgroundColor: "#AAD7E6",
        height: "50%",
        maxHeight: "50%",
        width: "100%",
        position: "absolute"
    }

    return (
        <div style={topPanelStyle} >
            <NavBar />
            <Carousel />
        </div>
    )
}