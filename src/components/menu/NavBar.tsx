import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';

import Menu from './Menu';

import australianHaulLogo from '../../assets/AH_logo.png';
import shoppingCartIcon from '../../assets/shopping-bag-white.png';




export default function NavBar() {

    const navbarStyle: React.CSSProperties = {
        backgroundColor: "#C0E1EE",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px 20px",
        marginTop: 20
    }
    const iconStyle: React.CSSProperties = {
        marginLeft: 50,
        color: "#fff",
    }

    return (
        <div style={navbarStyle} >
            <img
                src={australianHaulLogo}
                alt="logo"
                width={300}
                height='auto'
            />
            <Menu />
            <IconButton style={iconStyle}>
                <img
                    src={shoppingCartIcon}
                    alt="shopping cart icon"
                    width={23}
                    height="auto"
                />
            </IconButton>
        </div>
    )
}