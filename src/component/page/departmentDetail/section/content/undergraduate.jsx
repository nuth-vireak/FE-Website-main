import React from 'react';
import Button from "component/reused-component/button/button";


function Undergraduate({forwardRefs,imgUrl,imgUrl_mobile})
{
    return (

        <div ref={forwardRefs} className={"content-undergraduate"} id={"content-undergraduate"}>

            {/*{inView ? console.log("2 ture")  : console.log("2 false")}*/}

            <img
                className={"background"}
                src={imgUrl}
                alt={""}
            />

            <img
                className={"background-mobile"}
                src={imgUrl_mobile}
                alt={""}
            />

            <div className="banner-description right-banner-style">
                {/*<h2 className={`content-title ${inView && "float-left-animation"}`}>*/}
                <h2 className={`content-title`}>
                    {/*<h2 className={`content-title float-left-animation`}>*/}
                    undergraduate
                    <br/>
                    degree
                </h2>
                <p className={"content-description"}>
                    An undergraduate degree is a colloquial term for an academic degree earned by a person who has completed undergraduate courses. In the United States, it is usually offered at an institution of higher education, such as a college or university
                </p>
                <div className={"button-wrapper"}>
                    <Button link="/department/ited/undergraduated" outlineStyle={"outline-button"} label={"Learn More"}/>
                </div>
            </div>
        </div>
    );
}

export default Undergraduate;