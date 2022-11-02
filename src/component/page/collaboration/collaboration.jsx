import React from 'react';
import Partner from "component/page/collaboration/partner/partner";
import Banner from "../../reused-component/banner/headerBanner/banner";
import './style/collaboration.css'
import img from "assets/Illustration/bus_afternoon.jpg"
import Activities from "component/page/collaboration/activity/activities";
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";

function Collaboration(props) {
    return (
        <FadeInStyled>
            <div className="collaboration">
                <Banner imgUrl={img} title={"collaboration"} positionX={"50%"} positionY={"50%"}/>
                <Activities title={"Activities"}/>
                <Partner title={"Academic Partner"} containerStyle={"Partner"}/>
                <Partner title={"Local Partner"} containerStyle={"alternatePartner"} cardStyle={"alternatePartnerCard"} headerColor={"white"}/>
            </div>
        </FadeInStyled>
    );
}

export default Collaboration;