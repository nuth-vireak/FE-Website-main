import React from 'react';
import './style/teed_department_style.scss'
import PAGE_MOCK_DATA from 'utils/content/departmentDetail_tte/TEE_PAGE_MOCK_DATA.json'
import DepartmentPageDetail from "component/page/departmentContent/component/template/department_page_detail";
import {SlideListItem} from "component/page/departmentContent/slideListItem";


const LearnMoreButtonTheme =
    {
        textColor:"white",
        textColorHover:"white",
        backgroundColor:"#00171F",
        backgroundColorHover:"var(--tee-primary-color)",
    }

const SubNavbarColorTheme =
    {
        outlineColor:"#001015",
        outlineColorHover:"#DEDEDE"
    }

const ColorTheme =
    {
        textColor:"white",
        mainColor:"var(--tee-primary-color)",
        linearColor:"#00171F",
        linearAlpha:"1, 23, 31, 0.8",
        forwardLinkColor:"red-linear-color",
        headerColor:"tee-header-color"
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
