import styled from 'styled-components'
export const SectionHeaderStyled = styled.h2
    `
      position: relative;
      margin-top:1em;
      margin-bottom: 1em;
      display:inline-block;
      font-family: var(--header-font);
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size:2.4rem;

      &::before {

        top: -.2em;
        position: absolute;
        content: " ";
        display: block;
        //width: clamp(3em,3vw,5em);
        width: 50%;
        //min-width: 50%;
        height: 4px;
        //background: #0070AD;
        background: #014164;
      }

      @media (max-width:1599px) {
      
          font-size: 2.4vw
    
      }
      @media (max-width:992px) {
      
          font-size: 1.6em;
        
    `