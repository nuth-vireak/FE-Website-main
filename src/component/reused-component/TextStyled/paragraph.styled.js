import styled from "styled-components";

const IntroParagraphStyled = styled.p
    `
      font-family: var(--font-quicksand);
      font-weight: bold;
      line-height: 1.8em;
      font-size: clamp(0.75em,1.25vw,1.15em);

      //margin-bottom: 3em;

      white-space: pre-line;
      color: #3D4450;
    `

export {IntroParagraphStyled}