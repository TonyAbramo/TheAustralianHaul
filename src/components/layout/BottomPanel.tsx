import * as React from 'react';

interface BottomPanelProps {

}

export default function BottomPanel(props: BottomPanelProps) {

    const bottomPanelStyle: React.CSSProperties = {
        backgroundColor: "#FEFFFF",
        height: "50%",
        maxHeight: "50%",
        top: "50%",
        width: "100%",
        position: "absolute"

    }

    return (
        <div style={bottomPanelStyle} >bottom panel !</div>
    )
}