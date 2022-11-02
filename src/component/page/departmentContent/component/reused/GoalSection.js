import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import styled from "styled-components";
import React from "react";
// import {
//     GridLayoutWrapper,
// } from "component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled";

export const GoalSection = ({goalSection,labelColor,children}) => {
    return (
        <ContentMarginStyled>
            <SectionPaddingStyled className={"contentWrapper"}>
                <GoalSectionStyled>
                    <HeaderSectionStyled>
                        Department Goal
                    </HeaderSectionStyled>
                    <p className={"description-bold-style department-intro-text-margin-separator"}>
                        The Department have a vision To enhance and advance students’ knowledge, skills, and leadership in the field of automation and supply chain systems so that they are capable of integrating and ready to work in regional and global markets.
                    </p>
                    <div className={"layout"}>
                        {goalSection.map((each,index)=>
                            <div key={index}>
                                <img className={"icon"} src={require(`assets/${each.img}`).default} alt=""/>
                                <div>
                                    <label className={"description-bold-style"} style={{color:labelColor}} htmlFor="icon">{each.label}</label>
                                    <ul className={"description-bold-style"}>
                                        {each.list.map((each,index)=>
                                            <li key={index}>
                                                {each}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                    {children}

                </GoalSectionStyled>
            </SectionPaddingStyled>
        </ContentMarginStyled>
    )
}
// const GridLayoutWrapperExtend = styled(GridLayoutWrapper)
//     `
//       grid-template-columns: repeat(4,1fr);
//       img
//       {
//         width:100%;
//         max-width: 250px;
//         object-fit: contain;
//       }
//     `
const GoalSectionStyled = styled.section`
  p
  {
    width: 75%;
    margin-bottom: clamp(1em,5vw,5em);
    @media (max-width:768px)
    {
      width: 100%;
    }
  }

  .layout{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:clamp(1em,2vw,2em);
    @media (max-width:768px)
    {
      grid-template-columns: repeat(1, 1fr);

    }


    div {
      text-align: center;

      img {
        width: 100%;
        max-width: 200px;

        transition: max-width 250ms ease-in-out;

        @media(max-width:1366px)
        {
          max-width: 175px;
        }
        @media(max-width:1024px)
        {
          max-width: 150px;
        }
        
      }
      div
      {
        label
        {
          font-family: var(--font-manrope);
          font-weight: 800;
          margin-top:.5em;
          margin-bottom:1em;
          font-size: clamp(1em, 1.5vw, 2em);
        }
        ul{
          text-align: start;
          li
          {
            margin-bottom:1em;
          }
        }
      }
    }
  }
`