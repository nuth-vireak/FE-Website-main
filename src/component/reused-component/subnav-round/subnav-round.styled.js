import styled from 'styled-components'
const SubNavStyle = styled.ul
    `
      //z-index: 9999;
      display:flex;
      justify-content: center;
      padding-left:unset;
      gap: clamp(.5em,1vw,1em);
      margin-bottom:0;

      .nav-li
      {

        transition: box-shadow 250ms ease-in-out;

        text-align: center;
        display: flex;
        align-items: center;

        padding: .3em 1.25em;
        list-style: none;
        font-size: clamp(.7em,1.5vw,1em);
        font-family: var(--font-manrope);
        font-weight: bold;
        border-radius: 90px;
        outline: unset;

        //-webkit-transition: color 2s, outline-color .7s ease-out, background-color .7s ease-out;
        //-moz-transition: color 2s, outline-color .7s ease-out, background-color .7s ease-out;
        //-o-transition: color 2s, outline-color .7s ease-out, background-color .7s ease-out;
        //transition: color 2s, outline-color .7s ease-out, background-color .7s ease-out;
        &:hover
        {
          transition: outline-color .7s ease-out;
          cursor: pointer;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
          //outline: 2px solid #DEDEDE
        }
      }
      .nav-selected
      {
        background: ${props => props.backgroundColor};

        color:var(--primary-text-color);
        &:hover
        {
          //box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
          outline: unset
        }
      }
      .nav-green-color
      {
        background: var(--bio-accent-color);
      }
      .nav-red-color
      {
        background: #F05951;
      }
      .nav-fe-primary-color
      {
        background:#014164
      }
      .nav-fe-accent-color
      {
        background:#01375A
      }
    `

SubNavStyle.defaultProps = {
  backgroundColor:"#014164"
}

export {SubNavStyle}