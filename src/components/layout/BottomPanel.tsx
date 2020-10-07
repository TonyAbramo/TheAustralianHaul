import * as React from 'react';
import GridAuto from '../grid/GridAuto'

interface BottomPanelProps {

}

export default function BottomPanel(props: BottomPanelProps) {

    const bottomPanelStyle: React.CSSProperties = {
        backgroundColor: "#FEFFFF",
        minHeight: "50%",
        top: "50%",
        width: "100%",
        position: "absolute",

    }
    const titleStyle: React.CSSProperties = {
        padding: "0 30px",
        margin: "35px 0"
    }

    return (
        <div style={bottomPanelStyle} >
            <div style={titleStyle} >Featured Products</div>
            <GridAuto />
        </div>
    )
}