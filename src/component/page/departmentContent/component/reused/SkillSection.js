import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";
import {HeaderHighLightStyle, HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import styled from "styled-components";
import React from "react";

export const SkillSection = ({skillSection}) =>{
    return (
        // <ContentMarginStyled background={"#00151c"}>
        <ContentMarginStyled background={"#00202B"}>
            <SectionPaddingStyled className={"contentWrapper"}>
                <SkillSectionStyled>
                    <HeaderSectionStyled style={{color:"white"}}>
                        Undergraduate Skill
                    </HeaderSectionStyled>
                    <p className={"description-bold-style department-intro-text-margin-separator header"}>
                        {skillSection.description}
                    </p>

                    <div className={"list-wrapper"}>
                        <HeaderHighLightStyle style={{color:"white",textAlign:"center"}}>
                            Build Your Soft skill
                        </HeaderHighLightStyle>
                        <ul className={"description-bold-style"}>
                            {skillSection.softSkill.list.map((each,index)=>
                                <li key={index}>
                                    <img src={require(`assets/${skillSection.softSkill.icon[index]}`).default} alt=""/>
                                    <p>{each}</p>

                                </li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <HeaderHighLightStyle style={{color:"white",textAlign:"center"}}>
                            Hard skill you focus on
                        </HeaderHighLightStyle>

                        <ul className={"description-bold-style"}>
                            {skillSection.hardSkill.list.map((each,index)=>
                                <li key={index}>

                                    <img src={require(`assets/${skillSection.hardSkill.icon[index]}`).default} alt=""/>
                                    <p>{each}</p>
                                </li>
                            )}
                        </ul>
                    </div>

                </SkillSectionStyled>
            </SectionPaddingStyled>
        </ContentMarginStyled>
    )
}
const SkillSectionStyled = styled.section`
  .header
  {
    //color: #26a69a;
    color:#DEDEDE;
    font-weight:600;
    margin-bottom: clamp(1em,5vw,5em);
  }

  .list-wrapper
  {
    margin-bottom: clamp(1em,5vw,5em);
  }

  ul
  {
    display:grid;
    grid-template-columns: repeat(5,1fr);
    padding-left:unset;
    list-style: none;
    font-weight: 700;
    font-size: clamp(0.75em, 1.25vw, 1.15em);
    
    @media (max-width:1024px)
    {
      grid-template-columns: repeat(3,1fr);
    }
    
    li{

      margin: 10%;
      
      flex-direction:column;
      align-items:center;
      text-align: center;
      transition: all 250ms linear;
      img{
        
        width:100%;
        max-width: 150px;
        
        @media(max-width:1366px) 
        {
          max-width: 125px;
        }        
        @media(max-width:1024px) 
        {
          max-width: 100px;
        } 
        @media(max-width:480px) 
        {
          max-width: 75px;
        }        
        @media(max-width:350px) 
        {
          max-width: 50px;
        }
      }
      p
      {
        color: #DEDEDE;
        margin-bottom: 0;
        margin-top:1em
      }
    }
  }
`