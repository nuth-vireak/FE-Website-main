import React from 'react';
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import styled from "styled-components";
import {HeaderSectionSmallStyled, HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {ListLabelStyled, ListStyled} from "component/reused-component/TextStyled/list.styled";
import {FlexLayoutStyled} from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionLayout.styled";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {ImportantTextStyled} from "component/reused-component/TextStyled/important.styled";


const HeaderSectionSmallStyledExtend = styled(HeaderSectionSmallStyled)
    ` 
      //color: #333333;
      //color: #00897b;
      font-weight: 700;
      font-size: clamp(0.85em, 1.25vw, 1.15em);
      margin-bottom: 1em;
    `
AdmissionSection.defaultProps =
    {
        // colorTheme:"#009688"
    }

function AdmissionSection({admissionSection,colorTheme}) {
    return (
        <ContentMarginStyled>
            <SectionPaddingStyled className="requirement-section contentWrapper">
                <HeaderSectionStyled>
                    {admissionSection.header !== null ? admissionSection.header : "Requirement"}
                </HeaderSectionStyled>
                <FlexLayoutStyled>
                    <div className={"left-content"}>
                        <HeaderSectionSmallStyledExtend style={{color:colorTheme}}>
                            {admissionSection.description === "" ? "Requirement that students must have a high school diploma":admissionSection.description }
                        </HeaderSectionSmallStyledExtend>

                        {admissionSection.description === "" &&
                            <ListLabelStyled>
                                Grade
                            </ListLabelStyled>}

                        <ListStyled>
                            {
                                admissionSection.list.map((list,index)=>
                                    <li key={index}>
                                        {list}
                                    </li>
                                )
                            }
                        </ ListStyled>
                    </div>
                    <img src={require(`assets/${admissionSection.img}`).default} alt=""/>
                </FlexLayoutStyled>
                <ImportantTextStyled style={{color:"#4C4C4C"}}>
                    {admissionSection.important}
                </ImportantTextStyled>
            </SectionPaddingStyled>
        </ContentMarginStyled>
    );
}

export default AdmissionSection;

