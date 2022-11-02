import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {ImgZoomInStyled} from "component/reused-component/animation/Img/img-zoom-in.styled";
import {CardLabelStyle} from "component/reused-component/label/card-titile-label.stlyed";
import {CardDateLabelStyled} from "component/reused-component/label/card-date-label.styled";
import {ThreeFlexImgStyled} from "component/reused-component/displayLayout/threeFlexImg.styled";
import {CardTitleLabelRoute} from "component/reused-component/label/card-titile-label-route.stlyed";
import {OverflowTextStyled} from "component/reused-component/overflow/OverflowText.styled";


const ResearchCardStyled = styled.div
    `
    `
const CardLabelStyleMargin = styled(CardLabelStyle)
    `
      font-size: clamp(1em,1.5vw,2em);
      margin-bottom: .5em;
    `

function ResearchCard({index,topic,imageUrl,category,department,publish},key) {

    return (
        <ResearchCardStyled>
            <ImgZoomInStyled>
                <Link to={`/research-project/${index}`}>
                    <ThreeFlexImgStyled  className={"active"} src={require(`assets/${imageUrl}`).default} alt=""/>
                </Link>
            </ImgZoomInStyled>
            <CardLabelStyleMargin>
                <CardTitleLabelRoute>
                    <OverflowTextStyled line={3}>
                        <Link to={`/research-project/${index}`}>
                            {topic}
                        </Link>
                    </OverflowTextStyled>
                </CardTitleLabelRoute>
            </CardLabelStyleMargin>

            <CardDateLabelStyled>
                {`${publish} | ${category} | ${department}`}
            </CardDateLabelStyled>
        </ResearchCardStyled>
    );
}

export default ResearchCard;