import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import './research.scss';
import { ThreeGridLayoutStyled } from '../displayLayout/threeGridLayout.styled';
import ResearchCard from 'component/page/project&research/research-card';
import RESEARCH_HIGHLIGHT_LIST from 'utils/content/research_project/RESEARCH_HIGHLIGHT_LIST.json'
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
import {SeeMoreStyled, SeeMoreStyledLink} from "component/reused-component/TextStyled/seemore.styled";


const SectionHeaderStyled_NoMarginBottom = styled(SectionHeaderStyled)
    `
        margin-bottom:0;
    `

const Research = ({ title, subtitle, docList = [] }) => {

    let content_ref = useRef();

    // let hr_ref = useRef();

    // const handleContentAppear = () => {
    //     hr_ref.current.style.transition = 'all 1s';
    //     hr_ref.current.style.width = '100px';
    //     hr_ref.current.style.opacity = '1';
    // }
    //
    // const handleContentDisappear = () => {
    //     hr_ref.current.style.transition = 'all 1s';
    //     hr_ref.current.style.width = '0px';
    //     hr_ref.current.style.opacity = '0';
    // }

    // useEffect(() => {
    //     const handleScrollEvent = () => {
    //         if (content_ref.current) {
    //             if (window.scrollY / content_ref.current.offsetTop < 0.9 || window.scrollY / content_ref.current.offsetTop > 1.1) {
    //                 handleContentDisappear();
    //             } else if (window.scrollY / content_ref.current.offsetTop > 0.9) {
    //                 handleContentAppear();
    //             }
    //         }
    //     }
    //     window.addEventListener("scroll", handleScrollEvent)
    //     // clean-up function
    //     return () => {
    //         window.removeEventListener('scroll', handleScrollEvent);
    //     }
    // }, [])

    const showResearchHighLight = () =>
    {
        return RESEARCH_HIGHLIGHT_LIST.map((research,index)=>
            <ResearchCard
                key={index}
                index={research.order}
                topic={research.topic}
                imageUrl={research.imageUrl}
                category={research.category}
                publish={research.publish}
                department={research.department} />
        )
    }

    return (
        <div ref={content_ref} className="research-preview">
            <div className="body">
                <div className="header">
                    <div className="title">
                        <SectionHeaderStyled_NoMarginBottom>{title}</SectionHeaderStyled_NoMarginBottom>
                        {/*<hr ref={hr_ref} />*/}
                    </div>

                    {/*<Link className="view-more-btn btn btn-sm" to={"/research-project"}>*/}
                    {/*    <div>*/}
                    {/*        View More*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                    <SeeMoreStyledLink link={'/research-project'} label={"SEE MORE"}/>

                    {/*<Link to={"/research-project"}>*/}
                    {/*    <p>*/}
                    {/*        View More*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                </div>
                <div className="list-researchs row">
                    <ThreeGridLayoutStyled>
                        {
                            // showResearch()
                            showResearchHighLight()

                            // ResearchProjectData.map(({ topic, imageUrl, category, department, publish }, index) =>
                            //     <ResearchCard
                            //         key={index}
                            //         index={index}
                            //         topic={topic}
                            //         imageUrl={imageUrl}
                            //         category={category}
                            //         publish={publish}
                            //         department={department} />
                            // )
                        }
                    </ThreeGridLayoutStyled>
                </div>
            </div>
        </div>
    );

}

export default Research;