import * as React from 'react';

import Menu from './Menu';

import australianHaulLogo from '../../assets/AH_logo.png';
import shoppingCartIcon from '../../assets/shopping-bag-white.png';



export default function NavBar() {

    const navbarStyle: React.CSSProperties = {
        backgroundColor: "#C0E1EE",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 20px",
        marginTop: 20
    }
    const iconStyle: React.CSSProperties = {
        marginLeft: 50
    }

    return (
        <div style={navbarStyle} >
            <img
                src={australianHaulLogo}
                alt="logo"
                width={200}
                height={50}
            />
            <Menu />
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