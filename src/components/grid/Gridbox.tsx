import * as React from 'react';

import itemImage from '../../assets/item1.jpg';

interface GridboxProps {
    itemname: string;
}


export default function Gridbox(props: GridboxProps) {

    const gridboxStyle: React.CSSProperties = {
        width: '200px',
        height: '300px',
        textAlign: 'center',
        backgroundColor: '#fff',
    }

    return (
        <div style={gridboxStyle}>
            <img
                src={itemImage}
                alt='item'
                width={150}
            />
            <p>{props.itemname}</p>
            <h2>price</h2>
        </div>

    )
}