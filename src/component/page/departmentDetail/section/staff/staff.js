import React from "react";
import StaffCard from "./staffCard";
import '../../style/staff.css'
import {InView} from "react-intersection-observer";
import styled from 'styled-components'
import Shape from "component/reused-component/backgroundShape/shape";
import StaffSection from "component/page/departmentDetail/section/staff/staffSection";

const calculate = (index) =>
{
    if(index%2 !== 0)
    {
        console.log(Math.round(index/2))
    }
    else
        {
            console.log(index/2)
        }
}

export default function Staff({staffs,threshold,handleIntersection,sectionLabel,sectionTitle})
{
    return (
        <InView threshold={threshold} onChange={(inView,entry)=>handleIntersection(inView,entry,sectionLabel)}>
            {({inView,ref,entry})=>
                (
                    <StaffSection refs={ref} staffs={staffs}/>
                )}
        </InView>
    )
}