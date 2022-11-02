import React from 'react';
import './../style/about_usStyle.scss';
import Banner from '../../../reused-component/banner/headerBanner/banner';
import bannerImg from './../../../../assets/about_us/banner-img/FeFamily.jpg'
import Overview from './overview';
import DeanSpeech from './dean_speech';
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";

// import footerImg from './../../../../assets/about_us/banner-img/footer-image.jpg'
// import emailIcon from "assets/icon/footer/icon-email.png";

export default function AboutUs() {

    return (
        <FadeInStyled>
        <div className="aboutUs">
            <Banner title={"ABOUT US"} imgUrl={bannerImg} positionY={"100%"} />
            <Overview/>
            <DeanSpeech/>
            {/*Close for a while*/}
            {/* <StaffSection staffs={staffs}/> */}
            {/*<div className="footer">*/}
            {/*    <img className="faculty-stuff-img" */}
            {/*         src={footerImg}*/}
            {/*         alt="FE-Faculty-Stuff"*/}
            {/*         width="100%"/>*/}
            {/*</div>*/}

        </div>

        </FadeInStyled>
    );
}