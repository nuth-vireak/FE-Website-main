import React from 'react';
import {FlexLayoutStyled} from "component/page/departmentContent/component/reused/Intro-list-Additional/introListFlexLayout.styled";

function SkillList({skillInfor}) {
    return (
        <FlexLayoutStyled>
            <img className={"left-side"} src={require(`assets/${skillInfor.img}`).default} alt=""/>
            <div className="department-intro-skill">
                <h3 className="intro-description header-font-style  header-ss-font-size">
                    {skillInfor.description}
                </h3>

                <p className="intro-sub-header description-bold-style">
                    {skillInfor.softSkill.header}
                </p>
                <ul className="intro-list description-bold-style">
                    {skillInfor.softSkill.list.map((item,index) =>
                        <li key={index} className={"intro-list-item"}>{item}</li>
                    )}
                </ul>

                <p className="intro-sub-header description-bold-style">
                    {skillInfor.hardSkill.header}
                </p>

                <ul className="intro-list description-bold-style department-intro-text-margin-separator">
                    {skillInfor.hardSkill.list.map((item,index) =>
                        <li key={index} className={"intro-list-item"}>{item}</li>
                    )}
                </ul>
            </div>

        </FlexLayoutStyled>
    );
}

export default SkillList;