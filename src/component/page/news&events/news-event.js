import React from 'react';
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";
import Banner from "component/reused-component/banner/headerBanner/banner";
import imgURL_3 from "assets/Illustration/citynight.jpg";
import {GlobalPaddingExceptTop} from "component/reused-component/padding/global-padding-expect-top";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
import {ThreeFlexLayoutStyled} from "component/reused-component/displayLayout/threeFlexLayout.styled";
import {ThreeFlexCardStyled} from "component/reused-component/displayLayout/threeFlexCard.styled";

import NewsData from "utils/content/news_event/EVENT_MOCK_DATA.json"
import EventData from "utils/content/news_event/NEWS_MOCK_DATA.json"

import NewsEventCard from "component/page/news&events/news-event-card";
import styled from 'styled-components'
import {ThreeGridLayoutStyled} from "component/reused-component/displayLayout/threeGridLayout.styled";

const SectionHeaderStyledMarginTop = styled(SectionHeaderStyled)
    `
        margin-top: unset;
    `


function NewsEvent(props) {
    return (
        <FadeInStyled>
            <div className={"news&event"}>
                <Banner title={"News & Event"} imgUrl={imgURL_3} positionX={"50%"} positionY={"50%"}/>
                <GlobalPaddingExceptTop>
                    <SectionHeaderStyled>
                        Event
                    </SectionHeaderStyled>
                    <ThreeFlexLayoutStyled>
                            {
                                NewsData.map(({topic,imageUrl,category,department,publish},index)=>
                                    <ThreeFlexCardStyled key={index}>
                                        <NewsEventCard
                                            topic={topic}
                                            imageUrl={imageUrl}
                                            category={category}
                                            publish={publish}
                                            department={department}/>
                                    </ThreeFlexCardStyled>
                                )
                            }
                    </ThreeFlexLayoutStyled>

                    <SectionHeaderStyledMarginTop>
                        Event
                    </SectionHeaderStyledMarginTop>
                    <ThreeGridLayoutStyled>
                        {
                            EventData.map(({topic,imageUrl,category,department,publish},index)=>
                                    <NewsEventCard
                                        key={index}
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

export default NewsEvent;