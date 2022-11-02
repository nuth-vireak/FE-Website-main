import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {IntroParagraphStyled} from "component/reused-component/TextStyled/paragraph.styled";
import {HeaderSectionSmallStyled} from "component/reused-component/TextStyled/header.styled";

const LayoutStyled = styled.div
    `
      display: flex;
      align-items: center;
      flex-direction:${props => props.flexDirection};
      gap: clamp(.5em,2vw,5em);
      @media (max-width: 1024px)
      {
        flex-direction: column;
        //margin-bottom:3em;
      }
      
      img
        {
        flex: 0 0 50%;
        width: 50%;
        object-fit: contain;
        
        @media (max-width: 1024px)
        {
          flex: 0 0 100%;
          width: 100%;
        }
        @media (max-width:480px)
        {
          margin-bottom:1em;
        }
      }
    `



function Strategy({strategy,header,flexDirection})
{
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <LayoutStyled flexDirection={flexDirection}>
            <div className={"left-side"}>
                {/*<HeaderHighLightStyle>*/}
                {/*    {header}*/}
                {/*</HeaderHighLightStyle>*/}
                <HeaderSectionSmallStyled style={{color:"white"}}>
                    {strategy.label}
                </HeaderSectionSmallStyled>
                <ul style={{color:"#DEDEDE"}}>
                    {strategy.list.map((list,index)=>
                        <li key={index}>
                            <IntroParagraphStyled style={{color:"#DEDEDE"}}>
                            {list}
                            </IntroParagraphStyled>
                        </li>
                    )}
                </ul>
            </div>

            {width < 480 ?
                <img src={require(`assets/${strategy.imgMobile}`).default} alt=""/>
                :
                <img src={require(`assets/${strategy.img}`).default} alt=""/>
            }


        </LayoutStyled>
    );
}

Strategy.defaultProps =
    {
        flexDirection:"row"
    }

export default Strategy;