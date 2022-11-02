import Banner from "../../reused-component/banner/headerBanner/banner";
import React from 'react';
import imgUrl from '../../../assets/banner/faq.jpg';
import QuestionBox from "./questionBox";
import SubNavBar from "./../../reused-component/subnav/subNavbar"
import "./faqStyle.scss"
import Breadcrumbnav from "component/reused-component/breadcrumb/breadcrumbnav";
import FadeInStyled from "component/reused-component/animation/page/fade-in.styled";
import QA from "utils/content/FAQ/QA.json"

export default function Faq() {
    // console.log(Object.keys(QA))

    var keys = [];
    const extract_question_categories = () => {
        return Object.keys(QA);
    }
    keys = extract_question_categories();
    const extract_question = () => {
        return keys.map((key) => {
            return QA[key];                
        })
    }
    // console.log(extract_question())
    return (
        <FadeInStyled>
        <div className={"Faq"}>

            <Banner title={"FAQ"} imgUrl={imgUrl} positionX={"50%"} positionY={"25%"}/>
            {/*<Breadcrumbnav/>*/}
            <SubNavBar />

            <div className="accordion tab-content faqFont" id="pills-tabContent">
                {
                    keys.map((key,index) => {
                        return (
                            <div key={index} className={`tab-pane fade show ${key === 'general' ? 'active' : ''}`}  id={`pills-${key}`} role="tabpanel" aria-labelledby={`pills-${key}-tab`}>
                                {
                                    QA[key].map((qa, idx) => {
                                        return <div key={idx} className={`tab-pane fade show ${key === 'general' ? 'active' : ''}`}  id={`pills-${key}`} role="tabpanel" aria-labelledby={`pills-${key}-tab`}>
                                            <QuestionBox 
                                                // ifshow='show'
                                                id={idx} 
                                                question={qa.question} 
                                                answer={qa.answer} 
                                                No={idx+1}/>
                                        </div>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </FadeInStyled>

    );
}