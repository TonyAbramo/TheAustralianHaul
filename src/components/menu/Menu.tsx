import * as React from 'react';
import Button from '@material-ui/core/Button';

export default function Menu() {

    const menuStyle: React.CSSProperties = {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: "#F7FFFE",
        fontSize: 18,
    }
    const buttonStyle: React.CSSProperties = {
        marginLeft: 30,
        color: '#fff'
    }

    return (
        <div style={menuStyle} >
            <Button style={buttonStyle} >Home</Button>
            <Button style={buttonStyle} >Shop</Button>
            <Button style={buttonStyle} >Products</Button>
            <Button style={buttonStyle} >Contact</Button>
        </div>
    )
}