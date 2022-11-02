import React from 'react';

function ForwardContent(props) {
    return (
        <section className="forward-news-update-link global-padding">

        <div className="forward-content-wrapper">
            <h1 className={"forward-title header-font-style"}>
                {forward_update_MOCK_DATA.title}
            </h1>

            <p className={"forward-description description-bold-style"}>
                {forward_update_MOCK_DATA.summary}
            </p>

            <ButtonRoundStyled textColor={"white"} backgroundColor={"#00171F"}>
                {forward_update_MOCK_DATA.button_label}
                <img className={"arrow-icon"} src={require('assets/icon/arrow/bi_arrow-left.svg')} alt=""/>
            </ButtonRoundStyled>
        </div>

        <img src={require('assets/icon/png/news_update.png')} alt="" className={"forward-image"}/>

    </section>
    );
}

export default ForwardContent;