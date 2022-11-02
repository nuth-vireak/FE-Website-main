import styled from "styled-components"
const ButtonRoundStyled = styled.p`
  
  width: fit-content;
  color:${props=>props.textColor};
  background-color: ${props => props.backgroundColor};
  font-family: var(--font-manrope);
  font-weight: bold;
  //font-size: clamp(.70em,1.15vw,1.15em);
  font-size: clamp(.85em,1.15vw,1.15em);
  border-radius:90px;
  outline:none;
  border: none;
  padding:.7em 2em;
  letter-spacing: 0.015em;
  line-height: 100%;
  transition:all 250ms ease-in-out,transform 50ms ease-in-out, background-color 50ms ease-in-out; 
  
  .arrow-icon
  {
    margin-left:.5em;
  }
  
  &:active
  {
    transform: scale(.9,.9);
    background-color: ${props => props.backgroundColorHover};
  }
  
  &:hover
  {
    background-color: ${props => props.backgroundColorHover};
    color:${props => props.colorHover};
    box-shadow: rgba(17,17,26,0.1) 0 1px 0,rgba(17,17,26,0.1) 0 8px 24px,rgba(17,17,26,0.1) 0 16px 48px;
  }
  &:hover .arrow-icon
  {
    filter:${props => props.filterHover}
  }
`

ButtonRoundStyled.defaultProps =
    {
        backgroundColorHover:"var(--primary-text-color)",
        colorHover:"#00171F",
        filterHover:"brightness(0) saturate(100%) invert(8%) sepia(70%) saturate(1000%) hue-rotate(156deg) brightness(88%) contrast(103%)"
    }

export {ButtonRoundStyled}
