import React from 'react';
import '../style/activity.css'
import '../style/activityResponsive.css'

export default function Activity({classes,catalog,description,title,imgUrl})
{
    const image = require(`assets/${imgUrl}`).default
    console.log(image)
    console.log(imgUrl)
    return (

        <div className={classes}>
            <div className={"addGradient"}>
                <img className={"image"} src={image} alt={"activityImg"}/>
            </div>

            <div className="activity-label">
                <p className={"catalog s-text upper-text"}>{catalog}</p>
                <h3 className={"title upper-text"}>{title}</h3>
                <p className={"description s-text"}>{description}</p>
            </div>

        </div>
    );
}