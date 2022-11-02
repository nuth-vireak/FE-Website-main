import React from 'react';
import styled from "styled-components";
// import {ButtonRoundStyled} from "component/reused-component/button-round/button_round_arrow.styled";
// import {Link} from "react-router-dom";
import {HeaderSectionSmallStyled} from "component/reused-component/TextStyled/header.styled";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";

const HeaderSectionSmallStyledColor = styled(HeaderSectionSmallStyled)
    `
      //width: fit-content;
      background-color:#014164;
      //outline: 2px solid #018ad6;
      border-radius:90px;
      padding:.5em 1em;
      color: white;
      transition: background-color 250ms;

      &:hover
      {
        color:#00171F;
        background-color:#fff;
      }
    `

const LinkWrapperStyled = styled.div
    `
      width: fit-content;
      text-align: center;
      a
      {
        text-decoration: none;
      }
      @media(max-width:480px)
      {
        width: unset;
      }
    `

const OrderColorStyled = styled.li
    `
      :nth-child(1)
      {
        h2
        {
          color: ${props => typeof props.colorTheme === "string"? props.colorTheme:props.colorTheme[0]}
        }
      }

      :nth-child(2)
      {
        h2
        {
          color: ${props => typeof props.colorTheme === "string"? props.colorTheme:props.colorTheme[1]}
        }
      }

      :nth-child(3)
      {
        h2
        {
          color: ${props => typeof props.colorTheme === "string"? props.colorTheme:props.colorTheme[2]}
        }
      }


    `

const TrackLabelStyled = styled.h2
    `
      font-family: var(--font-manrope);
      font-weight: 800;
      font-size: clamp(1.5rem, 3vw, 3rem);
      color: #DEDEDE;
      letter-spacing: 0.015em;


    `

function OutlineTrack({trackListSection,label,colorTheme}) {
    return (
            // <ContentMarginStyled background={"#00171F"}>
            <ContentMarginStyled background={"#00202B"}>
                <section className={"outline-track contentWrapper"}>
                <h1 className={"outline-track-hook header-font-style header-m-font-size"}>
                    {label}
                </h1>

                <div className={"track-content-wrapper"}>
                    <ul className={"track-list"}>
                        {
                            trackListSection.trackList.map(({trackLabel,trackDescription},index)=>
                                <OrderColorStyled
                                    colorTheme={colorTheme}
                                    className={"track-list-item"}
                                    key={index}>

                                    <TrackLabelStyled>{trackLabel}</TrackLabelStyled>
                                    <p className={"track-description"}>{trackDescription}</p>

                                </OrderColorStyled>)
                        }
                    </ul>
                    <img className={"track-icon"} src={require(`assets/${trackListSection.img}`).default} alt=""/>
                </div>

                <p className={"important-note"}>
                    {trackListSection.note}
                </p>

                {
                    trackListSection.link &&
                    <LinkWrapperStyled>
                        <a href={trackListSection.link}>
                            <HeaderSectionSmallStyledColor>
                                See the Research Topics
                            </HeaderSectionSmallStyledColor>
                        </a>
                    </LinkWrapperStyled>
                }
            </section>
            </ContentMarginStyled>
    );
}
OutlineTrack.defaultProps =
    {
        label:"Last semester Optional tracks",
        colorTheme:"#DEDEDE"
    }
export default OutlineTrack;