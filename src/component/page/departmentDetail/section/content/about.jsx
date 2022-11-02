import React from 'react';
import ScrollIntoView from "react-scroll-into-view";

export default function About({forwardRefs,imgUrl,imgUrl_mobile})
{
    return (
        <div ref={forwardRefs} className={"about-department"} id={"about-department"}>
            <img className={"background"} src={imgUrl} alt={""}/>
            <img className={"background-mobile"} src={imgUrl_mobile} alt={""}/>
            <div className="banner-description right-banner-style white-text">
                <h2 className={`about-title float-left-animation`}>
                    information technology engineering
                </h2>
                <p className={"about-description"}>
                    Information technology engineering (ITE) involves an architectural approach for planning, analyzing, designing, and implementing applications.The goal of ITE is to allow for a business to improve the way it manages its resources such as capital, people, and information systems to achieve its business goals.
                </p>
            </div>
            <ScrollIntoView selector="#content-undergraduate">
                <i className="fa fa-angle-double-down scroll-down-icon white-text"/>
            </ScrollIntoView>
        </div>
    );
}

