import React from 'react';
import 'component/page/departmentDetail/style/projectCard.css'
import {Link} from 'react-router-dom'

function ProjectCard({imgURL,title})
{
    const importImage = require(`assets/${imgURL}`).default
    return (
        <div className={"project-card img-hover-zoom"}>
            <Link className={"card-link"} to={"/home"}>
                <img className={"card-image image active"} src={importImage} alt="Example"/>
            </Link>
            <h3 className={"card-title"}>{title}</h3>
        </div>
    );
}

export default ProjectCard;