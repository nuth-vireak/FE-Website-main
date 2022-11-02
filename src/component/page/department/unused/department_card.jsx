import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom'
import 'component/reused-component/gridlayout/gridlayout.css'
import 'component/page/department/unused/style/department_card.css'

function Department_card({imgURL,title,date,link,filter})
{
    return (
        <li className={"list-card"}>
            <div className={"card-image img-hover-zoom"}>
                <Link to={link}>
                    <img className={`image ${filter}`} src={imgURL} alt=""/>
                </Link>
            </div>

            <div className={"card-article"}>
                <Link className={"title-link"} to={link}>
                    <h2 className={"department-title"}>{title}</h2>
                </Link>
                <p className={"article-date"}>{date}</p>
                <div className="article-detail">
                    <div className={"article-section"}>
                        <label className={"article-label"} htmlFor="article-list-point">you main skill</label>
                        <ul className={"article-list-point"} id={"article-list-point"}>
                            <li className={"point"}>Computer & mobile application Developer</li>
                            <li className={"point"}>Computer network</li>
                            <li className={"point"}>Data analysis</li>
                            <li className={"point"}>Games Developer</li>
                            <li className={"point"}>Information Technology operator</li>
                        </ul>
                    </div>

                    <div className={"article-section"}>
                        <label className={"article-label"} htmlFor="article-list-point">Research & innovation</label>
                        <ul className={"article-list-point"} id={"article-list-point"}>
                            <li className={"point"}>Computer & mobile application Developer</li>
                            <li className={"point"}>Computer network</li>
                            <li className={"point"}>Data analysis</li>
                            <li className={"point"}>Games Developer</li>
                            <li className={"point"}>Information Technology operator</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*<hr className={"end-line-article"}/>*/}
        </li>
    );
}

export default Department_card;