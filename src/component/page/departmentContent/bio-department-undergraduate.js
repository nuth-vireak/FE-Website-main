import React from 'react';


import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_bio/BIO_UNDERGRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import OutlineTrack from "component/page/departmentContent/component/reused/outline_track";

// import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";

import JobList from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/jobList";
import ResearchList from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/researchList";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";


const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--bio-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"0, 23, 31, 0.8",
        headerColor:"bio-header-color"

    }

export default function BioDepartmentUndergraduate()
{
    return(
        <DepartmentProgramDetail
            GraduationYears={4}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}
            ColorTheme={ColorTheme}
            AdditionalIntroSection={
                <>
                    {/*<ResearchList researchInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.researchInfor}/>*/}
                    {/*<JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>*/}
                </>
            }
            ProspectSection={
                <ContentMarginStyled>
                    <SectionPaddingStyled className={"contentWrapper"}>
                        <HeaderSectionStyled>Prospects</HeaderSectionStyled>
                        <ResearchList researchInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.researchInfor}/>
                        <JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>
                    </SectionPaddingStyled>
                </ContentMarginStyled>}

            TrackSection={<OutlineTrack colorTheme={["#66bb6a","#4caf50","#43a047"]} trackListSection={DEPARTMENT_PROGRAM_MOCK_DATA.trackListSection}/>}
        />
    )
}