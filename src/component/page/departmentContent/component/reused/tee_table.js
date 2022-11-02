import React from 'react';

function TeeTable(props) {
    return (
        <div>
            <section className={"evaluation-section global-padding evaluation-bio-background"}>

                <h2 className="evaluation-section-title header-font-style header-m-font-size">
                    {evaluationSection.title}
                </h2>
                <p className="evaluation-section-description description-bold-style">
                    {evaluationSection.description}
                </p>

                <table className="evaluation-section-table" {...getTableProps()}>

                    <thead className={"table-thead header-s-font-style header-font-style"}>
                    {headerGroups.map((headerGroup)=>
                        <tr className={"table-tr"} {...headerGroup.getHeaderGroupProps()}>

                            {
                                headerGroup.headers.map(column =>
                                    <th className={"table-th"} {...column.getHeaderProps()}>
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

            <section className="curriculum-Section global-padding curriculum-bio-color">
                <div className="flex-layout-column">
                    <h2 className="curriculum-Section-title header-font-style header-m-font-size">
                        {curriculumSection.title}
                    </h2>
                    <p className="curriculum-Section-description description-bold-style">
                        {curriculumSection.description}
                    </p>
                </div>
                <div ref={curriculumRef}
                     onAnimationEnd={()=>{
                         curriculumRef.current.classList.remove("slide-animation");
                     }}
                     className={"curriculum-Section-table"}>
                    {/*<h3 ref={headerCurriculumRef} className={`table-header header-s-font-size header-font-style teed_${year}`}>*/}
                    {/*    {curriculum.yearLabel}*/}
                    {/*</h3>*/}
                    <h3 ref={headerCurriculumRef} className={`table-header header-s-font-size header-font-style tee-header-color`}>
                        {curriculum.yearLabel}
                    </h3>
                    <div className="grid-layout-column">
                        <table className={"curriculum-section-table"}>
                            <thead className={"table-thead"}>
                            <tr>
                                <th className={"table-main-header description-l-font-style"} colSpan={3}>semester I</th>
                            </tr>

                            <tr className={"table-tr"}>
                                <th className={"table-th table-align-start table-th-title"}>Subject</th>
                                <th className={"table-th"}>Credit</th>
                                <th className={"table-th"}>Hour/Week</th>
                            </tr>
                            </thead>

                            <tbody className={"table-tbody"}>
                            {
                                curriculum.semesterOne.map((subject,index) =>(
                                    <tr className={"table-tr"} key={index}>
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

                            <tr className={"table-tr"}>
                                <th className={"table-th table-align-start table-th-title"}>Subject</th>
                                <th className={"table-th"}>Credit</th>
                                <th className={"table-th"}>Hour/Week</th>
                            </tr>
                            </thead>

                            <tbody className={"table-tbody"}>
                            {
                                curriculum.semesterTwo.map((subject,index) =>(
                                    <tr className={"table-tr"} key={index}>
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

                <ul className={"slide-nav"}>
                    <li className={year === 0 ? "nav-li nav-selected":"nav-li"} onClick={(event)=>handleClickYear(event,0)}>Foundation</li>
                    <li className={year === 1 ? "nav-li nav-selected":"nav-li"} onClick={(event)=>handleClickYear(event,1)}>Second Year</li>
                    <li className={year === 2 ? "nav-li nav-selected":"nav-li"} onClick={(event)=>handleClickYear(event,2)}>Third Year</li>
                    <li className={year === 3 ? "nav-li nav-selected":"nav-li"} onClick={(event)=>handleClickYear(event,3)}>Fouth Year</li>
                </ul>
            </section>
        </div>
    );
}

export default TeeTable;