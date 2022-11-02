import React from 'react';
import '../../reused-component/gridlayout/card/card-overlay.css'

function CardOverlay({month,day,status}) {
    return (
        <>
            <span className={"overlay-label date-container"}>
                <p className={"month-label"}>{month}</p>
                <p className={"day-label"}>{day}</p>
            </span>
            <p className={"overlay-label label-status overlay-background"}>{status}</p>
        </>
);
}

export default CardOverlay;