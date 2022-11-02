import React from 'react';
import styled from "styled-components";
import {HeaderHighLightStyle} from "component/reused-component/TextStyled/header.styled";
import {IntroParagraphStyled} from "component/reused-component/TextStyled/paragraph.styled";

const LayoutStyled = styled.div
    `
      display: flex;
      flex-direction:${props => props.flexDirection};
      align-items: center;
      gap: clamp(.5em,2vw,5em);
      
      @media (max-width: 1024px)
      {
       flex-direction: column-reverse; 
      }
      
      img
      {
        //width:100%;
        padding:4em;
        margin-right: clamp(1em,3vw,4em);
        max-width: 400px;
        object-fit: contain;
        //width:100%;
        //max-width:250px;
        width: 50%;
        flex: 0 0 50%;
        //display: block;
        //margin: auto;
        //width: 100%;
        @media(max-width:1024px)
        {
          padding: unset;
          margin: unset;
          max-width: 300px;
        }
        @media(max-width:1366px)
        {
          //max-width: 300px;
        }
      }
      .left-side
      {
        width: 50%;
        flex: 0 0 50%;
      }
    `

function Visions({vision,label,flexDirection}) {
    return (

        <LayoutStyled flexDirection={flexDirection}>
            <img src={require(`assets/${vision.img}`).default} alt=""/>
            <div>
                <HeaderHighLightStyle>{label}</HeaderHighLightStyle>
                <IntroParagraphStyled>
                    {vision.description}
                </IntroParagraphStyled>
            </div>
        </LayoutStyled>

    );
}

Visions.defaultProps =
    {
        flexDirection:"row"
    }
export default Visions;