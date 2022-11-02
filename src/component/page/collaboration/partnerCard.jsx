import React from 'react';
import './style/partnerCard.css'

function PartnerCard({name,logo,description}) {
    return (
        <div className={"PartnerCard"}>
            <img className={"logo"} src={logo} alt=""/>
            <div className={"information"}>
                <h2 className={"name"}>{name}</h2>
                <p className={"description"}>{description}</p>
                <button className={"visitButton"}>visit partner website<i className="fas fa-external-link-alt button-icon"/></button>
            </div>
        </div>
    );
}

export default PartnerCard;