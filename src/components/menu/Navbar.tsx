import * as React from 'react';

import australianHaulLogo from '../../assets/AH_logo.png'
import shoppingCartIcon from '../../assets/shopping-bag-white.png'

interface NavbarProps {
    height?: React.CSSProperties

}

export default function Navbar(props: NavbarProps) {

    // CSS Styles
    const navbarStyle: React.CSSProperties = {
        backgroundColor: "#C0E1EE",
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: `${props.height}`,
        padding: "0 20px"
    }
    const logoStyle: React.CSSProperties = {
        display: "flex",
    }
    const iconStyle: React.CSSProperties = {
        marginLeft: 50,
        marginRight: 70
    }
    const menuStyle: React.CSSProperties = {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: "#F7FFFE",
        fontSize: 18,
    }
    const spaceBetweenStyle: React.CSSProperties = {
        marginLeft: 30
    }

    return (
        <div style={navbarStyle} >
            <img
                src={australianHaulLogo}
                alt="Australian Haul logo"
                style={logoStyle}
                width={200}
                height={50}
            />
            <div style={menuStyle}>
                <div style={spaceBetweenStyle} >Home</div>
                <div style={spaceBetweenStyle} >Shop</div>
                <div style={spaceBetweenStyle} >Products</div>
                <div style={spaceBetweenStyle} >Contact</div>
            </div>
            <img
                src={shoppingCartIcon}
                alt="shopping cart icon"
                style={iconStyle}
                width={23}
                height="auto"
            />
        </div>
    )
}