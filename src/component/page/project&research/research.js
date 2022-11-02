import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";

import ResearchCard from "component/page/project&research/research-card";
import Banner from "component/reused-component/banner/headerBanner/banner";

import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";

import {GlobalPaddingExceptTop} from "component/reused-component/padding/global-padding-expect-top";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
import {ThreeGridLayoutStyled} from "component/reused-component/displayLayout/threeGridLayout.styled";

import ResearchProjectData from "utils/content/research_project/RESEARCH_MOCK_DATA.json"
import bannerImg from "assets/banner/research.jpg";

import {selectArticle} from "actions";

const useFetch = (url) =>
{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)

    useEffect(()=> {

        const fetchData = async () =>
        {
            setLoading(true)

            try{
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setLoading(false)
            }catch(error)
            {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data,loading,error}
}


const FilterBarLayoutStyled = styled.div
    `
      display:grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      @media (max-width: 480px)
      {
        grid-template-columns: 1fr;
      }
    `
const FilterGroupWrapperStyled = styled.div
    `
      display: none;
    `
const FilterOptionStyled = styled.h2
    `
      .filter-icon
      {
        color:#4C4C4C;
        margin-left:.25em;
      }

      color:#4C4C4C;
      margin-top:1em;
      margin-bottom: 1em;
      margin-left:1em;

      :nth-child(1)
      {
        margin-left: unset;
      }

      display:inline-block;
      font-family: var(--header-font);
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size:clamp(1em,1.5vw,1.5em);
      cursor: pointer;

      &:hover,
      &:hover .filter-icon
      {
        color:#014164;
      }

      @media (max-width:480px)
      {
        margin-top: unset;
      }

      //@media (max-width:1599px) {
      //
      //  font-size: 2.4vw
      //}
      //
      //@media (max-width:992px) {
      //
      //  font-size: 1.6em;
      //}

    `

function Research(props)
{


/*    const {data,loading,error} = useFetch("http://localhost:1337/api/research-articles?populate=img")
    if(loading) return <p>Loading</p>
    if(error) return <p>error</p>
    console.log(data)*/

    return (

        <FadeInStyled>
            <div className="research&project">
                <Banner title={`Research &\nProject`} imgUrl={bannerImg} positionY={"0%"} positionX={"50%"}/>
                <GlobalPaddingExceptTop>
                    <FilterBarLayoutStyled>
                        {/*<button onClick={()=>props.selectArticle({*/}
                        {/*    type: 'ARTICLE_SELECTED',*/}
                        {/*    payload: {*/}
                        {/*        title:"Echo",*/}
                        {/*        date:"Friday 12, 2, 2019"*/}
                        {/*    }}*/}
                        {/*)}>Click</button>*/}
                        <div>
                            <SectionHeaderStyled>
                                LATEST
                            </SectionHeaderStyled>
                        </div>

                        <FilterGroupWrapperStyled>
                            <FilterOptionStyled>
                                DEPARTMENT
                                <i className="fas fa-angle-right fa-rotate-90 filter-icon"/>
                            </FilterOptionStyled>

                            <FilterOptionStyled>
                                CATEGORY
                                <i className="fas fa-angle-right fa-rotate-90 filter-icon"/>
                            </FilterOptionStyled>
                        </FilterGroupWrapperStyled>


                    </FilterBarLayoutStyled>

                    <ThreeGridLayoutStyled>
                        {
                            ResearchProjectData.map(({topic,imageUrl,category,department,publish},index)=>
                                <ResearchCard
                                    key={index}
                                    index={index}
                                    topic={topic}
                                    imageUrl={imageUrl}
                                    category={category}
                                    publish={publish}
                                    department={department}/>
                            )
                        }
                    </ThreeGridLayoutStyled>
                </GlobalPaddingExceptTop>
            </div>
        </FadeInStyled>
    );
}

const mapStateToProps = (state) =>
{
    // console.log(state)
    return{
        article:state
    }
}
const mapDistpatchToProps = (distpatch) =>
{
    return{
        selectArticle: article => {
            distpatch({
                type: 'ARTICLE_SELECTED',
                payload: article
            })
        }
    }
}

export default connect(mapStateToProps,mapDistpatchToProps
    )(Research);