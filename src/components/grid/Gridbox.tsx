import * as React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    const buttonStyle: React.CSSProperties = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#FFA553'
    }

    const margintopStyle: React.CSSProperties = {
        marginTop: '20px'
    }

    return (
        <div>
            <Paper style={gridboxStyle} elevation={3}>
                <img
                    style={margintopStyle}
                    src={itemImage}
                    alt='item'
                    width={150}
                />
                <p>{props.itemname}</p>
                <Button style={buttonStyle}>$ {Math.round(Math.random() * 300)}</Button>
            </Paper>
        </div>

    )
}