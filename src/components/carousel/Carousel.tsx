import * as React from 'react';

import carouselDunes from '../../assets/dunes.png'

export default function Carousel() {

    const carouselStyle: React.CSSProperties = {
        height: "100%"
    }
    const carouselDunesStyle: React.CSSProperties = {
        position: "absolute",
        bottom: 0
    }
    const centeredTextStyle: React.CSSProperties = {
        color: "#F7FFFE",
        textAlign: "center",
        fontSize: 20,
        marginTop: 90
    }

    return (
        <div style={carouselStyle} >
            <div style={centeredTextStyle} >
                <p>
                    Do you want to enjoy Australian <br />
                    quality? <br />
                    You're in the right spot.
                </p>
            </div>
            <img
                src={carouselDunes}
                alt="AustralianHaul logo"
                style={carouselDunesStyle}
                width="100%"
                height="auto"
            />
        </div>


    )
}