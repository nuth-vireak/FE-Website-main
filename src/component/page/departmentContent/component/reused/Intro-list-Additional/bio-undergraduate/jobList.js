import React from 'react';
import {FlexLayoutStyled} from "component/page/departmentContent/component/reused/Intro-list-Additional/introListFlexLayout.styled";


function JobList({jobInfor}) {
    return (
        <FlexLayoutStyled>
            <img className={"left-side"} src={require(`assets/${jobInfor.img}`).default} alt=""/>
            <div className="right-side department-intro-job-prospect">
                <h3 className="intro-description header-font-style header-ss-font-size">
                    {jobInfor.description}
                </h3>
                <p className="intro-sub-header description-bold-style">
                    {jobInfor.header}
                </p>
                <ul className="intro-list description-bold-style department-intro-text-margin-separator">
                    {jobInfor.list.map((item,index)=>
                        <li key={index} className={"intro-list-item"}>{item}</li>
                    )}
                </ul>
            </div>
        </FlexLayoutStyled>



    );
}

export default JobList;