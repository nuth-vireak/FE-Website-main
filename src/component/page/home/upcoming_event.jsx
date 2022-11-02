import React from 'react';
import pic1 from 'assets/icon/error/sad_computer.png';
import pic2 from 'assets/icon/error/sad_computer.png';
import pic3 from 'assets/icon/error/sad_computer.png';
import pic4 from 'assets/icon/error/sad_computer.png';
import './styles/upcoming_events_styles.scss';
import { Link, useHistory } from 'react-router-dom';

const UpcomingEvent = () => {

    let history = useHistory();

    return (
        <div className="upcoming-event-board">
            <div className="main">
                <div className="header">
                    {/* <button className="btn btn-sm">Upcoming Events</button>
                    <hr /> */}
                    <div>
                        <h1>Events</h1>
                        <hr/>
                    </div>
                    <Link to={'/news-event.js'} className="view-more-btn btn btn-sm">
                        View more <i className="fas fa-arrow-right" />
                    </Link>
                </div>
                <div className="content">
                    <div className="row gx-3 gy-4">
                        <div className="col-md-8 col-12 event">
                            <img alt="event0" src={pic1} height="100%" onClick={() => history.push('/news-event.js/4')}></img>
                            <span className="quick-preview-event">
                                <h6>UPCOMING | 11th - 13th October 2019</h6>
                            </span>
                        </div>
                        <div className="col-md-4">
                            <div className="row gy-3">
                                <div className="col-md-12 event">
                                    <img alt="event1" src={pic3} height="100%" onClick={() => history.push('/news-event.js/4')}></img>
                                    <span className="quick-preview-event">
                                        <h6>ACTIVE | 11th - 13th October 2019</h6>
                                    </span>
                                </div>
                                <div className="col-md-12 event">
                                    <img alt="event2" src={pic4} height="100%" onClick={() => history.push('/news-event.js/4')}></img>
                                    <span className="quick-preview-event">
                                        <h6>ENDED | 11th - 13th October 2019</h6>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="view-all-btn btn btn-sm p-4 w-100">View all <i className="fas fa-arrow-right" /></button> */}
            </div>
        </div>
    )

}

export default UpcomingEvent;