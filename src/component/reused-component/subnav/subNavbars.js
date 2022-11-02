import React, {useEffect, useState} from 'react'

import './style/subNavbar.css'
import ScrollIntoView from 'react-scroll-into-view'

export default function SubNavbars({sectionList,currentSection})
{
    const [oldY,setOldY] = useState(0)
    const SubNavRef = React.useRef();

    const ChangeNavbarPosition = (event) => {

        if (oldY > window.scrollY){
            SubNavRef.current.classList.replace("SubNavbar-position-top", "SubNavbar-position-bottom");
            SubNavRef.current.classList.remove("SubNavbar-wrapper-active")

        } else {
            SubNavRef.current.classList.replace("SubNavbar-position-bottom", "SubNavbar-position-top");
            SubNavRef.current.classList.add("SubNavbar-wrapper-active")

        }

        setOldY(window.scrollY);
    }

    useEffect(()=>{}, [])

    // useEffect(() => {
    //     window.innerWidth >1024 && window.addEventListener("scroll", ChangeNavbarPosition);
    //     return () => {window.removeEventListener("scroll", ChangeNavbarPosition);
    //     };
    // });


    return(
        <div ref={SubNavRef} className={`SubNavbar-wrapper SubNavbar-position-bottom`}>
            <input type="checkbox" id={"toggle-drop-down"} className={"toggle-drop-down"}/>
            <label htmlFor="toggle-drop-down" className={"toggle-drop-down-label"}>
                <i className={"fas fa-angle-right drop-down-icon"}/>
            </label>

            <ul className={"SubNavbar"}>
                {sectionList.map(({label,id},index)=>

                    <li className={currentSection[label] ? "Navbar-Item":"Navbar-Item--hidden"} key={index}>
                        {currentSection[label]}
                        <ScrollIntoView selector={id}>
                            <p className={"Navbar-Label"}>
                                {label}
                            </p>
                        </ScrollIntoView>
                    </li>
                )}
            </ul>
        </div>
    )
}