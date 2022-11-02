import styled from "styled-components";

export const FlexLayoutStyled = styled.div
    `
      display:flex;
      justify-content:space-between;
      align-items: center;
      
      @media(max-width:768px)
      {
        align-items:center;
        flex-direction: column;
      }
      
      .left-content
      {

      }
      img
      {
        object-fit:contain;
        max-width: 300px;
        width:100%;
        margin: 0.5em 0 0.5em 5em;
        
        transition: width 150ms ease-in-out;
        
        @media(max-width: 1366px)
        {
          max-width:250px;
        }
        @media(max-width: 1024px)
        {
          max-width:200px;
        }        
        @media(max-width: 768px)
        {
          max-width:150px;
          margin:unset;

        }
        @media(max-width:480px)
        {
        }
      }
    `