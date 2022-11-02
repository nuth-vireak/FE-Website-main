import React from 'react';

import DEPARTMENT_PROGRAM_MOCK_DATA from "utils/content/departmentDetail_bio/BIO_GRADUATE_MOCK_DATA.json"
import DepartmentProgramDetail from "component/page/departmentContent/component/template/department_program_detail";
import styled from "styled-components";

// import AdmissionSpecialSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSpecialSection";

import OutcomeSection from "component/page/departmentContent/component/reused/OutcomeSection/OutcomeSection";
// import Visions from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/visions";
// import Strategy from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/strategy";
import {
    GridLayoutWrapper,
    HeaderHighLightStyleMargin,
    HighLightHeaderStyled
} from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled";
import AdmissionSection from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionSection";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {GoalSection} from "component/page/departmentContent/component/reused/GoalSection";

const GridLayoutWrapperExtend = styled(GridLayoutWrapper)
    `
      grid-template-columns: repeat(4,1fr);
      @media(max-width:768px)
      {
        grid-template-columns: repeat(2,1fr);
      }

      img
      {
        
        //filter:contrast(.5) grayscale(1);
        margin:5% 20%;
        object-fit: contain;
        transition:all 250ms ease-in-out;
        
        &:hover
        {
          filter:contrast(1) grayscale(0);
          
        }
        
        width:100%;
        max-width: 250px;

        @media(max-width:1366px)
        {
          max-width: 200px;
        }
        @media(max-width:1024px)
        {
          max-width: 175px;
        }        
        @media(max-width:480px)
        {
          margin:10% 20%;
          
          max-width: 125px;
        }
      }
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
            BenefitSection={<BenefitSection benefitSection={DEPARTMENT_PROGRAM_MOCK_DATA.benefitSection}/>}
            GoalSection={<GoalSection goalSection={DEPARTMENT_PROGRAM_MOCK_DATA.goalSection} labelColor={"var(--bio-primary-color"} children={<PartnerSection/>}/>}
            OutComeSection={<OutcomeSection OutcomeSection={DEPARTMENT_PROGRAM_MOCK_DATA.outcomeSection}/>}
            AdmissionSection={<AdmissionSection colorTheme={"#43a047"} admissionSection={DEPARTMENT_PROGRAM_MOCK_DATA.admissionSection}/>}
            DEPARTMENT_PROGRAM_MOCK_DATA={DEPARTMENT_PROGRAM_MOCK_DATA}/>

    )
}
const PartnerSection = () =>
    <HighLightHeaderStyled>
        <HeaderHighLightStyleMargin style={{marginTop:"1em"}}>Partnership and support by</HeaderHighLightStyleMargin>
        <GridLayoutWrapperExtend>
            <img src={require("assets/logo/university/bio-m-partner-1.png").default}  alt={""}/>
            <img src={require("assets/logo/university/bio-m-partner-3.png").default}  alt={""}/>
            <img src={require("assets/logo/university/bio-m-partner-5.png").default}  alt={""}/>
            <img src={require("assets/logo/university/bio-m-partner-4.png").default}  alt={""}/>
        </GridLayoutWrapperExtend>
    </HighLightHeaderStyled>


const BenefitSection = ({benefitSection}) =>
    <ContentMarginStyled background={"#00171f"}>
        <SectionPaddingStyled className={"contentWrapper"}>
            <BenefitSectionStyled>
                <HeaderSectionStyled style={{color:"white"}}>
                    Benefit for student
                </HeaderSectionStyled>

                <ul className={"description-bold-style"}>
                    {benefitSection.map((each,index)=>
                        <li key={index}>

                            <img src={require(`assets/${each.img}`).default} alt=""/>
                            <p>{each.label}</p>
                        </li>
                    )}
                </ul>



            </BenefitSectionStyled>
        </SectionPaddingStyled>
    </ContentMarginStyled>
const BenefitSectionStyled = styled.section`
    color: #00171f;
  ul
  {
    display:grid;
    grid-template-columns: repeat(3,1fr);
    padding-left:unset;
    list-style: none;
    font-weight: 700;
    font-size: clamp(0.75em, 1.25vw, 1.15em);

    @media (max-width:480px)
    {
      grid-template-columns: repeat(1,1fr);
    }

    li{
      p
      {
        font-size: clamp(1em,1.25vw,1.15em);
      }
      margin: 10% 10% 0 10%;

      flex-direction:column;
      align-items:center;
      text-align: center;
      transition: all 250ms linear;
      
      @media (max-width:480px)
      {
        margin: 10% 0 ;
      }
      
      img{

        width:100%;
        max-width: 200px;

        @media(max-width:1366px)
        {
          max-width: 150px;
        }
        @media(max-width:1024px)
        {
          max-width: 125px;
        }
        //@media(max-width:480px)
        //{
        //  max-width: 75px;
        //}
        //@media(max-width:350px)
        //{
        //  max-width: 50px;
        //}
      }
      p
      {
        color: #DEDEDE;
        margin-bottom: 0;
        margin-top:1em
      }
    }
  }
`