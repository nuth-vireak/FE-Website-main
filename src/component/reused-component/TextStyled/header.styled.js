import styled from "styled-components";

const HeaderSectionStyled = styled.h2
    `
      font-family: var(--font-manrope);
      font-weight: 800;
      letter-spacing: 0.015em;

      text-transform: capitalize;

      font-size: clamp(2rem,5vw,5rem);

      line-height: 115%;

      margin-bottom: 0.5em;
    `
const HeaderSectionSmallStyled = styled.h3
    `
      font-family: var(--font-manrope);
      font-weight: 800;
      //line-height: 100%;
      line-height: 1.4;
      letter-spacing: 0.015em;

      font-size: clamp(.85em, 1.5vw, 1.5em);

      margin-bottom: clamp(.25em,.75vw,.75em);
    `
const HeaderHighLightStyle = styled.h3
`
  font-family: var(--font-manrope);
  font-weight: 800;
  font-size: clamp(1.5rem,3vw,3rem);
  letter-spacing: 0.015em;
  margin-bottom:.5em;
  //color: #DEDEDE;
`
export {
    HeaderSectionSmallStyled,
    HeaderSectionStyled,
    HeaderHighLightStyle
}