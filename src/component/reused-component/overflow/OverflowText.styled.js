import styled from "styled-components";

export const OverflowTextStyled = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props=>props.line};
  -webkit-box-orient: vertical;    
`
OverflowTextStyled.defaultProps = {
    line:2
}