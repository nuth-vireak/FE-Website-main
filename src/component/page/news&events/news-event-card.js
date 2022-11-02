import React from 'react';
import styled from "styled-components";
import {ImgZoomInStyled} from "component/reused-component/animation/Img/img-zoom-in.styled";
import {Link} from "react-router-dom";
import {ThreeFlexImgStyled} from "component/reused-component/displayLayout/threeFlexImg.styled";
import {CardLabelStyle} from "component/reused-component/label/card-titile-label.stlyed";
import {CardTitleLabelRoute} from "component/reused-component/label/card-titile-label-route.stlyed";
import {CardDateLabelStyled} from "component/reused-component/label/card-date-label.styled";

const NewsEventCardStyled = styled.div
    `
    `
const CardLabelStyleMargin = styled(CardLabelStyle)
    `
      font-size: clamp(1em,1.5vw,2em);
      margin-bottom: .5em;
    `
function NewsEventCard({topic,imageUrl,category,department,publish}) {
    return (
        <NewsEventCardStyled>
            <ImgZoomInStyled>
                <Link to={""}>
                    <ThreeFlexImgStyled className={"active"} src={require(`assets/${imageUrl}`).default} alt=""/>
                </Link>
            </ImgZoomInStyled>
            <CardLabelStyleMargin>
                <CardTitleLabelRoute>
                    <Link to={""}>
                        {topic}
                    </Link>
                </CardTitleLabelRoute>
            </CardLabelStyleMargin>
            <CardDateLabelStyled>
                {`${publish}`}
            </CardDateLabelStyled>
        </NewsEventCardStyled>
    );
}

export default NewsEventCard;