import React from 'react';
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionSmallStyled, HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {ListLabelStyled, ListStyled} from "component/reused-component/TextStyled/list.styled";
import {FlexLayoutStyled} from "component/page/departmentContent/component/reused/AdmissionSection/AdmissionLayout.styled";
import styled from "styled-components";
import {ImportantTextStyled} from "component/reused-component/TextStyled/important.styled";


const HeaderSectionSmallStyledGreen = styled(HeaderSectionSmallStyled)
    `
      //color:${props => props.colorTheme}
      
    `
const ImportantColor = styled(ImportantTextStyled)
    `
      color:#4C4C4C ;
    `


function AdmissionSpecialSection({admissionSection,colorTheme}) {
    return (
        <SectionPaddingStyled>
            <HeaderSectionStyled>
                Requirement for the degree
            </HeaderSectionStyled>

            <HeaderSectionSmallStyledGreen colorTheme={colorTheme}>
                {admissionSection.description}
            </HeaderSectionSmallStyledGreen>
            <FlexLayoutStyled>
                <div className={"left-content"}>
                    {/*<div className></div>*/}

                    <ListLabelStyled>
                        {admissionSection.label}
                    </ListLabelStyled>
                    <ListStyled>
                        {admissionSection.list.map((item,index)=>
                            <li key={index}>
                                {item}
                            </li>
                        )}
                    </ListStyled>
                </div>
                <img src={require(`assets/${admissionSection.img}`).default} alt=""/>
            </FlexLayoutStyled>
            <ImportantColor>
                {admissionSection.important}
            </ImportantColor>
        </SectionPaddingStyled>
    );
}

AdmissionSpecialSection.defaultProps =
    {
        colorTheme:"black"
    }
export default AdmissionSpecialSection;