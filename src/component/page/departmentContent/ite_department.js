import React from 'react';
import './style/teed_department_style.scss'
import PAGE_MOCK_DATA from 'utils/content/departmentDetail_ite/ITE_PAGE_MOCK_DATA.json'
import DepartmentPageDetail from "component/page/departmentContent/component/template/department_page_detail";


const LearnMoreButtonTheme =
    {
        textColor:"white",
        textColorHover:"white",
        backgroundColor:"#00171F",
        backgroundColorHover:"var(--ite-primary-color)",
    }

const SubNavbarColorTheme =
    {
        outlineColor:"#001015",
        outlineColorHover:"#DEDEDE"
    }

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--ite-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"1, 23, 31, 0.8",
        forwardLinkColor:"blue-linear-color",
        headerColor:"ite-header-color"
    }

export default function TeedDepartment(props)
{
    return (
        <DepartmentPageDetail
            ColorTheme={ColorTheme}
            SubNavbarColorTheme={SubNavbarColorTheme}
            PAGE_MOCK_DATA={PAGE_MOCK_DATA}
            LearnMoreButtonTheme={LearnMoreButtonTheme}
        />
    );
}
