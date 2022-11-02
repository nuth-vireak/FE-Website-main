import React from 'react';
import {Link} from 'react-router-dom'
import './menu_dropdown.scss'

export default function MenuDropdown({dropdownTitle,menuList,classes,classesItem}) {
    return (


        <div className={"menu-dropdown"}>

            <h1 className={"menu-dropdown-title uppercase-Text"}>{dropdownTitle}</h1>

            <ul className={`menu-dropdown-list ${classes}`}>
                    {menuList.map(({Menu,MenuLink,MenuTitle},index)=>
                    <li key={index} className={`menu-dropdown-item ${classesItem}`}>
                        <div className={"dropdown-item-wrapper"}>
                            <Link to={MenuLink} className={"dropdown-item-header no-decoration uppercase-Text"}>{MenuTitle}</Link>
                            <ul className={"dropdown-item-list"}>
                                {
                                    Menu.map(({subMenuLink,subMenuName},index)=>
                                        <li key={index} className={"dropdown-item-link"}>
                                            <Link to={subMenuLink} className={"dropdown-item-link-title no-decoration"}>{subMenuName}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </li>
                    )}
            </ul>
            <div style={{textAlign:"end"}}>
            </div>

        </div>
    );

}
