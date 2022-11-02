import styled from "styled-components";

export const ContentMarginStyled = styled.div`
    .contentWrapper
    {
      max-width: ${props => props.maxWidth};
      margin: auto;  
    }
    background-color: ${props => props.background};
`

ContentMarginStyled.defaultProps = {
    background:"white",
    maxWidth:"1500px"
}