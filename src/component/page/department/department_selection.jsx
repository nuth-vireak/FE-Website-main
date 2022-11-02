import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ImgZoomInStyled} from "component/reused-component/animation/Img/img-zoom-in.styled";
import {ThreeFlexImgStyled} from "component/reused-component/displayLayout/threeFlexImg.styled";


const DepartmentCardStyled = styled.div
    `
      //:nth-child(event)
      //{
      //  padding-left:clamp(.5em,1vw,1em);
      //}
      
      .department_img
      {
        aspect-ratio:16/9;
        width:100%;
        object-fit:cover;
      }
      .departmentLink
      {
        text-decoration: unset;
        color:black;
      }
      .department_label
      {
        //margin-bottom: 1em;
        font-size: clamp(1.25em, 1.5vw, 2em);
        transition: color 250ms ease-in-out;
        &:hover
        {
          color:#014164
        }
      }
      .label-list
      {
        font-family: var(--font-manrope);
        color:#262626;
      }
      .list-highlight
      {
        .highlight_item
        {
          color:#4C4C4C;
        }
      }
    `

function DepartmentSelection({imgUrl,label,skillList,researchList,link})
{
    return (

            <DepartmentCardStyled>
                <ImgZoomInStyled>
                    <Link to={link}>
                        <ThreeFlexImgStyled
                            className={"active"}
                            src={require(`assets/${imgUrl}`).default}
                            alt={label}/>
                    </Link>
                </ImgZoomInStyled>

            <Link className={"departmentLink"} to={link}>
                <h2 className="department_label mini-font-name">{label}</h2>
            </Link>

            <label className="label-list mini-font-description">Your Main Skill</label>

            <ul className="list-highlight">
                {skillList.map((list,index)=>
                    <li key={index} className="highlight_item mini-font-description">
                        {list}
                    </li>
                )}
            </ul>

            {/*<label className="label-list mini-font-description">Research & Innovation</label>*/}
            {/*<ul className="list-highlight">*/}
            {/*    {researchList.map((list,index)=>*/}
            {/*        <li key={index} className="highlight_item mini-font-description">*/}
            {/*            {list}*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}
            </DepartmentCardStyled>
    );
}

export default DepartmentSelection;