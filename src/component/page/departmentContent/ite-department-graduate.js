import React from 'react';
import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_ite/ITE_GRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import Visions from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/visions";
import {AdditionalSectionStyled} from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled";
import OutlineTrack from "component/page/departmentContent/component/reused/outline_track";
import OutcomeSection from "component/page/departmentContent/component/reused/OutcomeSection/OutcomeSection";
import Strategy from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/strategy";
import AdmissionSpecialSection
    from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSpecialSection";
import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";
import {GoalSection} from "component/page/departmentContent/component/reused/GoalSection";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--ite-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"0, 23, 31, 0.8",
        headerColor:"ite-header-color"

    }

export default function IteDepartmentGraduate()
{
    return(
        <DepartmentProgramDetail
            AdditionalIntroSection={
                <AdditionalSectionStyled>




                </AdditionalSectionStyled>}
            CooperationSection={
                <ContentMarginStyled background={"#00171f"}>
                    <SectionPaddingStyled className={"contentWrapper"}>
                        <HeaderSectionStyled  style={{color: "white"}}>
                            Cooperation & Effort
                        </HeaderSectionStyled>
                        <Strategy flexDirection={"row-reverse"}
                                  header={"Cooperation & Effort"}
                                  strategy={DEPARTMENT_PROGRAM_MOCK_DATA.cooperationAndEffortSection} />
                    </SectionPaddingStyled>
                </ContentMarginStyled>
            }
            TrackSection={
                <OutlineTrack
                    colorTheme={["#4dd0e1","#00bcd4","#0097a7"]}
                    label={"Research Fields"}
                    trackListSection={DEPARTMENT_PROGRAM_MOCK_DATA.trackListSection}/>}
            GoalSection={<GoalSection goalSection={DEPARTMENT_PROGRAM_MOCK_DATA.goalSection} labelColor={"#00838f"}/>}
            AdmissionSection={<AdmissionSection colorTheme={"#00838f"} admissionSection={DEPARTMENT_PROGRAM_MOCK_DATA.admissionSection}/>}
            GraduationYears={2}
            ColorTheme={ColorTheme}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}/>
    )
}

