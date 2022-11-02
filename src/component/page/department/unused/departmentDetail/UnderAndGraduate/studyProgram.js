import React from "react";
import "component/page/department/unused/departmentDetail/UnderAndGraduate/style.scss";

function StudyProgram(props) {

  const curriculum = [
    //year
    [
      //semester
      [
        //subject
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
      [
        //subject
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Computer Programing",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
    ],
    //year
    [
      //semester
      [
        //subject
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
      [
        //subject
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Math",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
    ],
    //year
    [
      //semester
      [
        //subject
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
      [
        //subject
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Web Developmet",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
    ],
    //year
    [
      //semester
      [
        //subject
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
      [
        //subject
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
        {
          subject: "Mobiel Development",
          credit: "3",
          hpw: "2-2",
          leclab: "2-2",
        },
      ],
    ],
  ];

  const showCurriculum = () => {
    let allcurriculum = [];
    let table = [];
    let subjects = [];
    for (let year in curriculum) {
      for (let semester in curriculum[parseInt(year)]) {
        for (let subject of curriculum[parseInt(year)][parseInt(semester)]) {
          subjects.push(
            <tr>
              <td className="col-6">{subject.subject}</td>
              <td className="col-2">{subject.credit}</td>
              <td className="col-2">{subject.hpw}</td>
              <td className="col-2">{subject.leclab}</td>
            </tr>
          );
        }

        table.push(
          <>
            <thead>
              <tr>
                <th colspan="4" className="semester">
                  SEMESTER {parseInt(semester) + 1}
                </th>
              </tr>
              <tr>
                <th>Subject</th>
                <th>Credit</th>
                <th>Hour / Week</th>
                <th>Lecture - Lab</th>
              </tr>
            </thead>
            <tbody>{subjects}</tbody>
          </>
        );
      }
      allcurriculum.push(
        <div className="mb-5 year">
          <h3 className="year-header">Year {parseInt(year) + 1}</h3>
          <table className="curriculum-table">{table}</table>
        </div>
      );
      table = [];
      subjects = [];
    }

    return <div>{allcurriculum}</div>;
  };

  return (
    <div className="outer">
      <div className="banner">
        <div className="banner-title">
          <h1>INFORMATION TECHNOLOGY OF ENGINEERING</h1>
          <h1 className="undergraduate">Undergraduate Program</h1>
        </div>
      </div>
      <div className="content">
        <div className="program">
          <h1 className="header">Undergraduate Program</h1>
          <p>
            The curriculum of Information Technology Engineering Department is
            designed for our students with abilities to use new technologies and
            theories to design and develop computer software. During first and
            second year, students study about foundation theories of computer
            software & network engineering. For third & forth year, they will
            have more advance courses such as Object-Oriented Analysis and
            Design, Product Design, Network Engineering, Database Design,
            Operating System, Mobile Application Development, Artificial
            Intelligence, Commuter Graphic, and Practicum (to build a real
            product). From the end of third year students must go for internship
            in private or pubic organizations. Lecturers and Researchers of IT
            Engineering department mostly graduated from abroad, the key success
            of our team is to give more homework/assignment/project to students,
            and let them hand on to build a real thing by applying technologies
            and theories. Thus, students in our department they will have
            experiences in team work, developing application, make presentation,
            and critical thinking.
          </p>
          <p>
            Based on knowledge which are provided by IT Engineering department,
            graduates can work as:
            <ul>
              <li>Designer/Developer of Computer & Mobile Software</li>
              <li>Database System Analyst/Developer</li>
              <li>Network Engineer</li>
              <li>Game Developer</li>
              <li>Web Developer</li>
            </ul>
          </p>
        </div>

        <div>
          <h1 className="header">Curriculum</h1>
          {showCurriculum()}
        </div>
      </div>
    </div>
  );
}

export default StudyProgram;
