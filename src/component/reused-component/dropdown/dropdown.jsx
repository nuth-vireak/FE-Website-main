import React from "react";
import "./dropdown_style.scss";
import { Link } from "react-router-dom";

function dropdown({ title, menu = [] }) {
  return (
    <div className="Department-navbar">
      <div className="container-fluid header">
        <div className="row department_nav">
          <div className="col">
            <div className="row">
              {menu.map((x, index) => {
                return (
                  <div
                    key={x.MenuTitle} className={`col-4 topsubMenu ${index % 3 ? "col-nav" : ""}`}
                  >
                    <Link className={"text-link"} to={`/department/${x.MenuLink}`}>
                      <h6 className="text-header">{x.MenuTitle}</h6>
                    </Link>
                    <ul className="ul-left ">
                      {x.Menu.map((y) => {
                        return (
                          <li key={y.subMenuName}>
                            <Link className={" text-link"} to={y.subMenuLink}>
                              {y.subMenuName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-4 content-title">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dropdown;
