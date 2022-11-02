import React from 'react';

import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_bio/BIO_GRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import styled from "styled-components";

import AdmissionSpecialSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSpecialSection";
import OutcomeSection from "component/page/departmentContent/component/reused/OutcomeSection/OutcomeSection";
import Visions from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/visions";
import Strategy from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/strategy";
import {
    FlexLayoutWrapper, GridCard, GridLayoutWrapper,
    HeaderHighLightStyleMargin,
    HighLightHeaderStyled, ListLabelStyledMargin, PartnerLogo
} from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled";

const GridLayoutWrapperExtend = styled(GridLayoutWrapper)
    `
      grid-template-columns: repeat(4,1fr);
      img
      {
        width:100%;
        max-width: 250px;
        object-fit: contain;
      }
    `

const AdditionalSectionStyled = styled.div
    `
      display:flex;
      flex-direction:column;
      gap: clamp(2em,4vw,4em);
    `

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
            ColorTheme={ColorTheme}
            GraduationYears={3}
            CustomizeCurriculumYearsLabel={['Foundation', 'Second Year (Research Master Track)', 'Second Year (Industrial Master Track)']}
            AdditionalIntroSection={
                <AdditionalSectionStyled>
                    <Visions label={"Vision"} vision={DEPARTMENT_PROGRAM_MOCK_DATA.visionSection}/>
                    <Strategy header={"Strategy"} strategy={DEPARTMENT_PROGRAM_MOCK_DATA.strategySection} />
                    <HighLightHeaderStyled>
                        <HeaderHighLightStyleMargin>Benefits program provides</HeaderHighLightStyleMargin>
                        <GridLayoutWrapper>
                            <GridCard>
                                <img src={require("assets/icon/png/bio/bio-m-exchange.png").default} alt=""/>
                                <ListLabelStyledMargin>Studying with foreign professor </ListLabelStyledMargin>
                            </GridCard>

                            <GridCard>
                                <img src={require("assets/icon/png/bio/bio-m-diploma.png").default} alt=""/>
                                <ListLabelStyledMargin>Industrial track Thesis or Research track Thesis </ListLabelStyledMargin>
                            </GridCard>

                            <GridCard>
                                <img src={require("assets/icon/png/bio/bio-m-invoice.png").default} alt=""/>
                                <ListLabelStyledMargin>Full scholarship Tuition fee and salary  </ListLabelStyledMargin>
                            </GridCard>
                        </GridLayoutWrapper>
                    </HighLightHeaderStyled>

                    <HighLightHeaderStyled>
                        <HeaderHighLightStyleMargin>Partnership and support by</HeaderHighLightStyleMargin>
                        <GridLayoutWrapperExtend>
                            <img src={require("assets/logo/university/bio-m-partner-1.png").default} />
                            <img src={require("assets/logo/university/bio-m-partner-2.png").default} />
                            <img src={require("assets/logo/university/bio-m-partner-3.png").default} />
                            <img src={require("assets/logo/university/bio-m-partner-4.png").default} />
                        </GridLayoutWrapperExtend>
                    </HighLightHeaderStyled>
                </AdditionalSectionStyled>
            }
            OutComeSection={<OutcomeSection OutcomeSection={DEPARTMENT_PROGRAM_MOCK_DATA.outcomeSection}/>}
            AdmissionSection={<AdmissionSpecialSection colorTheme={"var(--bio-primary-color)"} admissionSection={DEPARTMENT_PROGRAM_MOCK_DATA.admissionSection}/>}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}/>

    )
}