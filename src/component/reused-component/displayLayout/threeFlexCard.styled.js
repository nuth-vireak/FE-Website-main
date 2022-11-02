import styled from "styled-components";

export const ThreeFlexCardStyled = styled.div
    `
      //padding: 0 clamp(.5em,1vw,1em);
      margin-bottom: 2%;
      flex-basis: 32%;
      width: 32%;

      @media(max-width: 1024px)
      {
        margin-bottom: 4%;
        flex-basis: 48%;
        width: 48%;

      }

      @media(max-width: 576px)
      {
        margin-bottom: 6%;
        flex-basis: 100%;
        width: 100%;
      }
    `
