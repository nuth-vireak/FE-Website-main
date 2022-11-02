import React from "react";
import "./content.css";
import "./content-responsive.css";
import { InView } from "react-intersection-observer";
import Button from "component/reused-component/button/button";
import img_1 from "assets/content-banner/UndergraduateDegree.png";
import img_2 from "assets/content-banner/GraduateDegree.png";
import about_img from "assets/content-banner/about-page.png";
import scrollIntoView from "scroll-into-view-if-needed";
import Main from "component/layout/main/main";
import { Link, useRouteMatch } from "react-router-dom";

// const node = document.getElementById('sectiontest')
//
// scrollIntoView(node, {
//     scrollMode: 'if-needed',
//     block: 'nearest',
//     inline: 'nearest',
// })

export default function Content() {
    const {path,url} = useRouteMatch()


  return (
    <>
      <InView>
        {({ inView, ref, entry }) => (
          <section ref={ref} className={"about-department"}>
            {inView ? console.log("call") : console.log("die")}
            <img className={"background"} src={about_img} alt={""} />
            <div className="banner-description right-banner-style white-text">
              {/*<h2 className={`about-title ${inView && "float-left-animation"}`}>*/}

              <h2 className={`about-title float-left-animation`}>
                information technology engineering
              </h2>

              <p className={"about-description"}>
                Information technology engineering (ITE) involves an
                architectural approach for planning, analyzing, designing, and
                implementing applications.The goal of ITE is to allow for a
                business to improve the way it manages its resources such as
                capital, people, and information systems to achieve its business
                goals.
              </p>
            </div>
            <i className="fa fa-angle-double-down scroll-down-icon white-text" />
          </section>
        )}
      </InView>
      <InView threshold={0.2}>
        {({ inView, ref, entry }) => {
          return (
            <section ref={ref} className={"content-undergraduate"}>
              {inView ? console.log("call 2") : console.log("die 2")}
              <img className={"background"} src={img_1} alt={""} />
              <div className="banner-description right-banner-style">
                {/*<h2 className={`content-title ${inView && "float-left-animation"}`}>*/}
                <h2 className={`content-title`}>
                  {/*<h2 className={`content-title float-left-animation`}>*/}
                  undergraduate
                  <br />
                  degree
                </h2>
                <p className={"content-description"}>
                  An undergraduate degree is a colloquial term for an academic
                  degree earned by a person who has completed undergraduate
                  courses. In the United States, it is usually offered at an
                  institution of higher education, such as a college or
                  university
                </p>
                <Link to={`${url}/${"undergraduate"}`}>
                  <Button
                    outlineStyle={"outline-button"}
                    label={"Learn More"}
                  />
                </Link>
              </div>
            </section>
          );
        }}
      </InView>

      <InView threshold={0.2}>
        {({ inView, ref, entry }) => (
          <section id={"sectiontest"} ref={ref} className={"content-graduate"}>
            <img className={"background"} src={img_2} alt={""} />
            <div className="banner-description left-banner-style white-text">
              {/*<h2 className={`content-title ${inView && "float-left-animation"}`}>*/}
              <h2 className={`content-title`}>
                graduate
                <br />
                degree
              </h2>
              <p className={"content-description"}>
                A graduate school is a school that awards advanced academic
                degrees with the general requirement that students must have
                earned a previous undergraduate degree
              </p>
              <Button label={"Learn More"} />
            </div>
          </section>
        )}
      </InView>
    </>
  );
}
