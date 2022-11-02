import React from 'react';
import {Link} from 'react-router-dom'
import '../../reused-component/gridlayout/card/card-effect.css'

function News_card({imgURL,title,date,link,filter,overlay})
{
    return (
        <li className={"list-card"}>
            <div className={"card-image img-hover-zoom"}>
                {overlay}
                <Link to={link}>
                    <img className={`image ${filter}`} src={imgURL} alt=""/>
                </Link>
            </div>

            <div className={"card-article"}>
                <Link className={"title-link"} to={link}>
                    <h2 className={"article-title"}>{title}</h2>
                </Link>
                <p className={"article-date"}>{date}</p>
            </div>
        </li>
    );
}

export default News_card;