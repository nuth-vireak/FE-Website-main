import React from "react";

import '../../style/content.css'
import '../../style/contentResponsive.css'

import {departmentDetailImg} from "component/page/departmentDetail/util/SectionProps";
import {InView} from 'react-intersection-observer';

import About from "./about";
import Undergraduate from "./undergraduate";
import Graduate from "./graduate";

export default function Contents({handleIntersection,children,threshold,sectionLabel})
{
    const aboutImg = require(`assets/${departmentDetailImg.ABOUT}`).default
    const aboutImg_mobile = require(`assets/${departmentDetailImg.ABOUT_MOBILE}`).default

    const underImg = require(`assets/${departmentDetailImg.UNDERGRADUATE}`).default
    const underImg_mobile = require(`assets/content-banner/under-mobile-1.jpg`).default

    const gradImg = require(`assets/${departmentDetailImg.GRADUATE}`).default
    const gradImg_mobile = require(`assets/${departmentDetailImg.GRADUATE_MOBILE}`).default

    return (
        <>
            {/*Render About-Page*/}
            <InView
                threshold={threshold}
                onChange={(inView,entry)=>
                    handleIntersection(inView,entry,sectionLabel.ABOUT)}>
                {
                    ({ref }) =>
                        <About forwardRefs={ref} imgUrl={aboutImg} imgUrl_mobile={aboutImg_mobile}/>
                }
            </InView>

            {/*Render SubNavbar*/}

                { children }

            {/*Render Undergraduate*/}
            <InView
                threshold={threshold}
                onChange={(inView,entry)=>
                    handleIntersection(inView,entry,sectionLabel.UNDERGRADUATE)}>
                    {
                        ({ref}) =>
                            <Undergraduate forwardRefs={ref} imgUrl={underImg} imgUrl_mobile={underImg_mobile}/>
                    }
            </InView>

            {/*Render Graduate*/}

            <InView
                threshold={threshold}
                onChange={(inView,entry) =>
                    handleIntersection(inView,entry,sectionLabel.GRADUATE)}>
                    {({ref})=>
                    <Graduate forwardRefs={ref} imgUrl={gradImg} imgUrl_mobile={gradImg_mobile}/>}
            </InView>
        </>
    )
}