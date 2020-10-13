import * as React from 'react';

import Gridbox from './Gridbox';



export default function Grid() {

    const gridStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const products: string[] = ['productA', 'productB', 'productC', 'productD', 'productE'];

    return (
        <div style={gridStyle}>
            {
                products.map(product => <Gridbox itemname={product} />)
            }
        </div>
    )
}