import React from 'react';
import Activity from "./activity";
import {activityList} from "component/page/collaboration/activity/activityList";
import '../style/activities.css'
import SmallHeader from "../../../reused-component/header/smallHeader";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";

function Activities({sectionSubtitle,sectionTitle,headerColor,title}) {
    return (
        <div className={"activities-wrapper"}>
            {/*<SmallHeader title={"Activity"}/>*/}
            {/*<SmallHeader title={title} color={headerColor}/>*/}
            {/*<div className={"align-text"}>*/}
            {/*    <h1 className={"middle-header"}>{sectionTitle}</h1>*/}
            {/*    <p className={"subtitle"}>{sectionSubtitle}</p>*/}
            {/*</div>*/}

            <SectionHeaderStyled>
                {title}
            </SectionHeaderStyled>

            <div className={"activities"} id={"activities"}>
                {activityList.map(({catalog,title,description,imgUrl},index) =>
                    <Activity
                        classes={index<activityList.length-1 ? "activity" : "activity last-activity"}
                        key={index}
                        catalog={catalog}
                        title={title}
                        imgUrl={imgUrl}
                        description={description}/>)
                }
            </div>
        </div>

    );
}

Activities.defaultProps = {
    sectionTitle: "activity & collaboration",
    sectionSubtitle: "Join and Participate in active and various activity event and popounity throught out during your degree, discover and make connection with people in the community"
}

export default Activities;