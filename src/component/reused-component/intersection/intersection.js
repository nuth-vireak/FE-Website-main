import React from 'react';
import {InView} from "react-intersection-observer";
import StaffCard from "component/page/departmentDetail/section/staff/staffCard";

function Intersection({threshold,SetSection,sectionLabel,children})
{
    const UpdateIntersection = (inView,entry) =>
        (
            inView && SetSection("staff")
        )

    return (
        <InView threshold={threshold} onChange={UpdateIntersection}>
            {({inView,ref,entry})=>
                (
                    {children}
                )}
        </InView>
    );
}

export default Intersection;