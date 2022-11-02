import React from 'react';
import {FlexLayoutStyled} from "component/page/departmentContent/component/reused/Intro-list-Additional/introListFlexLayout.styled";


function ResearchList({researchInfor}) {
    return (
        <FlexLayoutStyled>
            <img className={"left-side"} src={require(`assets/${researchInfor.img}`).default} alt=""/>

            <div className="right-side department-into-research">
                <h3 className="intro-description header-font-style  header-ss-font-size">
                    {researchInfor.description}
                </h3>
                <p className="intro-sub-header description-bold-style">
                    {researchInfor.header}
                </p>
                <ul className="intro-list description-bold-style department-intro-text-margin-separator">
                    {researchInfor.list.map((item,index) =>
                        <li key={index} className={"intro-list-item"}>{item}</li>
                    )}
                </ul>
            </div>
        </FlexLayoutStyled>
    );
}

export default ResearchList;