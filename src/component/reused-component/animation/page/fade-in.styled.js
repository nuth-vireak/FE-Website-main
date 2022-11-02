import styled from "styled-components";

const FadeInStyled = styled.div
    `
        @keyframes fadeIn
        {
          from {
            //background: rgb(1, 65, 100, 1);
            opacity: .5;
            //z-index: 1;

          }
          to{
            //background:rgb(1, 65, 100, 0);
            opacity: 1;
          }
        }
        
        animation-name:fadeIn;
        animation-duration: 1s;
    `
export default FadeInStyled