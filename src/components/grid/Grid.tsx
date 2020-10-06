import * as React from 'react';

import Gridbox from './Gridbox';



export default function Grid() {

    const gridStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    return (
        <div style={gridStyle}>
            <Gridbox />
            <Gridbox />
            <Gridbox />
            <Gridbox />
            <Gridbox />
        </div>
    )
}