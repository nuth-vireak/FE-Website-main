import react from 'react'
import styled from "styled-components";

export const ThreeGridLayoutStyled = styled.div
    `
      padding-top:unset;
      display:grid;
      grid-template-columns: repeat(${props => props.maxColumns},1fr);
      gap: clamp(1em,2vw,2em);

      @media (max-width:1024px)
      {
        grid-template-columns: repeat(${props => props.mediumColumns},1fr);

      }

      @media(max-width: 576px)
      {
        grid-template-columns: 1fr;

      }
    `
ThreeGridLayoutStyled.defaultProps = {
    maxColumns:3,
    mediumColumns:2,
}