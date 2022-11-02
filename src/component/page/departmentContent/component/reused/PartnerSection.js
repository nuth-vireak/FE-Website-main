import styled from "styled-components";

const React = require("react");
const {
    HighLightHeaderStyled,
    HeaderHighLightStyleMargin,
    GridLayoutWrapper} = require("component/page/departmentContent/component/reused/Intro-list-Additional/bio-graduate/HighLight.styled");


export const PartnerSection = ({partnerSection,columns}) =>
    <HighLightHeaderStyled>
        <HeaderHighLightStyleMargin style={{marginTop:"1em"}}>Partnership and support by</HeaderHighLightStyleMargin>
        <GridLayoutWrapperExtend columns={columns}>
            {partnerSection.logo.map((each,index)=>
                <img key={index} src={require(`assets/${each}`).default}  alt={""}/>
            )}
        </GridLayoutWrapperExtend>
    </HighLightHeaderStyled>

PartnerSection.defaultProps = {
    columns: 4,
}

const GridLayoutWrapperExtend = styled(GridLayoutWrapper)
    `
      //grid-template-columns: repeat(${props => props.columns},auto);
      grid-template-columns: repeat(${props => props.columns},max-content);
      gap: 2.5em;
      justify-content: center;
      
      @media(max-width:768px)
      {
        grid-template-columns: repeat(2,1fr);
      }

      img
      {

        //filter:contrast(.5) grayscale(1);
        //margin:5% 20%;
        object-fit: contain;
        transition:all 250ms ease-in-out;

        &:hover
        {
          filter:contrast(1) grayscale(0);

        }

        width:100%;
        max-width: 250px;

        @media(max-width:1366px)
        {
          max-width: 200px;
        }
        @media(max-width:1024px)
        {
          max-width: 175px;
        }
        @media(max-width:480px)
        {
          margin:10% 20%;

          max-width: 125px;
        }
      }
    `