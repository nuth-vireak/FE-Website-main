// import React from 'react';
// import Profile_1 from 'assets/profile/profile_4.webp'
// import Profile_1_mobile from 'assets/departmentDetail/staff/teacher-icon-1.png'
// import '../../style/staffCard.css'
// import '../../style/staffCardResponsive.css'
//
// function StaffCard({name,role,email,description,img,index})
// {
//     // const cardIndex = index + 1;
//     // const [dropdown,setDropdown] = React.useState(false);
//     // const [gridArea,setGridArea] = React.useState({})
//
//     // const handleDropdown = () =>
//     // {
//     //     setDropdown(prestate => !prestate)
//
//     //     let convertIndex;
//
//     //     if(cardIndex % 2 === 0)
//     //     {
//     //         convertIndex = cardIndex/2
//
//     //         setGridArea(
//     //             {
//     //                 gridColumn:'2/3',
//     //                 gridRow:`${convertIndex}/${convertIndex + 1} span`
//     //             })
//     //     }
//     //     else
//     //     {
//     //         convertIndex = Math.round(cardIndex/2)
//
//     //         setGridArea(
//     //             {
//     //                 gridColumn:'1/2',
//     //                 gridRow:`${convertIndex}/${convertIndex + 1} span`
//     //             })
//     //     }
//
//
//     // }
//
//     return (
//         <>
//             <div className={`staff-profile`}
//                  // style={dropdown ? gridArea : {gridColumn: "unset",gridRow: "unset"}} >
//                 >
//                 <img className={"profile-image"} src={Profile_1} alt=""/>
//                 <img className={"profile-image-mobile"} src={Profile_1_mobile} alt=""/>
//
//                 <div className="profile-information">
//
//                     <h2 className={"profile-name"}>{name}</h2>
//                     <p className={"profile-role text-style"}>{role}</p>
//                     <p className={"profile-email text-style"}>{email}</p>
//                     <p className={"profile-description"}>{description}</p>
//
//                     {/*<label onClick={handleDropdown} className={"toggle-readMore-label"} htmlFor="toggle-readMore">*/}
//                     {/*    <p className={"readMore"}>ReadMore</p>*/}
//                     {/*</label>*/}
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default StaffCard;