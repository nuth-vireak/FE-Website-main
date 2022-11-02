import React from "react";
import "./../style/overviewStyle.css";
import "./../../departmentDetail/style/content.scss"
import styled from "styled-components";
import {HeaderHighLightStyle} from "component/reused-component/TextStyled/header.styled";
import {ListStyled} from "component/reused-component/TextStyled/list.styled";
// import {IntroParagraphStyled} from "component/reused-component/TextStyled/paragraph.styled";

// import {GlobalPadding} from "component/reused-component/padding/global-padding";
// import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";
// const HeaderSectionStyled_extend = styled(HeaderSectionStyled)
//     `
//
//       margin-bottom: 1em;
//       margin-top: .5em;
//       //font-size: clamp(1.5em,4vw,3.68em);
//     `
const HeaderHighLightStyleExtend = styled(HeaderHighLightStyle)
    `
      color:#014164;
    `
const HeaderHighLightStyldExtendCenter = styled(HeaderHighLightStyle)
    `
      text-align: center;
      font-size: clamp(1.5rem,4vw,2rem);
      margin-top:2em;
      margin-bottom:1.5em;
    `


const Overview = () => {
  return (
    <div className="vision-and-missions">
      <div className={"content"}>
        <section className="outline-section" style={{padding: 0}}>
          <div className="outline-bullet-point">
            <div className={"bullet-point-text"}>
              <h2 className={"bullet-point-title"}>
                Vision
              </h2>
              <p className={"bullet-point-summery description-bold-style"}>
                The Faculty of Engineering of the Royal University of Phnom Penh was established in 2013 with the vision of training students in the field of engineering to be highly capable, innovative ideas with ethical research to meet the needs and help develop current society and globalization.
              </p>
              <br/>
              <h2 className={"bullet-point-title"}>
                Mission
              </h2>
              <p className={"bullet-point-summery description-bold-style"}>
                    -&nbsp;Training human resources with specific abilities and skills
                    <br />
                    -&nbsp;Exchange program with university partners.
                    <br />
                    -&nbsp;Entrepreneur guidance in Engineering sector.
                    <br />
                    -&nbsp;Develop in-depth engineering research
              </p>
            </div>
            <div className="img-wrapper">
                {/*<iframe class="bullet-point-img" width="100%" height="100%" src="https://www.youtube.com/embed/ckR_YRgYPTs?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>*/}
                {/*<iframe className="bullet-point-img" width="100%" height="100%" src="https://www.youtube.com/embed/ckR_YRgYPTs"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen></iframe>*/}

                {/*<iframe className="bullet-point-img" width="100%" height="100%" src="https://www.youtube.com/embed/ckR_YRgYPTs?controls=0&showinfo=0"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen/>*/}

                <iframe className="bullet-point-img" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/ckR_YRgYPTs?controls=0&showinfo=0&rel=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>

          </div>
        </section>
        <div className="skill-info">
          <HeaderHighLightStyldExtendCenter>Our Faculty offers three main skills for market demand</HeaderHighLightStyldExtendCenter>
          <div className="list-skill">
              <div className="skill">

                <HeaderHighLightStyleExtend className="skill-title">Hard Skill</HeaderHighLightStyleExtend>

                <div className="skill-desc">
                  <ListStyled>
                    <li>Faculty of Telecommunication & Electronic Engineering</li>
                    <li>Faculty of Information Technology Engineering</li>
                    <li>Bio-Engineering</li>
                  </ListStyled>
                </div>
              </div>
              <div className="skill">
                <HeaderHighLightStyleExtend className="skill-title">Soft Skill</HeaderHighLightStyleExtend>
                <div className="skill-desc">
                  <ListStyled>
                    <li>Communication</li>
                    <li>Team Work </li>
                    <li>Problem Solving</li>
                    <li>Innovation and Creativity</li>
                  </ListStyled>
                </div>
              </div>
              <div className="skill">
                <HeaderHighLightStyleExtend className="skill-title">English</HeaderHighLightStyleExtend>
                <div className="skill-desc">
                  <ListStyled>
                    <li>Study Time 4 hour / 1 week for 3 years</li>
                    <li>Certification of completion</li>
                  </ListStyled>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
