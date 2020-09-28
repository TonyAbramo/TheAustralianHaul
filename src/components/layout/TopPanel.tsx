import * as React from 'react';

import Navbar from '../menu/Navbar'

interface TopPanelProps {

}

export default function TopPanel(props: TopPanelProps) {

    const topPanelStyle: React.CSSProperties = {
        backgroundColor: "#AAD7E6",
        height: "50%",
        maxHeight: "50%",
        width: "100%",
        position: "absolute"

    }

    return (
        <div style={topPanelStyle} >
            <Navbar />
        </div>
    )
}