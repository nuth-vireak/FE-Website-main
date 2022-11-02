import React from 'react';
import "./questionBoxStyle.scss"
export default function QuestionBox({ id, question,ifshow, answer ,No }) {
    return (
        <div className="faq">

            <div className="faq-box " >
                <div className="accordion-item faq-box-item">
                    <h2 className="accordion-header faq-box-header" id={'heading' + id}>

                        <button className={`accordion-button faq-box-button row ${ifshow === 'show' ? "" : "collapsed"}`}  type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + id} aria-expanded="false" aria-controls={'collapse' + id}>
                            <div className = "col-1 firstText">
                            <i className="far fa-question-circle iconQuestion"></i>
                            </div>
                            <div className = "col QandA">
                            {question}
                            </div>
                        </button>
                    </h2>
                    <div id={'collapse' + id} className={"faq-box-collapse accordion-collapse collapse row " + ifshow} aria-labelledby={'heading' + id} data-bs-parent="#accordionExample">
                        <div className="accordion-body borders-right answer row">
                            <div className = "col-1  firstText">
                            {No}
                            </div>
                            <div className = "col QandA">
                            {answer}
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>


        </div>



    );

}
