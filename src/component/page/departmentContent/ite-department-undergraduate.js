import React from 'react';

import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_ite/ITE_UNDERGRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import JobList from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/jobList";
import ResearchList
    from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/researchList";
import SkillList
    from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/skillList";
import OutlineTrack from "component/page/departmentContent/component/reused/outline_track";
import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {SkillSection} from "component/page/departmentContent/component/reused/SkillSection";

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--ite-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"0, 23, 31, 0.8",
        headerColor:"ite-header-color"
    }

export default function IteDepartmentUndergraduate()
{
    return(
        <DepartmentProgramDetail
            GraduationYears={4}
            ColorTheme={ColorTheme}
            AdditionalIntroSection={
                <>

                    {/*<JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>*/}
                </>
            }
            ProspectSection={
                <ContentMarginStyled>
                    <SectionPaddingStyled className={"contentWrapper"}>
                        <HeaderSectionStyled>
                            Prospect
                        </HeaderSectionStyled>
                        <ResearchList researchInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.researchInfor}/>
                        <JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>
                        {/*<SkillList skillInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.skillInfor}/>*/}
                    </SectionPaddingStyled>
                </ContentMarginStyled>
            }
            // SkillSection={}
            SkillSection={<SkillSection skillSection={DEPARTMENT_PROGRAM_MOCK_DATA.skillInfor}/>}
            OutComeSection={<OutlineTrack colorTheme={["#4dd0e1","#00bcd4","#0097a7"]} trackListSection={DEPARTMENT_PROGRAM_MOCK_DATA.trackListSection}/>}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}/>
    )
}