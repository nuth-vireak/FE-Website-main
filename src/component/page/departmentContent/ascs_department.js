import React from 'react';
import './style/teed_department_style.scss'
import PAGE_MOCK_DATA from 'utils/content/departmentDetail_ascs/ASCS_PAGE_MOCK_DATA.json'
import DepartmentPageDetail from "component/page/departmentContent/component/template/department_page_detail";


const LearnMoreButtonTheme =
    {
        textColor:"white",
        textColorHover:"white",
        backgroundColor:"#00171F",
        backgroundColorHover:"var(--ascs-primary-color)",
    }

const SubNavbarColorTheme =
    {
        outlineColor:"#001015",
        outlineColorHover:"#DEDEDE"
    }

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--ascs-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"1, 23, 31, 0.8",
        forwardLinkColor:"green-linear-color",
        headerColor:"bio-header-color"
    }

export default function AscsDepartment(props)
{
    return (
        <DepartmentPageDetail
            disableResearch={true}
            disableContact={true}
            disableStudentProject={true}
            ColorTheme={ColorTheme}
            SubNavbarColorTheme={SubNavbarColorTheme}
            PAGE_MOCK_DATA={PAGE_MOCK_DATA}
            LearnMoreButtonTheme={LearnMoreButtonTheme}
        />
    );
}
