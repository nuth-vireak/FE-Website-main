import React from 'react';
import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_ascs/ASCS_UNDERGRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import OutlineTrack from "component/page/departmentContent/component/reused/outline_track";
import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";

// import styled from "styled-components";
// import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
// import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
// import {HeaderHighLightStyle, HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";

import {SkillSection} from "component/page/departmentContent/component/reused/SkillSection";
import {GoalSection} from "component/page/departmentContent/component/reused/GoalSection";

// import {
//     GridLayoutWrapper,
//     HeaderHighLightStyleMargin,
//     HighLightHeaderStyled
// } from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled";

import {PartnerSection} from "component/page/departmentContent/component/reused/PartnerSection";


const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--ascs-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"0, 23, 31, 0.8",
        headerColor:"ascs-header-color"

    }

export default function AscsDepartmentUndergraduate()
{
    return(
        <DepartmentProgramDetail

            ColorTheme={ColorTheme}
            GraduationYears={4}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}
            GoalSection={<GoalSection goalSection={DEPARTMENT_PROGRAM_MOCK_DATA.goalSection} labelColor={"var(--ascs-primary-color)"} children={
                <PartnerSection columns={3} partnerSection={DEPARTMENT_PROGRAM_MOCK_DATA.partnerSection}/>}/>}
            SkillSection={<SkillSection skillSection={DEPARTMENT_PROGRAM_MOCK_DATA.skillInfor}/>}
            AdmissionSection={<AdmissionSection colorTheme={"var(--ascs-primary-color)"} admissionSection={DEPARTMENT_PROGRAM_MOCK_DATA.admissionSection}/>}
            TrackSection={<OutlineTrack colorTheme={["#4db6ac","#009688","#00796b"]} trackListSection={DEPARTMENT_PROGRAM_MOCK_DATA.trackListSection}/>}
            extraSummary={<ExtraSummary additionalInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor}/>}
        />
    )
}



const ExtraSummary = ({additionalInfor}) => {
    return(
        <div>
            <ul>
                {additionalInfor.listInfo.map((each,index)=>
                    <li key={index}>
                        {each}
                    </li>
                )}
            </ul>
            <p>
                {additionalInfor.endStatement}
            </p>
        </div>
    )}

