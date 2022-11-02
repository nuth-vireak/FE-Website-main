import React from 'react';
import IntroSection from "component/page/departmentContent/component/reused/Intro-section/IntroSection";
import {useTable} from "react-table";
import {CurriculumNoteStyled} from "component/page/departmentContent/component/reused/curriculumNote.styled";
import {SectionPaddingStyled} from "component/reused-component/padding/section_padding";

import {ContentMarginStyled} from "component/reused-component/margin/content_margin";
import Routeback from "component/reused-component/routeback/Routeback";

const evaluationColumn = [
    {
        Header:"SCORE",
        accessor:"score"
    },
    {
        Header:"GPA",
        accessor:"gpa"
    },
    {
        Header: "Letter Grade",
        accessor: "letter"
    }
]

export default function DepartmentProgramDetail({
                                                    extraSummary,
                                                    DEPARTMENT_PROGRAM_MOCK_DATA,
                                                    ColorTheme,
                                                    AdditionalIntroSection,
                                                    ProspectSection,
                                                    AdmissionSection,
                                                    OutComeSection,
                                                    CooperationSection,
                                                    BenefitSection,
                                                    GoalSection,
                                                    SkillSection,
                                                    TrackSection,
                                                    GraduationYears,
                                                    CustomizeCurriculumYearsLabel})
{

    const {sectionBanner, sectionIntro, evaluationSection, curriculumSection} = DEPARTMENT_PROGRAM_MOCK_DATA

    const curriculumRef = React.useRef()
    // const headerCurriculumRef = React.useRef()

    const [year,setYear] = React.useState(0)
    const curriculum =  curriculumSection.curriculum[year]

    const handleClickYear = (event,year) =>
    {
        curriculumRef.current.classList.add("slide-animation");
        setYear(year)
    }

    const column = React.useMemo(() => evaluationColumn,[])
    const data = React.useMemo(() => evaluationSection.table,[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow} = useTable({columns:column, data:data})

    const YEARS = CustomizeCurriculumYearsLabel ? CustomizeCurriculumYearsLabel : ['Foundation', 'Second Year', 'Third Year', 'Forth Year']

    const GenerateYearsButton = () => {
        let years = [];
        for(let i=0; i < GraduationYears; i++)
        {
            years.push(<li key={i} className={year === i ? "nav-li nav-selected nav-red-color":"nav-li"} onClick={(event)=>handleClickYear(event,i)}>{YEARS[i]}</li>)
        }
        return years;
    }


    return (
        <div className={"DepartmentProgramDetail"}>

            <section className={"intro-section"}>
                <IntroSection
                    ColorTheme={ColorTheme}
                    imgUrl={sectionBanner.imgUrl}
                    title={sectionBanner.title}
                    subtitle={sectionBanner.subTitle}>
                </IntroSection>
            </section>


            <ContentMarginStyled>
                <SectionPaddingStyled className="section-department-intro bullet-point-text contentWrapper">

                    {/*<div className={"section-department-text global-padding-expect-right"}>*/}
                    <div className={"section-department-text"}>

                        <div className={"department-intro-departmentInfo"}>

                            <Routeback/>

                            <h2 className="department-intro-header header-font-style header-m-font-size ">
                                {/*{sectionIntro.header}*/}
                                Introduction to Degree
                            </h2>

                            {/*<div className="department-intro-description description-bold-style department-intro-text-margin-separator">*/}
                            <div className="department-intro-description description-bold-style">
                                {sectionIntro.summary}
                                {extraSummary}
                            </div>
                            {/*<IntroParagraphStyled>*/}
                            {/*    {sectionIntro.summary}*/}
                            {/*</IntroParagraphStyled>*/}
                        </div>

                        {AdditionalIntroSection}
                    </div>
                </SectionPaddingStyled>
            </ContentMarginStyled>
            {BenefitSection}
            {TrackSection}
            {GoalSection}
            {CooperationSection}
            {OutComeSection}
            {SkillSection}
            {ProspectSection}
            {AdmissionSection}

            <ContentMarginStyled background={"#00202B"}>
                <section className={"evaluation-section global-padding evaluation-bio-background contentWrapper"}>

                    {/*style={{color:evaluationSection.color}}*/}
                    <h2 className="evaluation-section-title header-font-style header-m-font-size" >
                        {evaluationSection.title}
                    </h2>
                    <p className="evaluation-section-description description-bold-style">
                        Assessment of study will be performed at the end of each semester. Evaluation will be shown as the Grade Point Average (GPA) (4.00 scale) and the Cumulative Grade Point Average (4.00 scale).
                    </p>
                    <table className="evaluation-section-table" {...getTableProps()}>

                        <thead className={"table-thead header-s-font-style header-font-style"}>
                        {headerGroups.map((headerGroup)=>
                            <tr className={"table-tr"} {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column =>
                                        <th className={"table-th"} style={{color:evaluationSection.accentColor}} {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    )
                                }
                            </tr>
                        )
                        }
                        </thead>
                        <tbody className={"table-tbody"} {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr className={"table-tr"} {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>
                                            <td className={"table-td description-bold-style"} {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    }
                                </tr>
                            )
                        })
                        }
                        </tbody>

                    </table>
                </section>
            </ContentMarginStyled>

            <ContentMarginStyled background={"#00171f"}>
                <section className="curriculum-Section global-padding curriculum-bio-color contentWrapper">
                    <div className="flex-layoutF-column">
                        <h2 className="curriculum-Section-title header-font-style header-m-font-size">
                            {curriculumSection.title}
                        </h2>
                        <p className="curriculum-Section-description description-bold-style">
                            {curriculumSection.description}
                        </p>

                        <CurriculumNoteStyled className={"curriculum-Section-description description-bold-style"} >
                            {/*<p style={{color:curriculumSection.colorSet[0]}}>L = Lecture</p>*/}
                            {/*<p style={{color:curriculumSection.colorSet[1]}}>P = Practice</p>*/}
                            {/*<p style={{color:curriculumSection.colorSet[2]}}>S = Self Study</p>*/}

                            <p style={{color:curriculumSection.colorSet[2]}}>L = Lecture</p>
                            <p style={{color:curriculumSection.colorSet[2]}}>P = Practice</p>
                            <p style={{color:curriculumSection.colorSet[2]}}>S = Self Study</p>
                        </CurriculumNoteStyled>
                    </div>

                    <ul className={"slide-nav"}>
                        {
                            GenerateYearsButton()
                        }
                    </ul>
                    <div ref={curriculumRef}
                         onAnimationEnd={()=>{
                             curriculumRef.current.classList.remove("slide-animation");
                         }}
                         className={"curriculum-Section-table"}>
                        {/*<h3 ref={headerCurriculumRef} className={`table-header header-s-font-size header-font-style teed_${year}`}>*/}
                        {/*    {curriculum.yearLabel}*/}
                        {/*</h3>*/}

                        {/*<h3 ref={headerCurriculumRef} className={`table-header header-s-font-size header-font-style ${ColorTheme.headerColor}`}>*/}
                        {/*    {curriculum.yearLabel}*/}
                        {/*</h3>*/}

                        <div className="grid-layout-column">
                            <table className={"curriculum-section-table"}>
                                <thead className={"table-thead"}>

                                <tr>
                                    <th className={"table-main-header description-l-font-style"} colSpan={3}>semester I</th>
                                </tr>

                                <tr className={"table-tr"} style={{color:curriculumSection.accentColor}}>
                                    <th className={"table-th table-align-start table-th-title"}>Subject</th>
                                    <th className={"table-th"}>Credit</th>
                                    <th className={"table-th"}>Hours (L - P - S)</th>
                                </tr>
                                </thead>
                                <tbody className={"table-tbody"}>
                                {
                                    curriculum.semesterOne.map((subject,index) =>(
                                        <tr className={"table-tr"} key={index}>
                                            {/* append group */}
                                            {subject.group ? <td className={"table-td table-td-col table-align-start table-group"}>{subject.group}</td> : ''}
                                            <td className={"table-td table-td-col table-align-start"}>{subject.subject}</td>
                                            <td className={"table-td table-td-col"}>{subject.credit}</td>
                                            <td className={"table-td table-td-col"}>{subject.time}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                            <table className={"curriculum-section-table"}>
                                <thead className={"table-thead"}>
                                <tr>
                                    <th className={"table-main-header description-l-font-style"} colSpan={3}>semester II</th>
                                </tr>

                                <tr className={"table-tr"} style={{color:curriculumSection.accentColor}}>
                                    <th className={"table-th table-align-start table-th-title"}>Subject</th>
                                    <th className={"table-th"}>Credit</th>
                                    <th className={"table-th"}>Hours (L - P - S)</th>
                                </tr>
                                </thead>

                                <tbody className={"table-tbody"}>
                                {
                                    curriculum.semesterTwo.map((subject,index) =>(
                                        index < curriculum.semesterTwo.length - 1 ?
                                            <tr className={"table-tr"}  key={index}>
                                                {/* append group */}
                                                {subject.group ? <td className={"table-td table-td-col table-align-start table-group"}>{subject.group}</td> : ''}
                                                <td className={"table-td table-td-col table-align-start"}>{subject.subject}</td>
                                                <td className={"table-td table-td-col"}>{subject.credit}</td>
                                                <td className={"table-td table-td-col"}>{subject.time}</td>
                                            </tr>
                                            :
                                            <tr className={"table-tr"} key={index}>
                                                {/* append group */}
                                                {subject.group ? <td className={"table-td table-td-col table-align-start table-group"}>{subject.group}</td> : ''}
                                                <td className={"table-td table-td-col table-align-start"}>{subject.subject}</td>
                                                <td className={"table-td table-td-col"}>{subject.credit}</td>
                                                <td className={"table-td table-td-col"}>{subject.time}</td>
                                            </tr>
                                    ))
                                }

                                </tbody>

                            </table>
                        </div>
                    </div>

                    {/*<ul className={"slide-nav"}>*/}
                    {/*    {*/}
                    {/*        GenerateYearsButton()*/}
                    {/*    }*/}
                    {/*</ul>*/}
                </section>
            </ContentMarginStyled>
        </div>
    );
}

