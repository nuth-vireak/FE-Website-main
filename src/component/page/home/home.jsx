import React from 'react';
import Carousel from "../../reused-component/banner/carousel/carousel"
import { home_page_banners } from './predefined-banner';
import RecentlyVideo from './recent_video';
import AboutPreview from './about-preview';
import Research from 'component/reused-component/researchpreview/research';
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";
import styled from "styled-components";

// import LatestNews from './latestNews';
// import UpcomingEvent from './upcoming_event';
// import RowSlider from "component/reused-component/RowSlider/RowSlider";
// import {HeaderSectionStyled} from "component/reused-component/TextStyled/header.styled";
// import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";

// var latestNews = {
//     'primary': {
//         imgPath: 'https://www.kratikal.com/blog/wp-content/uploads/2020/12/Top-Cyberattacks-in-Each-Month-of-2020.jpg',
//         topic: "Top Cyberattacks in Each Month of 2020",
//         date: "26-Sep-2021",
//         content_summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//                         has been the industry's standard dummy text ever since the 1500s, when an unknownafd
//                         printer took a galley of type and scrambled it to make a type specimen book. It has sdfds
//                         survived not only five centuries, but also the leap into electronic typesetting, remainingm
//                         essentially unchanged. It was popularised in the 1960s with the release of Letraset sdfee sheets containing
//                         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//                         has been the industry's standard dummy text ever since the 1500s, when an unknownafd
//                         printer took a galley of type and scrambled it to make a type specimen book. It has sdfds
//                         survived not only five centuries, but also the leap into electronic typesetting, remainingm
//                         essentially unchanged. It was popularised in the 1960s with the release of Letraset sdfee sheets containing
//                         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//         type: 'News'
//     },
//     'secondary': [
//         {
//             imgPath: 'https://developer.qualcomm.com/sites/default/files/attachments/5g_spectrum-01.png',
//             topic: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
//             date: "26-Sep-2021",
//             type: 'News'
//         },
//         {
//             imgPath: 'https://cidoc.mini.icom.museum/wp-content/uploads/sites/6/2020/05/200309-D-HN545-003.jpg',
//             topic: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
//             date: "26-Sep-2021",
//             type: 'Announcement'
//         }
//     ]
// }

const research_sample = [
    {
        img_path: 'https://www.ece.iastate.edu/files/2011/02/Bioengineering-Poster.jpg',
        topic: "Strategic research",
        date: 'Feb 23 2021',
        type: 'Research'
    },
    {
        img_path: 'https://www.researchgate.net/profile/Darpan-Malhotra/publication/260790591/figure/fig1/AS:392524284874758@1470596491013/Fig-1-Bioquest-2013-provides-a-platform-to-discuss-research-in-Genomics-and.png',
        topic: "Amita bioquest from 2013",
        date: 'July 30, 2019',
        type: 'Project'
    },
    {
        img_path: 'https://www.questionpro.com/blog/wp-content/uploads/2018/04/Research-Methods_without-logo.jpg',
        topic: "Enginering day & student project",
        date: 'July 30, 2021',
        type: 'Project'
    },
    {
        img_path: 'https://www.researchgate.net/profile/Darpan-Malhotra/publication/260790591/figure/fig1/AS:392524284874758@1470596491013/Fig-1-Bioquest-2013-provides-a-platform-to-discuss-research-in-Genomics-and.png',
        topic: "Amita bioquest from 2013",
        date: 'July 30, 2019',
        type: 'Project'
    },    {
        img_path: 'https://www.ece.iastate.edu/files/2011/02/Bioengineering-Poster.jpg',
        topic: "Strategic research",
        date: 'Feb 23 2021',
        type: 'Research'
    },
    {
        img_path: 'https://www.researchgate.net/profile/Darpan-Malhotra/publication/260790591/figure/fig1/AS:392524284874758@1470596491013/Fig-1-Bioquest-2013-provides-a-platform-to-discuss-research-in-Genomics-and.png',
        topic: "Amita bioquest from 2013",
        date: 'July 30, 2019',
        type: 'Project'
    },
    {
        img_path: 'https://www.questionpro.com/blog/wp-content/uploads/2018/04/Research-Methods_without-logo.jpg',
        topic: "Enginering day & student project",
        date: 'July 30, 2021',
        type: 'Project'
    },
    {
        img_path: 'https://www.researchgate.net/profile/Darpan-Malhotra/publication/260790591/figure/fig1/AS:392524284874758@1470596491013/Fig-1-Bioquest-2013-provides-a-platform-to-discuss-research-in-Genomics-and.png',
        topic: "Amita bioquest from 2013",
        date: 'July 30, 2019',
        type: 'Project'
    },

]


const ImageStyled = styled.img
    `
       aspect-ratio: 16/9;
       object-fit: cover;  
       width: 100%;
    `

const exampleVideoList = []
research_sample.map(addComponent)

function addComponent(video) {
    exampleVideoList.push(
        <>
            {/*<h3>{video.topic}</h3>*/}
            <ImageStyled src={video.img_path} alt=""/>
            {/*<h1>{video.date}</h1>*/}
        </>
    )
}

function Home() {
    return (
        <FadeInStyled>
            <div className="home-header">
                <Carousel name={'home-banner'} banners={home_page_banners} align_contents={'right'} />
            </div>
            <div className="home-body">
                {/* <UpcomingEvent/>
                <LatestNews latestNews={latestNews} /> */}
                {/* <Academic/> */}
                <Research title={"Research"} subtitle={"PAST STUDENT RESEARCH & PROJECT"} docList={research_sample}/>
                <AboutPreview/>
                <RecentlyVideo/>
            </div>
        </FadeInStyled>
    );
}

export default Home;