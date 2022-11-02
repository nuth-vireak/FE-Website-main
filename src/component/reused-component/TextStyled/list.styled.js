import styled from "styled-components";

const ListLabelStyled = styled.label
    `
      //color:#4C4C4C;
      
      margin-bottom: unset;
      font-weight: bold;
      
      //font-family: var(--font-quicksand);
      font-family: var(--font-manrope);
      line-height: 1.8em;
      font-size: clamp(0.75em,1.25vw,1.15em);
      
    `
const ListStyled = styled.ul
    `
      //font-family: var(--font-quicksand);
      //color: #3D4450;
      color:#333;
      font-family: var(--font-manrope);
      font-weight: 700;
      line-height: 1.8em;
      font-size: clamp(0.80em,1.25vw,1.05em);
      li
      {
        margin-bottom:.5em;
      }
    `
export {ListStyled,ListLabelStyled}