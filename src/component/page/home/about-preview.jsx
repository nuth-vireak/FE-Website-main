import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './styles/about-preview.scss';
import about_preview_img from 'assets/home/home-about-us.jpg'
import styled from "styled-components";
import {
    IntroSectionDescriptionStyle,
    IntroSectionHeaderStyle
} from "component/page/departmentContent/component/reused/Intro-section/introStyled.Styled";
import {SeeMoreStyledLink} from "component/reused-component/TextStyled/seemore.styled";
import {ButtonRoundStyled} from "component/reused-component/button-round/button_round_arrow.styled";
const AboutPreview = () => {

    let content_ref = useRef();
    let body_ref = useRef();

    const handleContentAppear = () => {
        body_ref.current.style.opacity = "1"
    }

    const handleContentDisappear = () => {
        body_ref.current.style.opacity = "0"
    }

    useEffect(() => {
        const handleScrollEvent = () => {
            if(content_ref.current)
            {
                if(window.scrollY / content_ref.current.offsetTop < 0.5 || window.scrollY / content_ref.current.offsetTop > 1.1)
                {
                    handleContentDisappear();
                }else if(window.scrollY / content_ref.current.offsetTop > 0.5) {
                    handleContentAppear();
                }
            }
        }
        window.addEventListener("scroll", handleScrollEvent)
        // clean-up function
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        }
    }, [])

    const IntroSectionHeaderStyle_font = styled(IntroSectionHeaderStyle)
        `
           font-family: var(--font-manrope);
        `
    const IntroSectionDescriptionStyle_textAlign = styled(IntroSectionDescriptionStyle)
        `
            text-align: center
        `

    const ColorTheme =
        {
            textColor:"white",
            mainColor:"#014164",
            linearColor:"#014164"
        }

    return (
        <div ref={content_ref} className="about-preview">
            <img src={about_preview_img}
                 width="100%" alt="about-fe-img"/>
            <div ref={body_ref} className="body">
                <div className="header">
                    <IntroSectionHeaderStyle_font ColorTheme={ColorTheme}>About Us</IntroSectionHeaderStyle_font>
                </div>
                <div className="main">
                    <IntroSectionDescriptionStyle_textAlign>
                        The Faculty of Engineering of the Royal University of Phnom Penh was established in 2013 with the vision of training students in the field of engineering to be highly capable, innovative ideas with ethical research to meet the needs and help develop current society and globalization.
                    </IntroSectionDescriptionStyle_textAlign>
                    {/*</p>*/}
                    <hr/>
                </div>
                <div className="footer">
                    {/*<SeeMoreStyledLink link={'/about-us'} label={"See More"}/>*/}
                    <Link to={"/about-us"}  style={{textDecoration:"unset",color:"white"}}>
                        <ButtonRoundStyled
                            backgroundColor={"white"}
                            backgroundColorHover={"#01375a"}
                            textColor={"black"}
                            colorHover={"white"}>
                            Learn More
                        </ButtonRoundStyled>
                    </Link>

                </div>
            </div>
        </div>
    );

}

export default AboutPreview;