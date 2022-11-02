import React from 'react';
import 'component/page/collaboration/style/partnerCard.css'
import '../style/partnerCardResponsive.css'

function PartnerCard({classes,name,logo,description})
{
    return (
        <div className={`PartnerCard ${classes}`}>
            <img className={"logo"} src={logo} alt=""/>
            <div className={"information"}>
                <h2 className={"name"}>{name}</h2>
                <p className={"description"}>{description}</p>
                <button className={"visitButton"}>visit website<i className="fas fa-external-link-alt button-icon"/></button>
            </div>
        </div>
    );
}

PartnerCard.defaultProps =
    {
        classes:"",
    }

export default PartnerCard;