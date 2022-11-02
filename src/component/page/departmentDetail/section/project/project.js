import React from 'react';
import ProjectCard from "./projectCard";
import '../../style/project.css'

import {InView} from "react-intersection-observer";
import Button from "component/reused-component/button/button";

function Project({sectionTitle,threshold,sectionLabel,handleIntersection,studentProject})
{
    return (
        <InView  threshold={threshold} onChange={(inView,entry)=> handleIntersection(inView,entry,sectionLabel)}>
            {({inView, ref, entry})=>
                (
                    <div ref={ref} className={"project"} id={"project"}>
                        <div className={"test"}/>
                        <h1 className={"header"}>{sectionTitle}</h1>
                        <div className={"project-layout"}>
                            {
                                studentProject.map((project,index) =>
                                    <ProjectCard key={index}
                                                 title={project.title}
                                                 imgURL={project.imgUrl}/>
                                )
                            }
                        </div>
                        <div className={"align-button"}>
                            <Button
                                link={"/department/ited/project"}
                                label={"EXPLORE MORE"}
                                outlineStyle={"outline-button"}/>
                        </div>
                    </div>

                )}

        </InView>

    );
}

export default Project;