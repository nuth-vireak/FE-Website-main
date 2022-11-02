import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

import MenuDropdown from "component/reused-component/menuDropdown/menu_dropdown";
import { departmentMenuDropdown_List, ProgrammeMenuDropdown_List } from "component/layout/header/dropdown/dropdownMenuList";

function Navbar({ loadingRoute }) {

  const navbarRef = useRef(null);
  const navbar_toggleRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", changeNavColorHandle);
    return () => {
      window.removeEventListener("scroll", changeNavColorHandle);
    };
  });

  const linkOnClink = () => {
    navbar_toggleRef.current.checked = false;
    navbarRef.current.classList.replace("nav-dark", "nav-light");
  };


  const changeNavColorHandle = () => {
    if (window.scrollY >= 20) {
      navbarRef.current.classList.replace("nav-light", "nav-dark");
    } else {
      navbarRef.current.classList.replace("nav-dark", "nav-light");
    }
    navbar_toggleRef.current.checked = false;
  };



  return (
    <header
      className={loadingRoute ? "nav-light nav-show " : "nav-light nav-show nav-none-display"}
      ref={navbarRef}
      id={"nav-container"}>

      <div className="navbar-logo">


        <a href="https://www.rupp.edu.kh" className={"redirect-rupp"}>
          <img className={"rupp-icon"} src={require("assets/logo/fe/logo-rupp.svg").default} alt="" />
          <img className={"rupp-title"} src={require("assets/logo/fe/title-rupp.svg").default} alt="" />
        </a>

        <hr className={"vr"} />

        <Link className={"redirect-home"} to={'/home'}>
          <img className={"fe-icon"} src={require("assets/logo/fe/logo-fe.svg").default} alt="" />
          <img className={"fe-title"} src={require("assets/logo/fe/title-fe-2.svg").default} alt="" />
        </Link>

        <Link to={"/home"} className={"navbar-logo-mobile-wrapper"}>
          <img className={"navbar-logo-mobile"} src={require("assets/logo/fe/logo-fe-mobile-2.svg").default} alt="" />
        </Link>

      </div>

      <input
        ref={navbar_toggleRef}
        onClick={() => {
          if (window.scrollY >= 20 || navbar_toggleRef.current.checked) {
            navbarRef.current.classList.replace("nav-light", "nav-dark");
          } else {
            navbarRef.current.classList.replace("nav-dark", "nav-light");
          }
        }}
        className={"navbar-toggle"}
        type="checkbox"
        id={"navbar-toggle"} />

      <nav className={"navbar"}>
        <ul className={"navbar-list"}>

          <li className={"list-item"}>
            <Link onClick={linkOnClink} className={"item"} to={"/home"}>
              home
            </Link>
          </li>


          <li className={"list-item department-nav"}>
            <Link
              onClick={linkOnClink}
              className={"item department-item"}
              to={"/department"}>
              program{" "}

              <i className="fas fa-angle-right fa-rotate-90 dropDown-icon" />
            </Link>
            <div className={"dropdown-wrapper"}>
              <MenuDropdown dropdownTitle={"Programs"} menuList={ProgrammeMenuDropdown_List} />
            </div>
          </li>

          <li className={"list-item department-nav"}>
            <Link
              // onMouseEnter={()=> {
              //   dropdown_toggleRef.current.classList.replace("dropdown-invisible", "dropdown-show");
              //   console.log("hover")
              // }}
              // onMouseLeave={()=> dropdown_toggleRef.current.classList.replace("dropdown-show","dropdown-invisible")}
              onClick={linkOnClink}
              className={"item department-item"}
              to={"/department"}>
              Department{" "}

              <i className="fas fa-angle-right fa-rotate-90 dropDown-icon" />

            </Link>
            <div className={"dropdown-wrapper"}>
              <MenuDropdown classes={"menu-dropdown-list-grid"} classesItem={"menu-dropdown-item-unset"} dropdownTitle={"Departments"} menuList={departmentMenuDropdown_List} />
            </div>
          </li>

          <input type="checkbox" className={"menu-dropdown-toggle program-toggle"} id={"program-dropdown-toggle"} />
          <input type="checkbox" className={"menu-dropdown-toggle department-toggle"} id={"department-dropdown-toggle"} />


          <li className={"list-item dropdown-label"}>
            <label className={"item dropdown-toggle-label dropdown-toggle-label-program"} htmlFor={"program-dropdown-toggle"}>
              Program{" "}
              <i className="fas fa-angle-right fa-rotate-90 dropDown-icon" />
            </label>
          </li>
          <li className={"sub-list-wrapper program-wrapper"}>
            <ul className={"sub-list"}>

              <input type="checkbox" className={"menu-dropdown-toggle program-Honor"} id={"Honor-dropdown-toggle"} />
              <input type="checkbox" className={"menu-dropdown-toggle program-Bachelor"} id={"Bachelor-dropdown-toggle"} />
              <input type="checkbox" className={"menu-dropdown-toggle program-Master"} id={"Master-dropdown-toggle"} />


              <li className={"sub-list-item"}><label className={"subItem"} style={{ color: "#dfdfe0", textTransform: "uppercase" }}>Honor bachelor programs</label></li>
              <ul style={{ color: "white" }}>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/coming_soon"}>Food Technology and Engineering</Link></li>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/coming_soon"}>Data Science and Engineering</Link></li>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/ascsd"}>Automation and Supply chain system engineering</Link></li>

              </ul>

              <li className={"sub-list-item"}><label className={"subItem"} style={{ color: "#dfdfe0", textTransform: "uppercase" }}>Bachelor programs</label></li>
              <ul style={{ color: "white" }}>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/biod/undergraduate"}>bio Engineering Biotechnology</Link></li>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/ited/undergraduate"}>Information Technology Engineering</Link></li>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/teed/undergraduate"}>Telecommunication & electronic Engineering</Link></li>

              </ul>

              <li className={"sub-list-item"}><label className={"subItem"} style={{ color: "#dfdfe0", textTransform: "uppercase" }}>Master programs</label></li>
              <ul style={{ color: "#dfdfe0" }}>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/biod/graduate"}>bio Engineering Biotechnology</Link></li>
                <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/ited/graduate"}>Information Technology Engineering</Link></li>
              </ul>


            </ul>
          </li>

          <li className={"list-item dropdown-label"}>
            <label className={"item dropdown-toggle-label dropdown-toggle-label-dep"} htmlFor={"department-dropdown-toggle"}>
              Department{" "}
              <i className="fas fa-angle-right fa-rotate-90 dropDown-icon" />
            </label>
          </li>
          <li className={"sub-list-wrapper department-wrapper"}>
            <ul className={"sub-list"}>
              <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department"}>home</Link></li>
              <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/ascsd"}>Automation & Supply Chain Systems engineering</Link></li>
              <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/biod"}>Bio engineering</Link></li>
              <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/ited"}>Information Technology</Link></li>
              <li className={"sub-list-item"} onClick={linkOnClink}><Link className={"subItem"} to={"/department/teed"}>telecommunication & electronic</Link></li>
            </ul>
          </li>


          <li className={"list-item"}>
            <Link onClick={linkOnClink} className={"item"} to={"/about-us"}>
              about us
            </Link>
          </li>



          <li className={"list-item"}>
            <Link onClick={linkOnClink} className={"item"} to={"/research-project"}>
              Research & Project
            </Link>
          </li>


          {/* <li className={"list-item"}>
              <Link onClick={linkOnClink} className={"item"} to={"/news-event"}>
                news & events{" "}
              </Link>
            </li> */}

          {/*<li className={"list-item"}>*/}
          {/*  <Link onClick={linkOnClink} className={"item"} to={"/collaboration"}>*/}
          {/*    collaboration*/}
          {/*  </Link>*/}
          {/*</li>*/}

          <li className={"list-item"}>
            <Link onClick={linkOnClink} className={"item"} to={"/faq"}>
              Faq
            </Link>
          </li>




          {/*<li className={"list-item"}>*/}
          {/*  <Link onClick={linkOnClink} className={"item"} to={"/faq"}>*/}
          {/*    Royal University Of Phnom Penh*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
        {/*<div className={"navbar-spacer"}>{""}</div>*/}
        {/*<ul className={"navbar-footer"}>*/}
        {/*  <li className="rupp-logo">*/}
        {/*    <a href="https://rupp.edu.kh">*/}
        {/*      <img className={"logo"} src={logo} alt="" />*/}
        {/*      <img className={"title"} src={title} alt="" />*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <br/>*/}
        {/*  <li className={"copyrightName"}>*/}

        {/*    <p>*/}
        {/*      Copyright © 2022 Faculty of Engineering*/}
        {/*    </p>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </nav>

      <label htmlFor="navbar-toggle" className={"navbar-toggle-label"}>
        <i className="fas fa-bars" />
        <i className="fas fa-times" />
      </label>

      <div className="navbar-menu">
        {/*<i className="fas fa-search" />*/}
        {/*<i className="fas fa-globe" />*/}
        {/*<i className="fas fa-user-friends" />*/}
        {/*<i className="fa-solid fa-up-right-from-square"></i>*/}
        {/*<i className="fa-solid fa-list-ul"></i>*/}
        {/*<i className="fa fa-chevron-up"></i>*/}
        {/*<i className="fas fa-turn-up"></i>*/}
      </div>

    </header>
  );
}
export default Navbar;
