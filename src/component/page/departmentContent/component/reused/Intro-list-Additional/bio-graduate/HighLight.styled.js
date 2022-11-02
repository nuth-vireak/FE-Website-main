import styled from "styled-components";
import {HeaderHighLightStyle} from "component/reused-component/TextStyled/header.styled";
import {ListLabelStyled} from "component/reused-component/TextStyled/list.styled";

const AdditionalSectionStyled = styled.div
    `
      display:flex;
      flex-direction:column;
      gap: clamp(2em,4vw,4em);
    `

const HighLightHeaderStyled = styled.div
    `
      text-align: center;
      margin-bottom:unset;
      //margin-bottom:clamp(2em,4vw,4em);
    `

const GridLayoutWrapper = styled.div
    `
      justify-items: center;

      display:grid;
      grid-template-columns: repeat(3,1fr);
      gap:.5em;
    `
const GridCard = styled.div
    `
      display:flex;
      align-items:center;
      flex-direction:column;
      img
      {
        width:100%;
        max-width: 200px;
        aspect-ratio:1;
        @media(max-width: 1024px)
        {
          max-width: 150px;
        }
        @media(max-width: 768px)
        {
          max-width: 100px;
        }
      }
      label
      {
        margin-top:.75em;
      }
    `

const FlexLayoutWrapper = styled.div
    `
      gap: clamp(.5em,2vw,2em);
      display: flex;
      justify-content: center;
    `

const ListLabelStyledMargin = styled(ListLabelStyled)
    `
      //margin-top: 1em;
      line-height:unset;
      font-size: clamp(.75em,1.25vw,1.15em);
    `

const PartnerLogo = styled.img
    `
      width:100%;
      max-width: 250px;
      object-fit: contain;
    `

const HeaderHighLightStyleMargin = styled(HeaderHighLightStyle)
    `
      font-size: clamp(1.15rem,4vw,3rem);
      //margin-top: 1.5em;
      margin-bottom: 1em;
      @media(max-width: 480px)
      {
        //margin-top: 2em;
        margin-bottom: 1.5em;
      }
    `
export {
    HeaderHighLightStyleMargin,
    PartnerLogo,
    ListLabelStyledMargin,
    FlexLayoutWrapper,
    GridCard,
    GridLayoutWrapper,
    HighLightHeaderStyled,
    AdditionalSectionStyled
}
