import * as React from 'react';

import australianHaulLogo from '../../assets/AH_logo.png'
import shoppingCartIcon from '../../assets/shopping-bag-white.png'
import ButtonMUI from '../utils/Button';

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
        fontSize: 18,
    }


    return (
        <div style={navbarStyle} >
            <img
                src={australianHaulLogo}
                alt="Australian Haul logo"
                style={logoStyle}
                width={"auto"}
                height={35}
            />
            <div style={menuStyle}>
                <ButtonMUI label="Home" />
                <ButtonMUI label="Shop" />
                <ButtonMUI label="Products" />
                <ButtonMUI label="Contact" />
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