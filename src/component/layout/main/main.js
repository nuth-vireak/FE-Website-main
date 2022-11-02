import React, { Suspense, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import 'component/page/departmentContent/style/global_font_style.css'
import 'component/page/departmentContent/style/global_section_style.css'

import loadingIcon from 'assets/icon/png/fe_logo_loading.png'
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";

// const Research = React.lazy(()=>"component/page/project&research/research")

import Research from "component/page/project&research/research";
import ResearchArticle from "component/page/project&research/research-article";
const ComingSoon = React.lazy(()=> import("component/page/news&events/comingSoon"))
// import PageNotFound from 'component/page/pageNotFound/pageNotFound.jsx';
// import LoadingRoute from "component/reused-component/loading/loadingRoute";
const PageNotFound = React.lazy(() => import("../../page/dummyPage/pageNotFound.jsx"))
const Home = React.lazy(() => import("../../page/home/home.jsx"))
const AboutUs = React.lazy(() => import('../../page/about_us/style_components/about_us.jsx'))
// const News = React.lazy(() => import("../../page/news&events/news-event"))
// const Article = React.lazy(() => import("../../page/article/article.jsx"))
const Faq = React.lazy(() => import("../../page/faq/faq.jsx"))
// const Collaboration = React.lazy(() => import("component/page/collaboration/collaboration.jsx"))
const Department = React.lazy(() => import("component/page/department/department"))

const AscsDepartment = React.lazy(()=> import("component/page/departmentContent/ascs_department"))
const AscsDepartmentUndergraduate = React.lazy(()=> import("component/page/departmentContent/ascs-department-undergraduate"))

const BioDepartment = React.lazy(() => import("component/page/departmentContent/bio_department"))
const BioDepartmentUndergraduate = React.lazy(() => import("component/page/departmentContent/bio-department-undergraduate"))
const BioDepartmentGraduate = React.lazy(() => import("component/page/departmentContent/bio-department-graduate"))

const IteDepartmentGraduate = React.lazy(() => import("component/page/departmentContent/ite-department-graduate"))
const IteDepartmentUnderGraduate = React.lazy(() => import("component/page/departmentContent/ite-department-undergraduate"))
const IteDepartment = React.lazy(() => import("component/page/departmentContent/ite_department"))

const TeeDepartmentUndergraduate = React.lazy(() => import("component/page/departmentContent/tee-department-undergraduate"))
const TeedDepartment = React.lazy(() => import("component/page/departmentContent/tee_department"))

const LoadingRouteStyled = styled.div
    `
      background-color:#014164;
      height:100vh;
      color:white;
      text-align:center;
      position: relative;

      .centerWrapper
      {
        position: absolute;
        top: 50%;
        left: 50%;
        flex-direction: column;
        transform: translate(-50%, -50%);
        display:flex;
        //justify-content: center;
        align-items: center;
        margin:0;

        .fe-icon
        {
          max-width: 150px;
          margin-bottom:2em;
        }

        .loadingIcon
        {
          font-size: 4em;
        }
      }
    `

function LoadingRoute({ handleLoadingRoute }) {
    useEffect(() => {
        handleLoadingRoute(false)
        return () => {
            handleLoadingRoute(true)
        }
    })

    return (
        <FadeInStyled>
            <LoadingRouteStyled>
                <div className="centerWrapper">
                    {/*<h1>LOADING...</h1>*/}
                    <img className={"fe-icon"} src={loadingIcon} alt="" />
                    <i className="fas fa-spinner fa-pulse loadingIcon" />
                </div>
            </LoadingRouteStyled>
        </FadeInStyled>
    );
}



function Main({ handleLoadingRoute }) {

    return (

        <div style={{ scrollBehavior: "auto" }}>
            <Suspense fallback={<LoadingRoute handleLoadingRoute={handleLoadingRoute} />}>
                <Switch>
                    {/*Write your main page component here*/}
                    {/*Please Add your own route to you component too*/}
                    <Route exact path={['/', '/home']}><Home /></Route>
                    <Route path='/about-us'><AboutUs /></Route>
                    <Route path='/coming_soon'><ComingSoon/></Route>
                    <Route path='/department' exact><Department /></Route>
                    <Route path='/department/ascsd' exact ><AscsDepartment/></Route>
                    <Route path='/department/ascsd/undergraduate'><AscsDepartmentUndergraduate/></Route>

                    <Route path='/department/biod' exact ><BioDepartment /></Route>
                    <Route path='/department/biod/undergraduate' ><BioDepartmentUndergraduate /></Route>
                    <Route path='/department/biod/graduate' ><BioDepartmentGraduate /></Route>
                    <Route path='/department/ited' exact><IteDepartment /></Route>
                    <Route path='/department/ited/undergraduate'><IteDepartmentUnderGraduate /></Route>
                    <Route path='/department/ited/graduate'><IteDepartmentGraduate /></Route>
                    <Route path='/department/teed' exact><TeedDepartment /></Route>
                    <Route path='/department/teed/undergraduate'><TeeDepartmentUndergraduate /></Route>
                    {/* <Route path={'/news-event'} exact><News/></Route>
                            <Route path={'/news-event/:id'}><Article/></Route> */}
                    <Route path='/research-project' exact><Research /></Route>
                    <Route path='/news-event' exact><ComingSoon /></Route>
                    <Route path='/research-project/:articleID'><ResearchArticle /></Route>
                    {/*<Route path='/collaboration'><Collaboration /></Route>*/}
                    <Route path='/faq'><Faq /></Route>
                    <Route path=""><PageNotFound/></Route>
                </Switch>
            </Suspense>
        </div>
    );
}

export default Main;