import * as React from 'react';

export default function Menu() {

    const menuStyle: React.CSSProperties = {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: "#F7FFFE",
        fontSize: 18,
    }
    const spaceBetweenStyle: React.CSSProperties = {
        marginLeft: 30,
    }

    return (
        <div style={menuStyle} >
            <div style={spaceBetweenStyle} >Home</div>
            <div style={spaceBetweenStyle} >Shop</div>
            <div style={spaceBetweenStyle} >Products</div>
            <div style={spaceBetweenStyle} >Contact</div>
        </div>
    )
}