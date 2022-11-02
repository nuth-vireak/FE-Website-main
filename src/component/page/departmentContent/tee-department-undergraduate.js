import React from 'react';

import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_tte/TEE_UNDERGRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import JobList from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/jobList";
import ResearchList
    from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-undergraduate/researchList";
import OutlineTrack from "component/page/departmentContent/component/reused/outline_track";
import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--tee-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"0, 23, 31, 0.8",
        headerColor:"tee-header-color"
    }

function TeeDepartmentUndergraduate()
{
    return(
        <DepartmentProgramDetail
            AdditionalIntroSection={
                <>
                    {/*<ResearchList researchInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.researchInfor}/>*/}
                    {/*<JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>*/}
                </>
            }
            TrackSection={<OutlineTrack colorTheme={["#f1816c","#f06a5c","#f05a52"]} trackListSection={DEPARTMENT_PROGRAM_MOCK_DATA.trackListSection}/>}
            // AdmissionSection={<AdmissionSection />}
            // AdmissionSection={<AdmissionSection colorTheme={"var(--tee-primary-color)"} admissionSection={DEPARTMENT_PROGRAM_MOCK_DATA.admissionSection}/>}
            GraduationYears={4}
            ProspectSection={
                <ContentMarginStyled>
                    <SectionPaddingStyled className={"contentWrapper"}>
                        <HeaderSectionStyled>
                            Prospect
                        </HeaderSectionStyled>
                        <ResearchList researchInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.researchInfor}/>
                        <JobList jobInfor={DEPARTMENT_PROGRAM_MOCK_DATA.sectionIntro.additionalInfor.jobInfor}/>
                    </SectionPaddingStyled>
                </ContentMarginStyled>
            }
            ColorTheme={ColorTheme}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}/>
    )
}

export default TeeDepartmentUndergraduate;