import styled from "styled-components";

export const FlexLayoutStyled = styled.div
    `
      display: flex;
      //justify-content: space-between;
      align-items:center;
      margin-bottom:clamp(1.5em,3vw,3em);
      //gap:clamp(1em,3vw,3em);
      
      @media (max-width:480px)
      {
        flex-direction:column
      }
      
      .img
      {
        
      }
      
      .left-side
      {
        margin-right:clamp(1em,3vw,4em);
        width:100%;
        max-width:250px;
        object-fit: contain;
        
        @media (max-width: 1024px)
        {
          max-width:150px;
        }
        @media (max-width:480px)
        {
          margin-right:unset;
          margin-bottom:10%;
        }
      }
      .right-side
      {
        ul
        {
          margin-bottom:unset;
        }

      }
    `