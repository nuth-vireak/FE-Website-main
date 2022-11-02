import React from 'react';
import './styles/recent_videos.scss';
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
import RowSlider from 'component/reused-component/RowSlider/RowSlider';
import styled from "styled-components";

const videos = [
    {
        title: 'Benefits and opportunities of the future in engineering skills',
        date: '13 Oct 2014',
        vlink: 'DqIhwRtJJEA'
    },
    {
        title: 'Faculty of Engineering: 2014-18',
        date: '06 Jan 2019',
        vlink: 'ckR_YRgYPTs'
    },
    {
        title: 'The 5th Engineering Day 2019',
        date: '12 Dec 2019',
        vlink: 'vUs50SvFyuE'
    },

    {
        title: 'Introduction to bio engineering department',
        date: '29 Dec 2020',
        vlink: 'zfsJi5o1N84'
    },
    {
        title: 'Introduction to Information Technology Engineering Department',
        date: '13 Jan 2021',
        vlink: '7a4fqd-yW5Q'
    },
    {
        title: 'Telecommunication and Electronics Engineering Dept.',
        date: '21 Jan 2021',
        vlink: 'T4Nb_NQsJvo'
    },
    {
        title: 'Online Register via Mobile App',
        date: '17 Jan 2022',
        vlink: 'Xyd0wuAP1Dk'
    },

]

const Video = (videoDetail) => {

    return (

        <div key={videoDetail.title} className="video" data-bs-toggle="modal" data-bs-target={`#recentVideoModal-${videoDetail.vlink}`}>
            <div className='video-outline'>
                <div className="outline-wrapper">
                <span className="play-btn">
                    <i className="fas fa-play-circle"/>
                </span>
                    <span className="video-title">
                    <h4>{videoDetail.title}</h4>
                    <small>{videoDetail.date}</small>
                </span>
                </div>
            </div>
            <img  className='thumbnail' alt={`Video-${videoDetail.title}`} src={`https://img.youtube.com/vi/${videoDetail.vlink}/0.jpg`} />
            <Iframe vlink={videoDetail.vlink} />
        </div>
    );

}

export const Iframe = ({ vlink }) => {

    const closeVideo = (parentEle) => {
        let ifr = document.querySelector(`#${parentEle}`).querySelector('iframe');
        ifr.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    }

    return (
        // <!-- Vertically centered modal -->
        <div className="modal videoModal fade" onClick={() => closeVideo(`recentVideoModal-${vlink}`)} id={`recentVideoModal-${vlink}`} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="recentVideoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => closeVideo(`recentVideoModal-${vlink}`)}>
                            <i className="fas fa-times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <iframe width="100%" height="720" src={`https://www.youtube.com/embed/${vlink}?enablejsapi=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const RecentlyVideo = () => {

    const videoComponents = []

    videos.map(vdo => {
        videoComponents.push(Video(vdo));
    })


    return (
        <RecentlyVideoStyled>
            <SectionHeaderStyled>
                MEDIA
            </SectionHeaderStyled>
            <RowSlider componentList={videoComponents}/>
        </RecentlyVideoStyled>
    )
}

const RecentlyVideoStyled = styled.div
    `
      position: relative;
      padding: 0 5% 5% 5%;
      transition: padding 250ms ease-in-out;
      
      @media(max-width:480px)
      {
        padding-bottom:10%;
      }
    `

export default RecentlyVideo;