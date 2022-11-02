import React, { useState, useEffect } from 'react';
import "./move_to_top_btn.scss";

const move_to_top = () => {
    window.scrollTo(0, 0);
}

const MoveToTopButton = () => {

    let [top, setTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setTop(window.scrollY <= 300);
        })
        return () => window.removeEventListener("scroll", () => {
            setTop(window.scrollY <= 300);
        })
    })


    return (
        <div className={`btn-to-top ${top ? 'close-button' : 'display-button'}`}
            onClick={() => move_to_top()}>
            <i className="fa-solid fa-angle-up fa-xl button-icon"/>
            {/*<i className="fa-solid fa-caret-up fa-2xl button-icon"/>*/}
            {/*<i className="fa-solid fa-chevron-up fa-xl button-icon"/>*/}
        </div>
    )
}

export default MoveToTopButton;