import React from 'react';
import '../../reused-component/gridlayout/gridlayout.css'
import Banner from "../../reused-component/banner/headerBanner/banner";
import {useRouteMatch} from 'react-router-dom'
import imgURL_1 from '../../../assets/bus.jpg'
import imgURL_2 from '../../../assets/department.jpg'
// import imgURL_3 from '../../../assets/citynight.jpg'
// import imgURL_4 from '../../../assets/bus_afternoon.jpg'

import News_card from "./news_card.jsx";
import CardOverlay from "./card_overlay.jsx";
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";

// function Article()
// {
//     return<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam corporis dolores dolorum, ducimus eveniet fugiat fugit natus nihil, officia praesentium quae quo quod, rem suscipit vitae voluptatem. Ea, quia.</p></div>
// }

const type =
    {
        EVENT:"event",
        NEWS:"news",
    }
const status =
    {
        ACTIVE:"active",
        EXPIRED:"expired",
        UPCOMING:"upcoming",
    }

const ListNews =
    [
        {
            id:1,
            img:imgURL_1,
            title:"Summer bootcamp project 2021",
            date:"july 12, 2021",
            catalog:type.NEWS,
            statusLog:status.ACTIVE
        },
        {
            id:4,
            img:imgURL_2,
            title:"Graphic design & media",
            date:"MAY 30, 2021",
            catalog:type.EVENT,
            statusLog:status.UPCOMING
        },
        {
            id:2,
            img:imgURL_2,
            title:"Graphic design & media",
            date:"july 20, 2021",
            catalog:type.EVENT,
            statusLog:status.EXPIRED
        },
        {
            id:3,
            img:imgURL_3,
            title:"Summer bootcamp project 2021",
            date:"july 25, 2021",
            catalog:type.NEWS,
            statusLog:status.ACTIVE
        },

        {
            id:6,
            img:imgURL_4,
            title:"Halloween Custom Contents",
            date:"july 30, 2021",
            catalog:type.NEWS,
            statusLog:status.ACTIVE
        },

        {
            id:4,
            img:imgURL_3,
            title:"Graphic design & media",
            date:"july 30, 2021",
            catalog:type.NEWS,
            statusLog:status.ACTIVE
        },        {
            id:4,
            img:imgURL_1,
            title:"Graphic design & media",
            date:"july 30, 2021",
            catalog:type.NEWS,
            statusLog:status.ACTIVE
        },
        {
            id:6,
            img:imgURL_4,
            title:"Graphic design & media",
            date:"jul 30, 2021",

            catalog:type.EVENT,
            statusLog:status.EXPIRED
        },

    ]




function News(props)
{
    // const {id} = useParams()
    const {path,url} = useRouteMatch()
    console.log(url)
    console.log(path)

    const addOverlay = (date,status) =>
        {
            const dateArray = date.split(",")
            const dateElement = dateArray[0].split(" ")

            return <CardOverlay month={dateElement[0]} day={dateElement[1]} status={`${status} Event`}/>
        }
    return (
        <FadeInStyled>
            <Banner title={"News & Event"} imgUrl={imgURL_3} positionX={"50%"} positionY={"50%"}/>
            <div className={"news-event-list"}>
                <div className={"news-list"}>
                    <div className={"menu-layout"}>
                        <SectionHeaderStyled>EVENT</SectionHeaderStyled>
                        <ul className={"menu-list"}>
                            {
                                ListNews.map(({id,img,title,date,catalog,statusLog},index) => {
                                    if (catalog === type.EVENT) return <News_card overlay={ (statusLog === (status.ACTIVE) || statusLog === (status.UPCOMING)) && addOverlay(date,statusLog) }
                                                                                  link={`${url}/${id}`}
                                                                                  filter={statusLog}
                                                                                  title={title}
                                                                                  date={date}
                                                                                  key={index}
                                                                                  imgURL={img}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="event-list">
                    <div className={"menu-layout"}>
                        <SectionHeaderStyled>LATEST NEWS</SectionHeaderStyled>
                        <ul className={"menu-list"}>
                            {
                                ListNews.map(({id,img,title,date,catalog,statusLog},index) => {
                                    if (catalog === type.NEWS) return <News_card key={index} link={`${url}/${id}`} filter={statusLog} title={title} date={date} imgURL={img}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </FadeInStyled>
    );
}

export default News;
