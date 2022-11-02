import React,{useEffect,useState,useRef} from 'react';
import {Link} from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

import IntroSection from "component/page/departmentContent/component/reused/Intro-section/IntroSection";

import {SubNavStyle} from "component/reused-component/subnav-round/subnav-round.styled";
import {ButtonRoundStyled} from "component/reused-component/button-round/button_round_arrow.styled";
import styled from "styled-components";
import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import {AuthorStyled} from "component/reused-component/TextStyled/author.styled";


function DepartmentPageDetail(
    {
        ColorTheme,
        SubNavbarColorTheme,
        PAGE_MOCK_DATA,
        LearnMoreButtonTheme,
        disableStudentProject,
        disableResearch,
        disableContact,
    })
{
    const {
        subNavbarSection,
        contactSection,
        introSection,
        outlineListSection,
        // outlineSection,
        // evaluationSection,
        jobSection,
        // eventLinkSection,
        researchSection,
        studentProjectSection,
        staffSection,
        // curriculumSection,
        // studyProgramSection
    } = PAGE_MOCK_DATA



    //State & Ref for subNavbar
    const [selectNav,setNav] = React.useState(0)
    const section_subNav_ref = React.useRef(null);
    const outline_section_ref = React.useRef(null);
    const jobSection_section_ref = React.useRef(null);
    const research_section_ref = React.useRef(null);
    const project_section_ref = React.useRef(null);
    const contact_section_ref = React.useRef(null);
    const academic_staff_ref = React.useRef(null);

    const section_ref_list = //add to list for easy mapping element
        [
            outline_section_ref,
            jobSection_section_ref,
            research_section_ref,
            project_section_ref,
            contact_section_ref,
            academic_staff_ref
        ]

    //offset bound to change selectedNav
    const BoundingClientTopSection = 150.4;
    const BoundingClientTopSubNav = 104;


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScrollEvent = () =>
    {
        //handle adding box shadow to subNavBar
        if(section_subNav_ref.current !== null) {
            if (section_subNav_ref.current.getBoundingClientRect().y <= BoundingClientTopSubNav) {
                section_subNav_ref.current.classList.add("hard-box-shadow")
            } else {
                section_subNav_ref.current.classList.remove("hard-box-shadow")
            }
        }
        // console.log(section_subNav_ref.current.getBoundingClientRect().y)

        //Handle Select Nav color change
        // eslint-disable-next-line array-callback-return
        section_ref_list.map((sectionRef,index) =>
        {
            if(sectionRef.current !== null)
            {
                const bounding = sectionRef.current.getBoundingClientRect()
                if (bounding.top<BoundingClientTopSection && bounding.bottom>BoundingClientTopSection)
                {
                    setNav(index)
                }
            }
        })
    }

    //project slide list
    const pageRef = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
    const [slide, setSlide] = useState(2);

    const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth",block: 'nearest'});

    const scrollToPane = (num) => {
        if(num < studentProjectSection.project.length-1)
        {
            setSlide(num + 1)
            scrollToRef(pageRef[num + 1])
        }
    };

    const scrollBackPane = (num) => {
        if(num > 2)
        {
            // console.log("scroll")
            setSlide(num - 1)
            scrollToRef(pageRef[num - 3])
        }

    };

    useEffect(() => {

        window.addEventListener("scroll", handleScrollEvent)
        return () => {
            window.removeEventListener("scroll", handleScrollEvent)
        };
    }, [handleScrollEvent]);

    return (
        <div className={"DepartmentPageDetail"}>
            <section className={"intro-section"}>
                <IntroSection
                    ColorTheme={ColorTheme}
                    imgUrl={introSection.backgroundImg}
                    title={introSection.title}
                    description={introSection.description}/>
            </section>

            <section ref={section_subNav_ref} className="subNav-section">
                <SubNavStyle ColorTheme={SubNavbarColorTheme}>
                    {subNavbarSection.map(({title},index)=>
                        {
                            // eslint-disable-next-line array-callback-return
                            if(title === '') return;

                            return (
                                <ScrollIntoView selector={`#idSelector${index}`}
                                                key={index}>
                                    <li className={selectNav === index ? "nav-li nav-selected":"nav-li"}>
                                        {title}
                                    </li>
                                </ScrollIntoView>)
                        }
                    )}
                </SubNavStyle>
            </section>

            <ContentMarginStyled>
                <section ref={outline_section_ref} id={`idSelector0`} className={"outline-section contentWrapper"}>
                    {outlineListSection.map((outline,index)=>
                        <div className={"outline-bullet-point"} key={index}>
                            <div className={"bullet-point-text"}>
                                <h2 className={"bullet-point-title"}>
                                    {outline.title}
                                </h2>
                                <p className={"bullet-point-summery description-bold-style"}>
                                    {outline.summary}
                                </p>

                                {"link" in outline &&
                                    <Link to={outline.link} style={{textDecoration:"none"}}>
                                        <ButtonRoundStyled
                                            textColor={LearnMoreButtonTheme.textColor}
                                            colorHover={LearnMoreButtonTheme.textColorHover}
                                            backgroundColor={LearnMoreButtonTheme.backgroundColor}
                                            backgroundColorHover={LearnMoreButtonTheme.backgroundColorHover}>
                                            Learn More
                                        </ButtonRoundStyled>
                                    </Link>}
                            </div>
                            <div className={"img-wrapper"}>
                                {
                                    outline.img ?
                                        <img className={"bullet-point-img"} src={require(`assets/${outline.img}`).default
                                        } alt=""/> :
                                        <iframe
                                            className='bullet-point-img'
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube-nocookie.com/embed/${outline.video}?enablejsapi=1`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowFullScreen"/>

                                }
                            </div>
                        </div>
                    )}
                </section>
            </ContentMarginStyled>

            <ContentMarginStyled background={"#001f30"}>
                <section ref={jobSection_section_ref} id={`idSelector1`} className="job-section global-padding contentWrapper">

                    <div className="description-content ">
                        <h1 className="job-title header-l-margin-bottom header-font-style header-m-font-size">{jobSection.title}</h1>
                        <ul className="job-list">
                            {
                                jobSection.job.map((job,index)=>
                                    <li className="job" key={index}>
                                        <h3 className="job-label mini-font-name">{job.label}</h3>
                                        <p className="job-description mini-font-description">{job.description}</p>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <img src={require(`assets/${jobSection.icon}`).default} alt="" className="job-icon-image"/>
                </section>

            </ContentMarginStyled>

            <ContentMarginStyled background={"#0f354a"}>
                <section className={`forward-link event-topic global-padding contentWrapper`}>
                    <h1 className={"forward-title header-l-font-size header-font-style"}>
                        {/*{eventLinkSection.title}*/}
                        Event & Activities
                    </h1>

                    <div className="left-wrapper-content">
                        <p className={"forward-description description-bold-style"}>
                            {/*{eventLinkSection.description}*/}
                            In faculty of Engineering, we collaborate with both local and international partners to create an various event, activities, and opportunity for student to participate and showcase their work.
                        </p>
                        <Link to={"/news-event"} style={{ textDecoration:"none"}}>
                            <ButtonRoundStyled textColor={"white"} backgroundColor={"#00171F"}>
                                {/*{eventLinkSection.buttonLabel}*/}
                                {
                                    window.innerWidth>480 ? "Keep up to date with News & Event" : "Keep up to date"
                                }
                                <img className={"arrow-icon"} src={require('assets/icon/arrow/bi_arrow-left.svg').default} alt=""/>
                            </ButtonRoundStyled>
                        </Link>
                    </div>
                </section>
            </ContentMarginStyled>

            {/*<ShapeStyled/>*/}

            <ShapeLayoutStyled>


            </ShapeLayoutStyled>

            {/*<section className={`forward-link event-topic global-padding ${ColorTheme.forwardLinkColor}`}>*/}


            {!disableResearch &&

                <ContentMarginStyled background={"#f6f6f7"}>
                    <section ref={research_section_ref}
                             id={`idSelector2`}
                             className={"research-section global-padding contentWrapper"}>

                        <h2 className={"research-title header-m-font-size header-font-style "}>
                            {researchSection.title}
                        </h2>
                        <div className="research-layout-wrapper">
                            {
                                researchSection.research.map(({img, title, description, author,link},index)=>
                                    <Link className={"research-article"} style={{textDecoration:"none"}} key={index} to={link}>
                                        <img className={"research-img"} src={require(`assets/${img}`).default} alt=""/>
                                        <div className="textWrapper">
                                            <h3 className={"research-name header-font-style"}>{title}</h3>
                                            <AuthorStyled color={"#014164"}>
                                                {author}
                                            </AuthorStyled>
                                            <p className={"research-description"}>{description}</p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>

                        <Link to={"/research-project"} style={{textDecoration:"none",marginTop:"1em"}}>
                            <ButtonRoundStyled
                                style={{marginTop:"3em"}}
                                textColor={LearnMoreButtonTheme.textColor}
                                colorHover={LearnMoreButtonTheme.textColorHover}
                                backgroundColor={LearnMoreButtonTheme.backgroundColor}
                                backgroundColorHover={LearnMoreButtonTheme.backgroundColorHover}>
                                {researchSection.buttonLabel}
                                <img className={"arrow-icon"} src={require('assets/icon/arrow/bi_arrow-left.svg').default} alt=""/>
                            </ButtonRoundStyled>
                        </Link>
                    </section>
                </ContentMarginStyled>
            }

            {!disableStudentProject &&
                <ContentMarginStyled background={"#001f30"}>
                    <section ref={project_section_ref}
                             id={`idSelector3`}
                             className="student-project-section global-padding contentWrapper">
                        <h2 className="student-project-title header-font-style header-m-font-size">
                            Highlight Student's Project
                        </h2>

                        <div className={"flex-layout-column"}>

                            {
                                window.innerWidth > 768 && (slide< studentProjectSection.project.length-1) && <i className="fas fa-chevron-right slide-show-button" onClick={() => scrollToPane(slide)} />
                            }

                            {studentProjectSection.project.map(({title,img,description,studentName},index) =>
                                <div className="student-project-card"
                                     ref={pageRef[index]}
                                     key={index}>

                                    <img className="student-project-img"
                                         src={require(`assets/${img}`).default}
                                         alt=""/>

                                    <p className="student-project-name mini-font-name">{title}</p>
                                    <p className={`student-project-student-name ${ColorTheme.headerColor}`}>{`By ${studentName}`}</p>
                                    <p className="student-project-description mini-font-description">{description}</p>

                                </div>
                            )}

                            {
                                window.innerWidth > 768 && ((slide > 2)) && <i className="fas fa-chevron-left slide-show-button" onClick={() => scrollBackPane(slide)}/>
                            }
                        </div>
                    </section>
                </ContentMarginStyled>

            }

            {!disableContact &&
                <ContentMarginStyled background={"#0f354a"}>
                    <section ref={contact_section_ref}
                             className={`forward-link event-topic global-padding contentWrapper`}
                             id={`idSelector4`}>
                        <h1 className={"forward-title header-l-font-size header-font-style"}>
                            {/*{eventLinkSection.title}*/}
                            Contact Us
                        </h1>

                        <div className="left-wrapper-content">
                            <p className={"forward-description description-bold-style"}>
                                {/*{eventLinkSection.description}*/}
                                You can make get in touch with the Faculty of Engineering office room 103 for all the information, or directly contact the department with information below
                            </p>
                            <ContactStyled>
                                <div>
                                    <img src={require("assets/icon/png/akar-icons_phone.png").default} alt=""/>
                                    <a href={`tel: ${contactSection.number}`}>{contactSection.number}</a>
                                </div>
                                <div>
                                    <img src={require("assets/icon/png/akar-icons_flag.png").default} alt=""/>
                                    <a href={`https:${contactSection.page}`}>{contactSection.page}</a>
                                </div>
                            </ContactStyled>
                        </div>
                    </section>
                </ContentMarginStyled>}

            <ContentMarginStyled background={"var(--ascent-white-color)"}>
                <section ref={academic_staff_ref} id={`idSelector5`} className="staff-section global-padding contentWrapper">

                    <h2 className="staff-section-title header-font-style header-m-font-size">
                        {staffSection.title}
                    </h2>

                    {/*<p className="staff-section-description  description-bold-style">*/}
                    {/*    {staffSection.description}*/}
                    {/*</p>*/}

                    <div className="academic-staff-layout">
                        {
                            staffSection.staff.map(({name,img,role,email,bio},index)=>

                                <div className="academic-staff-card" key={index}>

                                    <input type="checkbox" style={{display:"none"}} className={"show-more-toggle-checkbox"} id={`toggle-index-${index}`}/>

                                    <div style={{textAlign:"end"}}>
                                        <img src={require(`assets/${img}`).default} alt="" className="academic-staff-img"/>
                                    </div>


                                    <div className="contentWrapper">
                                        <p className="academic-staff-name description-m-font-style">{name}</p>
                                        <p className="academic-staff-role">{role}</p>
                                        <p className="academic-staff-email">{email}</p>
                                        <p className="academic-staff-bio">{bio}</p>
                                    </div>

                                    <div className="contentWrapper-full">
                                        <p className="academic-staff-name description-m-font-style">{name}</p>
                                        <p className="academic-staff-role">{role}</p>
                                        <p className="academic-staff-email" style={{marginBottom:"2em"}}>{email}</p>
                                        <p className="academic-staff-bio-full">{bio}</p>
                                    </div>


                                    <ShowMoreToggleStyled className={"show-more-toggle-label"} htmlFor={`toggle-index-${index}`}>
                                        <ReadMoreStyled className={"toggle-label-on"}>Read More</ReadMoreStyled>
                                        <ReadMoreStyledExtern className={"toggle-label-off"}>Read Less</ReadMoreStyledExtern>
                                    </ShowMoreToggleStyled>
                                    {/*<p className="academic-staff-bio">{`${bio.substring(0,300)}...`} <br/> <Link to={""}><ReadMoreStyled>Read More</ReadMoreStyled></Link></p>*/}
                                    {/*<p className="academic-staff-bio">{bio}</p>*/}
                                </div>
                            )
                        }
                    </div>
                </section>

            </ContentMarginStyled>

            {/*<section className={`forward-link event-topic global-padding ${ColorTheme.forwardLinkColor}`}>*/}


        </div>

    );
}

const ShowMoreToggleStyled = styled.label`
  float: right;
  position: absolute;
  bottom: 0;
  right:0;

  @media (max-width:480px)
  {

    transform: translate(-50%,-50%);
    right:unset;
    left: 50%;
    bottom: 1%;
  }
`

const ShapeLayoutStyled = styled.div
    `

    `
// const ShapeStyled = styled.div
//     `
//       height: 50px;
//       background-color:#001f30;
//       clip-path: polygon(50% 100%, 100% 0%, 100% 100%, 0 100%, 0 0%);
//       //clip-path: polygon(50% 100%, 100% 50%, 100% 100%, 0 100%, 0 50%);
//       //  position: relative;
//       //  top: 0;
//       //  text-align: center;
//       //  padding: 12px;
//       //  //margin-bottom: 6px;
//       //  height: 100px;
//       //  //width: 200px;
//       //  //margin: 0;
//       //  z-index: 1;
//       //}
//       //
//       //&::before {
//       //  content: '';
//       //  position: absolute;
//       //  bottom: -50%;
//       //  left: 0;
//       //  height: 100%;
//       //  width: 51%;
//       //
//       //  //background: #001f30;
//       //  background: #001f30;
//       //  transform: skew(0deg, 6deg);
//       //}
//       //
//       //&::after {
//       //  content: '';
//       //  position: absolute;
//       //  bottom: -50%;
//       //  right: 0;
//       //  height: 100%;
//       //  //width: 50%;
//       //  width: 50%;
//       //
//       //  //background: #001f30;
//       //  background: #001f30;
//       //
//       //  transform: skew(0deg, -6deg);
//
//     `

const ContactStyled = styled.div
    `
      display: flex;

      div{

        :nth-child(1)
        {
          a{
            margin-right:2em;

          }
        }

        display: flex;
        align-items: center;
        img
        {
          width: 1.5em;
          //opacity: .5;
        }

        a
        {

          //text-decoration: none;

          margin-left:.5em;
          white-space: nowrap;

          margin-bottom: 0;

          color: var(--navbar-item-color);
          font-family: var(--font-quicksand);
          font-weight: bold;
          line-height: 1.8em;
          font-size: clamp(0.75em,1.25vw,1.15em);
          text-transform: uppercase;
          transition: color 250ms ease-in-out;

          &:hover
          {
            color: var(--primary-text-color);
          }

          &:hover ~ img
          {
            opacity: 1;
          }

        }
      }
    `

const ReadMoreStyled = styled.p
    `
      //margin: unset;
      //padding:1em;
      cursor: pointer;
      margin-right:1em;
      margin-bottom:1em;
      color:#014164;
      font-size:clamp(.7em,1vw,1em);
      font-family: var(--font-quicksand);
      font-weight:bold;
      float:right;
      &:hover
      {
        color:#001f30;
      }

      @media(max-width:480px)
      {
        font-weight: bold;
        margin: 0;
        font-size:clamp(.85em,1vw,1em);

      }

    `
const ReadMoreStyledExtern = styled(ReadMoreStyled)`
  display:none
`

DepartmentPageDetail.defaultProps = {
    disableStudentProject : false,
    disableResearch:false,
    disableContact: false,

}

export default DepartmentPageDetail;