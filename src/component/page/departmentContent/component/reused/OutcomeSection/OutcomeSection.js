import React from 'react';
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import styled from "styled-components";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";

const OutcomeSectionStyled = styled.div
    `
      background-color: #00171F;
    `

const GridLayoutStyled = styled.div
    `
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap: clamp(1em,1.5vw,2em);
      @media(max-width:480px)
      {
        grid-template-columns:1fr;

      }
    `
const GridLayoutItemStyled = styled.div
    `
        
    `

const GridListLabelStyled = styled.h3
    `
      text-transform: capitalize;
      margin-top: 0.85em;
      margin-bottom: 0.5em;
      font-family: var(--font-manrope);
      font-size: clamp(1.25em,1.25vw,1.45em);
      font-weight: 800;
    `


const GridListStyled = styled.ul
    `
      white-space: break-spaces;
      color: #4C4C4C;
      text-transform: capitalize;
      font-family: var(--font-quicksand);
      font-weight: bold;
      font-size: clamp(.75em,1vw,1.06em);
      letter-spacing: 0.015em;
    `

const HeaderSectionStyledColor = styled(HeaderSectionStyled)
    `
      color: var(--primary-text-color);
    `

const GridListLabelStyledColor = styled(GridListLabelStyled)
    `
      //color: var(--bio-primary-color)
      color:white
    `

const GridListStyledGray = styled(GridListStyled)
    `
      color:#DEDEDE;
    `
const GridListStyledGrayExtend = styled(GridListStyledGray)
    `
        text-transform: full-size-kana;
    `

function OutcomeSection({OutcomeSection}) {
    return (
        <ContentMarginStyled>
        <OutcomeSectionStyled>
            <SectionPaddingStyled className={"contentWrapper"}>
                <HeaderSectionStyledColor>
                    Problem Learning Outcome
                </HeaderSectionStyledColor>

                <GridLayoutStyled>
                    {
                        OutcomeSection.map((outcome,index)=>
                            <GridLayoutItemStyled key={index}>
                                <GridListLabelStyledColor>
                                    {outcome.label}
                                </GridListLabelStyledColor>

                                <GridListStyledGrayExtend key={index}>
                                    {outcome.list.map((item,index)=>

                                        <li key={index}>{item}</li>
                                    )}
                                </GridListStyledGrayExtend>
                            </GridLayoutItemStyled>
                        )
                    }

                </GridLayoutStyled>
            </SectionPaddingStyled>
        </OutcomeSectionStyled>
        </ContentMarginStyled>
    );
}

export default OutcomeSection;