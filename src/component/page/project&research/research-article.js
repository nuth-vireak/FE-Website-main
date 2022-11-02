import React, {useState} from 'react';
import { connect } from "react-redux"
import styled from 'styled-components'

import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import { useParams } from 'react-router-dom';

import Banner from "component/reused-component/banner/headerBanner/banner";
import Routeback from "component/reused-component/routeback/Routeback";

import Research_1 from './placeHolder/research-1';
import Research_2 from './placeHolder/research-2';
import Research_3 from './placeHolder/research-3';
import Research_4 from './placeHolder/research-4';
import {Research_5} from "component/page/project&research/placeHolder/research-5";
import {Research_6} from "component/page/project&research/placeHolder/research-6";
import {Research_7} from "component/page/project&research/placeHolder/research-7";
import {GlobalPadding} from "component/reused-component/padding/global-padding";
import {SubNavStyle} from "component/reused-component/subnav-round/subnav-round.styled";
import ScrollIntoView from "react-scroll-into-view";

// import { GlobalPaddingExceptTop } from "component/reused-component/padding/global-padding-expect-top";
// import {GlobalPadding} from "component/reused-component/padding/global-padding";


const SubNavbarColorTheme = {
        outlineColor:"#001015",
        outlineColorHover:"#DEDEDE"
}

function ResearchArticle() {

    const [selectList,setList] = useState(1);

    const HandleSelectedList = (index) =>
    {
        setList(index)
    }

    const research_list = [<Research_1/>, <Research_2/>, <Research_3/>, <Research_4/>, <Research_5/>, <Research_6/>, <Research_7/>]
    let { articleID } = useParams()
    return (
        <>
            <Banner title={''} imgUrl={require(`assets/research/research-${articleID}.jpg`).default} positionY={"50%"} positionX={"50%"} />
            <ContentMarginStyled maxWidth="1500px">
                <GlobalPadding>

                    <GridWrapperStyled className={"contentWrapper"}>
                        {
                            articleID === "4"
                            &&
                            <SubNavStyleExtern ColorTheme={SubNavbarColorTheme} className={"list-article"}>

                                <ScrollIntoView onClick={()=>HandleSelectedList(1)} selector={`#idSelector1`}>
                                    <li className={selectList === 1 ? "nav-li nav-selected" : "nav-li"}>Introduction</li>
                                </ScrollIntoView>

                                <ScrollIntoView  onClick={()=>HandleSelectedList(2)} selector={`#idSelector2`}>
                                    <li className={selectList ===2  ? "nav-li nav-selected" : "nav-li"}>Center of Excellence & Benchmark results</li>
                                </ScrollIntoView>

                                <ScrollIntoView  onClick={()=>HandleSelectedList(3)} selector={`#idSelector3`}>
                                    <li className={selectList ===3 ? "nav-li nav-selected" : "nav-li"}>Pilot project results</li>
                                </ScrollIntoView>

                                <ScrollIntoView  onClick={()=>HandleSelectedList(4)} selector={`#idSelector4`}>
                                    <li className={selectList === 4 ? "nav-li nav-selected" : "nav-li"}>RUPP TEAM</li>
                                </ScrollIntoView>

                                <li className={"nav-li inActive"}>Accreditation process</li>
                                <li className={"nav-li inActive"}>Dissemination</li>
                                <li className={"nav-li inActive"}>Events/Activity</li>

                            </SubNavStyleExtern>
                        }

                        <div className={"content-article"}>
                            <Routeback/>
                            <ArticleStyled>
                                {
                                    research_list[articleID]
                                }
                            </ArticleStyled>
                        </div>
                    </GridWrapperStyled>

                </GlobalPadding>
            </ContentMarginStyled>
        </>
    );
}

const ArticleStyled = styled.div`
      .offset
      {
        @media (max-width:1024px)
        {
          display:none;
        }
      }
      
      h1
      {
        font-size: clamp(1.5rem,4vw,3rem);
        font-family: var(--font-manrope);
        text-transform: uppercase;
        font-weight: 800;
        //font-size:3em;
        //margin-top:.75em;
      }
      h2
      {
        font-size: clamp(.75em,1.5vw,1.5em);
        text-transform: uppercase;
        font-family:var(--font-quicksand);
        color:#4C4C4C;
        //font-size:1.5em;
        font-weight:600;
        margin-bottom:1.5em;
      }

      h3
      {
        font-size: clamp(1rem,1.75vw,1.75rem);
        margin-bottom: .5em;
        text-transform: uppercase;
        font-family: var(--font-manrope);
        font-weight: 800;

      }

      h5
      {
        font-size: clamp(.85em,1.15vw,1.15em);
        font-family: var(--font-manrope);
        font-weight: 800;
        color: #3D4450;
        text-transform: uppercase;

        margin-bottom: 1em;
      }

      ol
      {
        padding-right: 2em;
      }


      ol,ul
      {

        //color: #333;
        color: #3D4450;
        font-family: var(--font-manrope);
        padding-right: 2em;
        font-weight: 600;
        line-height: 1.8em;
        font-size: clamp(0.75em,1.15vw,1.15em);
        margin-bottom: 2em;

        li{
          margin-bottom:1em;
          b{
            color: #333;
          }
          p{
            color: #3D4450;
            margin-bottom:.5em;
          }
        }
      }

      .video-list
      {
        iframe
        {
          padding: 1em 1em;
        }
        .video-frame
        {
          width:50%;
          aspect-ratio:16/9;
          @media(max-width: 768px)
          {
            width:100%;
          }
        }
      }

      p, .primary-text
      {

        font-family: var(--font-manrope);
        font-weight: 600;
        line-height: 1.8em;
        font-size: clamp(0.85em, 1.25vw, 1.15em);
        color: #3D4450;

        //font-size: clamp(0.75em,1.25vw,1.15em);
        //font-family: var(--font-manrope);
        //font-weight: 600;
        //font-size:1.2em;
        margin-bottom:2em
      }

      .article-align-center
      {
        text-align: center;
      }

      .article-poster
      {
        width:80%;
      }

      .important
      {
        color: #014164;
      }

      .img-gallery
      {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: clamp(.85em,2vw,2em);
        img
        {
          width:100%;
          aspect-ratio: 16/9;
          object-fit: cover;
        }

        @media(max-width: 768px)
        {
          grid-template-columns: repeat(2,1fr);
        }
        @media(max-width: 480px)
        {
          grid-template-columns: repeat(1,1fr);
        }
      }

      figure{
        text-align: center;
        figcaption
        {
          color: #333;
          font-family: var(--font-manrope);
          font-weight: bold;
          font-size: 0.85em;
        }
      }

    `
const GridWrapperStyled = styled.div`

  position: relative;
  display:flex;
  justify-content: space-between;
  align-items:start;
  gap: 1.5em;
  .list-article
  {
    //flex: 0 0 20%;
    //width: 20%;
  }
  .content-article
  {
    flex: 0 0 80%;
    width: 80%;
  }
  
  
  @media (max-width: 1024px) 
  {

    .list-article
    {
      all: unset;
      display:none;
    }
    .content-article
    {
      flex: 0 0 100%;
      width: 100%;
    }
  }
  
`
const SubNavStyleExtern = styled(SubNavStyle)`
  position: sticky;
  top:140px;
  flex-direction: column;
  .nav-li{
    text-align: start;
  }
  .inActive{
    color:#999;
    &:hover
    {
      cursor: unset;
      box-shadow:unset;
    }
  }
`

export default connect()(ResearchArticle);