import * as React from 'react';

interface BottomPanelProps {

}

export default function BottomPanel(props: BottomPanelProps) {

    const bottomPanelStyle: React.CSSProperties = {
        backgroundColor: "lightgoldenrodyellow",
        height: "50%",
        maxHeight: "50%"

    }

    return (
        <div style={bottomPanelStyle} >bottom panel !</div>
    )
}