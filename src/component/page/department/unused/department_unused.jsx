// import React from 'react';
// import {useRouteMatch} from "react-router-dom";
//
// import Banner from "component/reused-component/banner/headerBanner/banner";
// import DepartmentCard from "component/page/department/unused/department_card.jsx";
//
// import imgURL_1 from "assets/department/steambuilding.jpg";
//
// function Department_unused(props)
// {
//     // const {id} = useParams()
//     // const {path,url} = useRouteMatch()
//     const {url} = useRouteMatch()
//
//     React.useEffect(()=>
//     {
//         console.log({department:"did mount"})
//     },[])
//
//     return (
//         <div>
//             <Banner title={"Departments"} imgUrl={imgURL_1} positionY={"100%"} positionX={"0%"}/>
//             <div className={"department-menu"}>
//                 <div className={"menu-layout"}>
//                     <h2 className={"menu-label add-margin-left"}>Departments</h2>
//
//                     <ul className={"menu-list"}>
//                         {/*{*/}
//                         {/*    departmentList.map(({id,img,title,status,skillList,researchList},index) =>*/}
//                         {/*        <DepartmentCard*/}
//                         {/*            key={index}*/}
//                         {/*            link={`${url}/${id}`}*/}
//                         {/*            filter={status}*/}
//                         {/*            title={title}*/}
//                         {/*            skillList={skillList}*/}
//                         {/*            researchList={researchList}*/}
//                         {/*            imgURL={img}/>)*/}
//                         {/*}*/}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Department_unused;