import React from 'react';
// import './carousel-content.scss';
import {
    IntroSectionDescriptionStyle,
    IntroSectionHeaderStyle
} from "component/page/departmentContent/component/reused/Intro-section/introStyled.Styled";
import styled from "styled-components";


const ColorTheme =
    {
        textColor:"white",
        mainColor:"#014164",
        linearColor:"#014164"
    }
const IntroSectionDescriptionStyle_font = styled(IntroSectionDescriptionStyle)
    `

    `

const IntroSectionHeaderStyle_noBefore = styled(IntroSectionHeaderStyle)
    `
      font-size: clamp(2em,3.5vw,3.5em);
      line-height: 1.2;
      font-family: var(--font-manrope);
      &:before
      {
        background:#fff;
      }


    `

const CarouselContent = ({
                             title,
                             content,
                             backgroundColor = '',
                             height = 'inherit',
                             children }) => {
    return (
        <div className="content-template d-flex align-items-center p-4" style={{height: height, backgroundColor: backgroundColor}}>
            <span className="text-white" style={{overflowWrap: 'anywhere'}}>
                <IntroSectionHeaderStyle_noBefore ColorTheme={ColorTheme}>
                    {title}
                </IntroSectionHeaderStyle_noBefore>
                <IntroSectionDescriptionStyle>
                    {content}
                </IntroSectionDescriptionStyle>
                {children}
            </span>
        </div>
    )
}



export default CarouselContent;

/*  md : h1 : fontsize 10vw
       : p  : fontsize 3vw
*/

// /*  normal : h1 : fontsize 10vw
//            : p  : f  ontsize 3vw
// */
