import styled from "styled-components";

export const AuthorStyled = styled.h4`
  //margin:1em 0;
  font-size: clamp(.75em,1vw,1em);
  text-transform: uppercase;
  font-family: var(--font-quicksand);
  color:${props => props.color};
  font-weight: bold;
  margin: 1em 0;
`
AuthorStyled.defaultProps = {
    color:"#4C4C4C"
}

