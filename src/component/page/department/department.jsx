import React,{useEffect} from 'react';

import DepartmentSelection from "component/page/department/department_selection";
import Banner from "component/reused-component/banner/headerBanner/banner";
import DepartmentList from "utils/content/department/DEPARTMENT_LIST_MOCK_DATA.json"

import bannerImg from "assets/banner/department.jpg";
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";

import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
import {GlobalPaddingExceptTop} from "component/reused-component/padding/global-padding-expect-top";
import {ThreeGridLayoutStyled} from "component/reused-component/displayLayout/threeGridLayout.styled";

function Department() {

    useEffect(()=>{
        return ()=>{

        }
    },[])

    return (
        <FadeInStyled>
            <Banner title={"Departments"} imgUrl={bannerImg} positionY={"0%"} positionX={"0%"}/>
            <GlobalPaddingExceptTop>
                {/*<h1 className={"department-label menu-label"}>Departments</h1>*/}
                <SectionHeaderStyled>
                    Departments
                </SectionHeaderStyled>
                <ThreeGridLayoutStyled maxColumns={2}>
                    {DepartmentList.map((department,index)=>
                            <DepartmentSelection
                                key={index}
                                link={department.link}
                                label={department.label}
                                researchList={department.researchList}
                                skillList={department.skillList}
                                imgUrl={department.imgUrl}/>
                    )}
                </ThreeGridLayoutStyled>
            </GlobalPaddingExceptTop>
        </FadeInStyled>
    );
}

export default Department;