import * as React from 'react';

import AustralianHaulLogo from '../../assets/AH_logo.png'

interface NavbarProps {
    height?: React.CSSProperties

}

export default function Navbar(props: NavbarProps) {

    const navbarStyle: React.CSSProperties = {
        backgroundColor: "#C0E1EE",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }

    const logoStyle: React.CSSProperties = {
        display: "flex",
        marginLeft: 10
    }

    const menuStyle: React.CSSProperties = {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row-reverse",
        color: "#F7FFFE"
    }

    return (
        <div style={navbarStyle} >
            <img
                src={AustralianHaulLogo}
                alt="AustralianHaul logo"
                style={logoStyle}
                width={200}
                height={50}
            />
            <div style={menuStyle}>
                <div style={{ margin: "0px 10px" }} >icon</div>
                <div>menu</div>
            </div>

        </div>
    )
}