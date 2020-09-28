import * as React from 'react';

import Navbar from '../menu/Navbar'

interface TopPanelProps {

}

export default function TopPanel(props: TopPanelProps) {

    const topPanelStyle: React.CSSProperties = {
        backgroundColor: "lavender",
        height: "50%",
        maxHeight: "50%"

    }

    return (
        <div style={topPanelStyle} >
            <Navbar />
        </div>
    )
}