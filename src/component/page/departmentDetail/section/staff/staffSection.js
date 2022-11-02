import React from 'react';
import StaffCard from "component/page/departmentDetail/section/staff/staffCard";
import DetailHeader from "component/reused-component/header/detailHeader";
import  './../../style/staff.css';
function StaffSection({refs,staffs}) {
    return (
        <div ref={refs} className={"staff"} id={"staff"}>
            {/*<Shape/>*/}
            {/*<h1 className={"header"}>Academic Staff</h1>*/}
            <DetailHeader title={"Academic Staff"}/>
            <div className="staff-layout">
                {
                    staffs.map((staff,index) =>
                    {
                        return <StaffCard
                            key={index}
                            index={index}
                            name={staff.name}
                            role={"senior developer | teacher - FE RUPP"}
                            email={"albertenstien@gmail.com"}
                            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five "}/>
                    })
                }
            </div>
        </div>
    );
}

export default StaffSection;