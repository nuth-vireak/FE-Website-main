import styled from 'styled-components'
export const ImgZoomInStyled = styled.div
`
    overflow: hidden;
    
    //add filter class like .active .upcoming or .expired to img inorder to add filter color then hover 
  
    .active,
    .upcoming
    {
      filter: opacity(100%);
      &:hover
      {
        filter: opacity(50%)
      }
    }

    .expired
    {
      filter: grayscale(75%);
      &:hover
      {
        filter: grayscale(0%);
      }
    }
    
    img
    {
      transition: transform 300ms, filter 200ms ease-in-out;
    }

    &:hover img
    {
      transform: scale(1.5);
    }

`