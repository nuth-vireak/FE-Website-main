import React from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";


function Routeback() {
    const history = useHistory();

    return (

        <BackLinkStyled onClick={history.goBack} className={"header-font-style"}>
            <i className="fa-solid fa-arrow-left fa-lg back-icon"/> <p>back</p>
        </BackLinkStyled>
    );
}

const BackLinkStyled = styled.div
    `
      color:#014164;

      text-decoration: none;width: fit-content;
      display:flex;
      align-items: center;
      margin-bottom: 1em;
      p
      {
        font-size: clamp(1.15em,1.5vw,1.5em);
        margin-left: .25em;
        margin-bottom: 0;
      }
      &:hover
      {
        cursor:pointer;
        color: #01598a;
      }
      &:hover p
      {
        text-decoration: underline;

      }

    `

export default Routeback;