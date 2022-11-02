import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles/latestNews.scss';
const LatestNews = ({ latestNews }) => {

    let history = useHistory();

    return (
        <div className="news">
            <div className="main">
                <div className="news-header d-flex">
                    <div>
                        <h1>Lastest news</h1>
                        <hr/>
                    </div>
                    <Link to={'/news-event.js'} className="view-more-btn btn btn-sm">
                        View more <i className="fas fa-arrow-right" />
                    </Link>
                </div>

                <div className="news-list">
                    <div className="row gx-2">
                        <div className={`${latestNews.secondary ? 'col-md-7' : 'col'}`}>
                            <div className="primary-content d-flex flex-column">
                                <img className="content-img" src={latestNews.primary.imgPath} alt={latestNews.primary.topic} width="100%"/>
                                <h5 className="content-title mt-2">
                                    {latestNews.primary.topic}
                                </h5>
                                <small className="content-date text-muted">{latestNews.primary.date} | {latestNews.primary.type}</small>
                                <br />
                                <p className="content-summary" align="justify">
                                    {latestNews.primary.content_summary}
                                </p>
                                {
                                    // IN CASE THERE IS NO CONTENT SUMMARY 
                                    latestNews.primary.content_summary ? <Link to={'/news-event.js/1'} className="read-more-btn
                                                btn 
                                                btn-sm 
                                                align-self-start 
                                                p-0">  READ MORE <i className="fas fa-arrow-right" />
                                    </Link> : ''
                                }
                            </div>
                        </div>
                        <div className={'col-md-5'}>
                            <div className="row gy-2">
                                {
                                    latestNews.secondary ? latestNews.secondary.map(secNew => {
                                        return (
                                            <div key={secNew.topic} className={'secondary-container'}>
                                                <div onClick={() => history.push('/news-event.js/1')} className="secondary-content d-flex flex-column">
                                                    <img className="content-img" src={secNew.imgPath} alt={secNew.topic} width="100%"/>
                                                    <h5 className="content-title mt-2">
                                                        {secNew.topic}
                                                    </h5>
                                                    <small className="content-date text-muted">{secNew.date} | {secNew.type}</small>
                                                </div>
                                            </div>
                                        );
                                    }) : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LatestNews;