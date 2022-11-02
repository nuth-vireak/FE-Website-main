import React, {useState} from "react";
import {staffs, sectionList, sectionLabel, studentProject} from 'component/page/departmentDetail/util/SectionProps'

import SubNavbar from "component/reused-component/subnav/subNavbars";
import Contents from "./section/content/contents";
import Project from './section/project/project'
import Staff from './section/staff/staff'

import 'component/page/departmentDetail/style/departmentDetail.css'
import Room from "component/page/departmentDetail/section/room/room";
import LoadingOverlay from "component/reused-component/loading/loadingOverlay";

// const Contents = React.lazy(()=>import('component/page/departmentDetail/section/content/content'))
// const Staff = React.lazy(()=>import('component/page/departmentDetail/section/staff/staff'))
// const Project = React.lazy(()=>import('component/page/departmentDetail/section/project/project'))

export default function DepartmentDetail ()
{
    // const listRef = useRef();
    //
    // const [width, setWidth] = useState();

    // const getWidth = () =>
    // {
    //     console.log("function called")
    //     window.addEventListener('resize', function(event){
    //         // var newWidth = window.screen.width;
    //         // var newHeight = window.innerHeight;
    //         console.log(newWidth)
    //         // console.log(newHeight)
    //     });
    //
    // }

    // useEffect(() =>
    // {
    //     window.addEventListener("resize",getWidth)
    //     return window.removeEventListener("resize",getWidth)
    // },[])

    // let lastScrollY = window.scrollY;
    //
    // const scroll = () => {
    //     if (lastScrollY < window.scrollY)
    //     {
    //         // ref.classList.add("nav--hidden")
    //     } else {
    //         // ref.classList.remove("nav--hidden")
    //     }
    //     lastScrollY = window.scrollY;
    // }
    //
    // useEffect(() =>
    // {
    //     window.addEventListener("scroll", scroll)
    //     return () => {
    //         window.removeEventListener("scroll", scroll)
    //     };
    // }, [])

    const [isLoading,setLoading] = React.useState(true);

    function fakeRequest()
    {
        return new Promise(resolve => setTimeout(()=>resolve(),500))
    }

    // useEffect(()=>
    // {
    //     fakeRequest()
    //         .then(()=>
    //         {
    //             const el = document.querySelector(".loading-overlay")
    //             if(el)
    //             {
    //                 setLoading(!isLoading)
    //             }
    //         })
    // },[])

    const [section,setSection] = useState(
        {
            [sectionLabel.ABOUT]:false,
            [sectionLabel.UNDERGRADUATE]:false,
            [sectionLabel.GRADUATE]:false,
            [sectionLabel.PROJECT]:false,
            [sectionLabel.STAFF]:false,
        })

    const handleIntersection = (inView,entry,label) =>
    {
        // console.log({content:`handle Intersection ${label} ${entry.isIntersecting}`})
        setSection(prestate => ({...prestate,[label]:entry.isIntersecting}))
    }



    return (
        <div className={"DepartmentDetail"}>
                    <Contents
                        children={<SubNavbar sectionList={sectionList} currentSection={section}/>}
                        handleIntersection={handleIntersection}
                        threshold={0.75}
                        sectionLabel={sectionLabel}/>

                    <Project
                        handleIntersection={handleIntersection}
                        threshold={0.7}
                        sectionTitle={"Student Project"}
                        studentProject={studentProject}
                        sectionLabel={sectionLabel.PROJECT}/>

                    <Room
                        handleIntersection={handleIntersection}
                        threshold={0.7}
                        sectionLabel={sectionLabel.STUDY_ROOM}/>

                    <Staff
                        threshold={0.25}
                        sectionTitle={"Academic Staff"}
                        handleIntersection={handleIntersection}
                        staffs={staffs}
                        sectionLabel={sectionLabel.STAFF}/>
            </div>
    )

}
