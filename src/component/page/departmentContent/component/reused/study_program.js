import React from 'react';

function StudyProgram(props) {
    return (
        <section className="program-section global-padding">
        <h1 className="program-title header-l-margin-bottom header-font-style header-m-font-size ">{studyProgramSection.title}</h1>
        <div className="program-layout-wrapper">
            {studyProgramSection.program.map((program,index)=>
                <div className="program-card" key={index}>
                    <img src={require(`assets/${program.img}`)} alt="" className="program-img"/>
                    <h3 className="program-name mini-font-name">{program.title}</h3>
                    <p className="description mini-font-description">{program.description}</p>
                </div>
            )}
        </div>
    </section>
    );
}

export default StudyProgram;