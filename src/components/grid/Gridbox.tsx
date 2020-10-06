import * as React from 'react';

import itemImage from '../../assets/item1.jpg';


export default function Gridbox() {

    const gridboxStyle: React.CSSProperties = {
        width: '200px',
        height: '300px',
        border: '1px solid black',
        textAlign: 'center',
        margin: '0px auto'

    }

    return (
        <div style={gridboxStyle}>
            <img
                src={itemImage}
                alt='item'
                width={150}
            />
            <p>itemname</p>
            <h2>price</h2>
        </div>

    )
}