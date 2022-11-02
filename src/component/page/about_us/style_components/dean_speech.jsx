import React from 'react';
import './../style/dean_speech.css';
import content from './../../../../utils/content/aboutUs/content.json';
import "./../../departmentDetail/style/content.scss";
import deanImg from "./../../../../assets/about_us/dean_pic/deanImg.jpg";
import styled from "styled-components";
import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
import {IntroParagraphStyled} from "component/reused-component/TextStyled/paragraph.styled";

const HeaderSectionStyledExtend = styled(HeaderSectionStyled)
    `
      margin-bottom: 1em;
      margin-top: .5em;
      //font-size: clamp(1.5em,4vw,3.68em);
    `

export default function DeanSpeech() {

    return (
        <div className="section2">
            <div className="content">
                <HeaderSectionStyledExtend>
                    DEAN'S MESSAGE
                </HeaderSectionStyledExtend>

                <div className="body row">

                    <div className="col-12 col-lg-3 col-xl-2">
                        <img className="deanImg" width="100%" alt="Faculty dean"
                             src={deanImg}/>
                        <h6 className="dean-name"> DR. NGUONPHAN PHEAKDEY</h6>
                        <p className="position">Dean, Faculty of Engineering</p>
                    </div>

                    <div className="col-12 col-lg-9 col-xl-10">
                        <IntroParagraphStyled className="dean-message" align="justify">
                            {content["dean-speech"].header}<br/>
                            <br/>
                            {content["dean-speech"].body}<br/>
                            <br/>
                            {content["dean-speech"].footer}<br/>
                        </IntroParagraphStyled>
                    </div>
                </div>
            </div>
        </div>
    );
}