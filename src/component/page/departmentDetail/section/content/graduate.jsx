import React from 'react';
import Button from "component/reused-component/button/button";

function Graduate({forwardRefs,imgUrl,imgUrl_mobile}) {
    return (
        <div ref={forwardRefs} className={"content-graduate"} id={"content-graduate"} >

            <img className={"background"} src={imgUrl} alt={""}/>
            <img className={"background-mobile"} src={imgUrl_mobile} alt={""}/>
            <div className="banner-description left-banner-style white-text">
                <h2 className={`content-title`}>
                    graduate
                    <br/>
                    degree
                </h2>
                <p className={"content-description"}>
                    A graduate school is a school that awards advanced academic degrees with the general requirement that students must have earned a previous undergraduate degree
                </p>
                <div className={"button-wrapper"}>
                    <Button label={"Learn More"} link="/department/ited/graduated"/>
                </div>
            </div>
        </div>
    );
}

export default Graduate;